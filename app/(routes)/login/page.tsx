import React from "react";
import Image from "next/image";
//-----> Components <----------------------------------------------//
import logo from "@/public/assets/img/AlphaS wordmark.svg";
import FormLogin from "@/app/components/auth/FormLogin";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const SignInPage = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full max-w-[1179px] md:max-h-[608px] flex flex-col items-center py-10 justify-center">
      <FormLogin />
      <div className="relative mt-24">
        <Image width={105} src={logo} alt="AlphaSaas" />
      </div>
    </div>
  );
};

export default SignInPage;
