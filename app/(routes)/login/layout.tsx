import Image from "next/image";
import { Quicksand } from "next/font/google";
import logo from "@/public/assets/img/AlphaS wordmark.svg";

const font = Quicksand({ subsets: ["latin"] });

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full bg-[#F8F8F8] relative h-[100vh] flex-col items-center justify-center md:py-[56px] md:px-[41px]">
      <div className="bg-white rounded-2xl w-full h-full max-w-[1179px] md:max-h-[608px] flex flex-col items-center py-10 justify-center">
        {children}
        <div className="relative mt-24">
          <Image width={105} src={logo} alt="AlphaSaas" />
        </div>
      </div>
    </main>
  );
}
