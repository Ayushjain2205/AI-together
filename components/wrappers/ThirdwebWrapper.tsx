"use client";
import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const ThirdwebWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="162f76bf7fe8332038779271eb2bef09"
    >
      <div>{children}</div>
    </ThirdwebProvider>
  );
};

export default ThirdwebWrapper;
