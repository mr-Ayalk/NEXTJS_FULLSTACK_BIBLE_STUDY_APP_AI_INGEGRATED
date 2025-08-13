import { PenIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const YourJournal = () => {
  return (
    <div
      className="mt-20 py-10 w-full rounded-lg pl-2 bg-amber-200
    "
    >
      <p className="text-2xl font-bold inline-flex gap-2 mb-2 ml-10">
        {" "}
        <PenIcon /> Your Devotion time Journal
      </p>
      <div className="w-full relative ">
        <form action="">
          <textarea
            className="w-[70%] rounded-lg p-5 ml-10 focus:bg-neutral-200 focus:border-none "
            rows={5}
            placeholder="Greateful for God's love and grace today .  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit earum sapiente iure omnis?"
          />
        </form>
        <Button className="absolute bottom-1 right-20 bg-green-500 text-black text-bold">
          Post to Community
        </Button>
      </div>
    </div>
  );
};

export default YourJournal;
