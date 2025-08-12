import React from "react";
import Link from "next/link";
import { Bell } from "lucide-react";
import { useAuth, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div className="p-5 bg-white  flex justify-between border-b-2 border-black/15">
      <h1 className="text-xl font-medium text-gray-500 capitalize">
        {"Overview"}
      </h1>

      <div className="flex items-center gap-4">
        <Link href="/notifications">
          <div className="relative cursor-pointer">
            <Bell />
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
