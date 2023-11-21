import Image from "next/image";
import Link from "next/link";
import React from "react";

const DonePage = () => {
  return (
    <div className="max-h-80 w-full px-10 sm:max-w-lg flex justify-center items-center gap-y-5 flex-col">
      <div>
        <Image
          src="/assets/img/animation_500_lhaqq5rg.gif"
          alt="All Set"
          width={200}
          height={200}
        />
        <div className="text-center text-mineshaft dark:text-white text-sm font-bold opacity-75">
          All Set! Hurray!
        </div>
      </div>
      <div className="flex flex-col-reverse gap-x-10 gap-y-3 sm:flex-row items-center justify-around mt-12">
        <Link href="/dashboard">
          <button
            className={`bg-hippiegreen bg-opacity-95 hover:bg-opacity-100 rounded-xl px-8 py-3 text-white text-sm whitespace-nowrap font-medium`}
          >
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonePage;
