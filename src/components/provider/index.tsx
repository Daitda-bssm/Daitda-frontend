"use client";

import React, { ReactNode } from "react";

import GlobalStyle from "@/style/theme/global";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Provider;
