import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { AxiosResponse } from "axios";
import { getDataAPI, postDataAPI } from "../fetch/fetch_axios";

export interface IUser {
  id: number;
  fullName: string;
  phone: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login: string;
  password: string;
  groups: number[];
  user_permissions: number[];
}

export type UserType = {
  user: IUser;
  token: string;
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
        const res: AxiosResponse = await postDataAPI("/account/token/", {
          phone: credentials?.phoneNumber,
          password: credentials?.otp,
        });

        if (res.status === 200) {
          const user: AxiosResponse = await getDataAPI([
            "/account/me/",
            res.data.token,
          ]);
          let payload = { token: res.data, user: user.data };
          return payload;
        } else {
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
    async jwt({ user, token }: any) {
      if (user) {
        token.user = user.user;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }: any) {
      try {
        session.user = token.user;
        session.token = token.token;
        return session;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export async function checkAuth() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return null;

  return session.user;
}

declare module "next-auth" {
  interface Session {
    user: UserType;
    token: string;
  }
}
