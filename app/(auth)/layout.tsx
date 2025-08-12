import Image from "next/image";
import BannerImage from "../../Assets/Images/bannerimg.jpg";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center  p-6">
      <div className="w-1/2 h-full flex items-center justify-center p-2 shadow-2xl ">
        {children}
      </div>

      <div className="hidden md:flex w-1/2 h-full relative">
        <Image
          src={BannerImage}
          width={1000}
          height={1000}
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full bg-opacity-40 z-10 flex flex-col items-center justify-center pt-32">
          <div className="backdrop-blur-3xl text-center rounded-3xl p-2 shadow-2xl">
            <h1 className="text-2xl 2xl:text-5xl font-bold text-black/75 opacity-100  ">
              Welcome
            </h1>
            <p className="text-black/90 text-2xl  font-extrabold  ">
              The People of Berea Bible Study Platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
