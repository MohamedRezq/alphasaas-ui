"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
//-----> Components <----------------------------------------------//
import { TbLogout } from "react-icons/tb";
import TextInput from "@/app/components/common/TextInput";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const FormLogin = () => {
  //--------------------------------------------------------------//
  const router = useRouter();
  //--------------------------------------------------------------//
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isWrongCred, setIsWrongCred] = React.useState(false);
  //--------------------------------------------------------------//
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const res = await signIn("credentials", {
    //   username: email,
    //   password: password,
    //   redirect: false,
    // });

    // if (!res?.error) {
    //   router.push("/dashboard");
    // }
  };
  //--------------------------------------------------------------//
  return (
    <form onSubmit={handleLogin} className="flex flex-col">
      <TextInput id="email" type="email" label="Email Id" onChange={setEmail} />
      <TextInput
        id="password"
        type="password"
        label="Password"
        onChange={setPassword}
      />

      <Link
        href="#"
        className="underline text-xs text-dustygray hover:text-emperor cursor-pointer pr-5 self-end mt-2"
      >
        Forgot Password?
      </Link>
      {isWrongCred ? (
        <div className="h-4 text-center mt-3 text-xs text-red-600">
          Wrong username or password !
        </div>
      ) : (
        <div className="h-4 mt-3"></div>
      )}
      <button
        type="submit"
        className="w-full relative mt-5 text-sm pl-3 text-white bg-hippiegreen rounded-2xl py-2 flex justify-center items-center gap-x-4 bg-opacity-100"
      >
        <TbLogout className="absolute self-center left-24 w-4 h-4" />
        Sign In
      </button>
    </form>
  );
};

export default FormLogin;
