import { currentUser } from "@clerk/nextjs/server";

const Dashboard = async () => {
  const user = await currentUser();
  return (
    <div className="md:p-2 lg:p-4 w-full">
      <div className="w-[60%]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold py-2 ">
          Welcome Again 👋, {user?.firstName} {user?.lastName}
        </h1>
        <p className="md:text-xl text-[#2B2B2B] ">
          "Do your best to present yourself to God as one approved, a worker who
          has no need to be ashamed, rightly handling the word of truth."
        </p>

        <span className="text-emerald-800 font-bold">2 Timothy 2:15 (ESV)</span>
      </div>
    </div>
  );
};

export default Dashboard;
