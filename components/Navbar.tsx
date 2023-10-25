"use client";
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Navbar;
