import React from "react";

const TitleHR = ({ text }: { text: string }) => {
  return (
    <div className="w-full my-3 text-xs flex items-center px-3">
      <div className="w-fit whitespace-nowrap text-mineshaft dark:text-white">
        {text}
      </div>
      <hr className="w-full border border-bottom-1 mx-5 border-gallery" />
    </div>
  );
};

export default TitleHR;
