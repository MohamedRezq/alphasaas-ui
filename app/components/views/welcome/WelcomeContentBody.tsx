import React from "react";

const WelcomeContentBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[90%] md:h-1/2 mt-16 overflow-y-auto px-10">
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};

export default WelcomeContentBody;
