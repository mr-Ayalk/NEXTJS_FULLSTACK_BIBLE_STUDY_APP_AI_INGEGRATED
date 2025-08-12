import StatusBarChart from "@/components/DashboardComponents/barChart";
import StatusBoard from "@/components/DashboardComponents/statusboard";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { BookOpen, Flame, Target, Users, Users2 } from "lucide-react";
const statusbord = [
  {
    icon: BookOpen,
    statusnum: 25,
    note: "Verses Read This Weak",
    bgcolor: "bg-emerald-400",
  },
  {
    icon: Flame,
    statusnum: 7,
    note: "Study Streak",
    bgcolor: "bg-orange-300",
  },
  {
    icon: Target,
    statusnum: 4,
    note: "Completed Plans",
    bgcolor: "bg-amber-200",
  },
  {
    icon: Users,
    statusnum: 2,
    note: "Group Study",
    bgcolor: "bg-blue-400",
  },
];
const Dashboard = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="md:p-2 lg:p-4 w-full  ">
      <div className="flex flex-row w-full gap-3 ">
        <div className="w-[45%] bg-gradient-to-r from-lime-300 to-lime-50 rounded-2xl p-3 mb-4 shadow-2xl">
          <h1 className="text-2xl md:text-2xl 2xl:text-4xl font-semibold py-2 ">
            Welcome,
            <span className="italic font-light ">
              {user?.firstName} {user?.lastName?.charAt(0)}.
            </span>
          </h1>
          <p className="md:text-xl text-[#2B2B2B] py-5 ">
            "Do your best to present yourself to God as one approved, a worker
            who has no need to be ashamed, rightly handling the word of truth."
          </p>

          <span className="text-emerald-800 font-bold">
            2 Timothy 2:15 (ESV)
          </span>
        </div>
        <div className="w-[53%] mb-4">
          <StatusBarChart />
        </div>
      </div>

      <div className="flex flex-col md:flex-row   ">
        {statusbord.map((item) => (
          <StatusBoard
            key={item.note}
            icon={item.icon}
            statusNum={item.statusnum}
            statusNote={item.note}
            className={item.bgcolor}
          />
        ))}
      </div>

      <div className="flex flex-row w-full gap-3  mt-20 ">
        <div className="w-[45%] bg-white rounded-2xl p-3 mb-4 shadow-2xl ">
          <h1 className="text-2xl md:text-2xl 2xl:text-4xl font-semibold py-2 text-center">
            Welcome Again 👋, {user?.firstName} {user?.lastName}
          </h1>
          <p className="md:text-xl text-[#2B2B2B] py-5 ">
            "Do your best to present yourself to God as one approved, a worker
            who has no need to be ashamed, rightly handling the word of truth."
          </p>

          <span className="text-emerald-800 font-bold">
            2 Timothy 2:15 (ESV)
          </span>
        </div>
        <div className="w-[53%] mb-4">
          <StatusBarChart />
        </div>
      </div>

      <div className="flex flex-col md:flex-row   ">
        {statusbord.map((item) => (
          <StatusBoard
            key={item.note}
            icon={item.icon}
            statusNum={item.statusnum}
            statusNote={item.note}
            className={item.bgcolor}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
