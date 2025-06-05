import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { DOMAIN } from "@repo/lib/links";
import { AxiosResponse } from "axios";
import { getDataAPI, postDataAPI } from "../fetch/fetch_axios";

export interface IUser {
  id: number;
  fullName: string;
  groups: [];
  is_active: boolean;
  is_rancher: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  is_veterinarian: boolean;
  last_login: string;
  password: string;
  phone: string;
  user_permissions: [];
}

export type TokenType = {
  access: string;
  refresh: string;
};

export type UserType = {
  user: IUser;
  accessToken: string;
  refreshToken: string;
  iat: number;
  exp: number;
  jti: string;
};

export const authOptions: NextAuthOptions = {
  secret: "1d7ce568ae708749843ea",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phoneNumber: {},
        otp: {},
      },
      async authorize(credentials, req): Promise<any> {
        try {
          if (!credentials?.phoneNumber || !credentials?.otp) {
            console.error("Missing credentials:", {
              phoneNumber: !!credentials?.phoneNumber,
              otp: !!credentials?.otp,
            });
            return null;
          }

          // Then verify the code and get tokens
          console.log("credentials", {
            phone: credentials.phoneNumber,
            password: credentials.otp,
          });
          const tokenResponse: AxiosResponse = await postDataAPI(
            "/account/token/",
            {
              phone: credentials.phoneNumber,
              password: credentials.otp,
            }
          );
          if (tokenResponse.status !== 201) {
            console.error("Token verification failed:", tokenResponse.data);
            return null;
          }

          // Get user data with the access token
          const user: AxiosResponse = await getDataAPI([
            "/account/me/",
            tokenResponse.data.access,
          ]);

          if (user.status !== 200) {
            console.error("Failed to get user data:", user.data);
            return null;
          }

          return {
            user: user.data,
            accessToken: tokenResponse.data.access,
            refreshToken: tokenResponse.data.refresh,
          };
        } catch (error: any) {
          console.error("Auth error details:", {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status,
          });
          return null;
        }
      },
    }),
  ],
  cookies: {
    sessionToken: {
      name: `${
        process.env.NODE_ENV == "production" ? "__Secure-" : ""
      }next-auth.session-token`,
      options: {
        domain: DOMAIN,
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV == "production",
      },
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (user) {
        // Initial sign in
        token.user = user.user;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = Date.now() + 5 * 60 * 1000; // 5 minutes
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      // Access token has expired, try to refresh it
      return refreshAccessToken(token);
    },
    async session({ session, token }: any) {
      try {
        session.user = token.user;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        return session;
      } catch (error) {
        console.error("Session error:", error);
        return session;
      }
    },
  },
};

async function refreshAccessToken(token: any) {
  try {
    const response = await postDataAPI("/account/refresh/", {
      refresh: token.refreshToken,
    });

    if (response.status !== 200) {
      throw new Error("RefreshAccessTokenError");
    }

    return {
      ...token,
      accessToken: response.data.access,
      refreshToken: response.data.refresh ?? token.refreshToken,
      accessTokenExpires: Date.now() + 5 * 60 * 1000, // 5 minutes
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export async function checkAuth() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return null;

  return session.user;
}

declare module "next-auth" {
  interface Session {
    user: IUser;
    accessToken: string;
    refreshToken: string;
  }
}
