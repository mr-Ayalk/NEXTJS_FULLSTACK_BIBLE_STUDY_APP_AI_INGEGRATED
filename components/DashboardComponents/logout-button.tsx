"use client";

import React from "react";

import { LogOut } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { Button } from "../ui/button";

export const LogoutButton = () => {
  const { signOut } = useClerk();
  return (
    <Button
      variant={"outline"}
      className="w-fit bottom-3 left-10 absolute gap-2 px-0 md:px-4 "
      onClick={() => signOut({ redirectUrl: "/" })}
    >
      <LogOut />
      <span className="hidden lg:block text-emerald-800">Logout</span>
    </Button>
  );
};
