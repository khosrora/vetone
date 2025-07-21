"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

export default function Provider({ children }: { children: ReactNode }) {
 
  return (
    <SWRConfig value={{}}>
      <SessionProvider>{children}</SessionProvider>
    </SWRConfig>
  );
}
