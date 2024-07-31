"use client";

import { NextUIProvider } from "@nextui-org/system";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {

  return (
      <NextUIProvider>
        {children}
      </NextUIProvider>
  );
}
