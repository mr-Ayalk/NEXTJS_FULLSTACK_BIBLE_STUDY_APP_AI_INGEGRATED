import Navbar from "@/components/DashboardComponents/navbar";
import { Sidebar } from "@/components/DashboardComponents/sidebar";

import React from "react";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex  ">
      <div className="w-[20%] md:w-[15%] lg:w-[17%] xl:w-[17%]">
        {/* <Sidebar /> */}
        <Sidebar />
      </div>

      <div className="w-[80%] md:w-[85%] lg:w-[83%] xl:w-[83%] flex flex-col ">
        <Navbar />

        <div className="h-full w-full p-2 overflow-y-scroll bg-white  opacity-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
