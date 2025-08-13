import React from "react";
import Link from "next/link";
import { Bell, LogIn, SunIcon, SunMoonIcon } from "lucide-react";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <div className="p-5 bg-white  flex justify-end gap-6  border-b-2 border-black/15">
      <div className="">
        <Link href={"/study"}>
          <Button className=" shadow-md text-black bg-green-300 hover:bg-gray-300 my-0  ">
            <LogIn className="text-orange-600" />
            Start Study
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-6  ">
        <SunIcon
          size={32}
          className="items-center cursor-pointer  rounded-full bg-amber-200 p-1"
        />
        <Link href="/notifications">
          <div className="relative cursor-pointer">
            <Bell
              size={32}
              className="items-center  rounded-full bg-gray-300 p-1"
            />
            <p className="absolute -top-3 right-1 size-4 bg-red-600 text-white rounded-full text-[10px] text-center">
              {3}
            </p>
          </div>
        </Link>
        {<UserButton />}
      </div>
    </div>
  );
};

export default Navbar;
