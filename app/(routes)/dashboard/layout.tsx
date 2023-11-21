import Header from "@/app/components/layout/Header";
import Sidebar from "@/app/components/layout/Sidebar";

export default async function DashboardLayout({
  children,
  params,
  searchParams,
}: {
  children: React.ReactNode;
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="w-full dark:bg-darkBg dark:text-white flex gap-x-6 m-auto px-[15px] lg:px-4 py-3 bg-bgWildsand font-medium">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div
        className={`w-full md:pr-3 lg:pr-6 flex flex-col gap-y-[25px] h-[96vh]`}
      >
        <Header headerTitle={"Header"} />
        <div className={`w-full h-full pr-10 mb-[25px] overflow-y-auto`}>
          <div className="w-full xl:w-[885px] mx-auto flex flex-col gap-y-[15px]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
