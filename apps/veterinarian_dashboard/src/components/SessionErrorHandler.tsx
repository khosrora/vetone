"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LINK_LANDINGPAGE_LOGIN } from "@repo/lib/links";

export default function SessionErrorHandler() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If session is null (invalid/expired) and we're not loading, redirect to login
    if (status === "unauthenticated") {
      router.push(LINK_LANDINGPAGE_LOGIN);
    }
  }, [session, status, router]);

  // Don't render anything, this is just for handling redirects
  return null;
}
