import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface StatusProps {
  icon: LucideIcon;
  statusNum: number;
  statusNote: string;
  className?: string;
}

const StatusBoard = ({
  icon: Icon,
  statusNum,
  statusNote,
  className,
}: StatusProps) => {
  return (
    <div className={cn("w-[24%]  shadow-2xl p-7 mr-4 rounded-xl", className)}>
      <div className="flex flex-row gap-3">
        <div className=" items-center ">
          <Icon size={34} />
        </div>
        <div className=" items-center">
          <div className="text-4xl font-bold mb-2">{statusNum}</div>
          <div className="text-xl text-gray-600">{statusNote}</div>
        </div>
      </div>
    </div>
  );
};

export default StatusBoard;
