import React from "react";
import SaasCard from "@/app/components/views/welcome/SaasCard";
import WelcomeContentBody from "@/app/components/views/welcome/WelcomeContentBody";
import WelcomeFooter from "@/app/components/views/welcome/WelcomeFooter";
import { ISaasCardProps } from "@/utils/types";
import SearchBar from "@/app/components/views/welcome/SearchBar";

export default async function SelectPage() {
  //-------------------------------------------------------//
  // const handleSearch = (text: string) => {};
  //-------------------------------------------------------//
  const res: any[] = [];
  //-------------------------------------------------------//
  return (
    <>
      <SearchBar />
      <WelcomeContentBody>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {res?.map((item: ISaasCardProps, i: number) => (
            <SaasCard
              category_id={item.category_id}
              logo_url={item.logo_url}
              key={`saascard-${item.name}-${i}`}
              name={item.name}
              description={item.description}
              active={false}
              disabled={item.disabled}
              id={item.id}
            />
          ))}
        </div>
      </WelcomeContentBody>
      <WelcomeFooter
        backLink={undefined}
        nextLink="/welcome/integrate"
        title="Select your Saas"
        step={1}
      />
    </>
  );
}
