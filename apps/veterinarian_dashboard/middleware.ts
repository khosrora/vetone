// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define login URL based on environment
const LOGIN_URL = process.env.NODE_ENV === "development"
  ? "http://vetone.test:3010/login"
  : "https://vet-one.ir/login";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get(
    process.env.NODE_ENV === "development"
      ? "next-auth.session-token"
      : "__Secure-next-auth.session-token"
  );

  if (!cookie) {
    // If the cookie is not present, redirect to login
    return NextResponse.redirect(new URL(LOGIN_URL, request.url));
  }

  // If the cookie is present, allow the request to proceed
  return NextResponse.next();
}

// Specify the paths where the middleware should run
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/my_requests/:path*",
    "/medicine/:path*",
    "/profile/:path*",
    "/edit_veterinarian/:path*",
    "/ranchers/:path*",
    "/my_addresses/:path*",
    "/",
  ],
};
