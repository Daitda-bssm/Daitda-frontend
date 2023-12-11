"use client";

import React, { ReactNode } from "react";

import GlobalStyle from "@/style/theme/global";
import { Provider as JotaiProvider } from "jotai";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <>
      <GlobalStyle />
      <JotaiProvider>{children}</JotaiProvider>
    </>
  );
};

export default Provider;
