"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  BookAIcon,
  Crown,
  HelpCircle,
  HelpCircleIcon,
  HomeIcon,
  LucideIcon,
  NotebookIcon,
  Settings,
  Trophy,
  Users2Icon,
  UsersIcon,
} from "lucide-react";
import { LogoutButton } from "./logout-button";

const SidebarIcon = ({ icon: Icon }: { icon: LucideIcon }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");
  return <Icon className="size-6 lg:size-5" />;
};

export const Sidebar = () => {
  const SIDEBAR_LINKS = [
    {
      label: "MENU",
      links: [
        {
          name: "Study Dashboard",
          href: `/`,
          icon: HomeIcon,
        },
        {
          name: "Study Plan & Topics",
          href: "/",
          icon: NotebookIcon,
        },
        // {
        //   name: "Ask the Bible(AI Chat)",
        //   href: "/",
        //   icon: MessageCircleIcon,
        // },
        {
          name: "Community",
          href: "/",
          icon: UsersIcon,
        },
        {
          name: "Achivements",
          href: "/",
          icon: Trophy,
        },
      ],
    },
    {
      label: "Study Tools",
      links: [
        {
          name: "Quizzes & Challenges",
          href: "/",
          icon: HelpCircle,
        },
        {
          name: "Reference Books",
          href: "/record/doctors",

          icon: BookAIcon,
        },
        {
          name: "Group Bible Study",
          href: "/",

          icon: Users2Icon,
        },
      ],
    },
    {
      label: "SYSTEM",
      links: [
        {
          name: "Help & References",
          href: "/",
          icon: HelpCircleIcon,
        },

        {
          name: "Settings",
          href: "/admin/system-settings",
          access: ["admin"],
          icon: Settings,
        },
        {
          name: "Premium Tools",
          href: "/",

          icon: Crown,
        },
      ],
    },
  ];

  return (
    <div className="w-full P-4  flex flex-col justify-between gap-4 bg-white overflow-hidden min-h-full relative">
      <div>
        <div className="flex items-center justify-center lg:justify-start gap-2 pl-1 ">
          <Link
            href="/"
            className="hidden pt-5 items-center lg:flex text-lg 2xl:text-xl font-bold text-emerald-700 "
          >
            <BookAIcon />
            BIBLE STUDY
          </Link>
        </div>

        <div className="mt-4 text-sm pl-1">
          {SIDEBAR_LINKS.map((section) => (
            <div key={section.label} className="flex flex-col gap-2">
              <span className="hidden uppercase lg:block text-black opacity-100 font-bold pt-2 ">
                {section.label}
              </span>

              {section.links.map((link) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-x-2 text-[#2B2B2B] text-sm font-[500] pl-4 transition-all hover:text-slate-600 hover:bg-slate-300/20"
                    )}
                  >
                    <SidebarIcon icon={link.icon} />
                    <span className="hidden lg:block">{link.name}</span>
                    <div
                      className={cn(
                        " ml-auto opacity-0 border-2 border-sky-700 h-[30px] transition-all"
                      )}
                    ></div>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <LogoutButton />
    </div>
  );
};
