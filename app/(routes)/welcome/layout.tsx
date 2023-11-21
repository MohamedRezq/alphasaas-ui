// "use client";
// import { useSession } from "next-auth/react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const { data: session } = useSession();
  return (
    <main className="flex w-full bg-bgWildsand relative h-[100vh] flex-col items-center justify-center md:py-[56px] md:px-[41px]">
      <div className="bg-white rounded-2xl w-full h-full max-w-[1179px] md:max-h-[608px] flex flex-col items-center py-10 justify-center">
        {children}
      </div>
    </main>
  );
}
