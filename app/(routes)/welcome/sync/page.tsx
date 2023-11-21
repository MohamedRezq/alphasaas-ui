import SaasSyncCard from "@/app/components/views/welcome/SaasSyncCard";
import WelcomeContentBody from "@/app/components/views/welcome/WelcomeContentBody";
import WelcomeFooter from "@/app/components/views/welcome/WelcomeFooter";
import { ISaasCardProps } from "@/utils/types";
import React from "react";

export default async function SyncPage() {
  //-------------------------------------------------------//
  const apps: any[] = [];
  //-------------------------------------------------------//
  return (
    <>
      <WelcomeContentBody>
        <div className="flex flex-col justify-center items-center gap-3 w-full">
          {apps.map(
            (item: { application: ISaasCardProps; id: string }, i: number) => (
              <SaasSyncCard
                category_id={item.application.category_id}
                logo_url={item.application.logo_url}
                key={`saas-sync-${item.application.name}-${i}`}
                name={item.application.name}
                description={item.application.description}
                id={item.id}
              />
            )
          )}
        </div>
      </WelcomeContentBody>
      <WelcomeFooter
        backLink={undefined}
        nextLink="/welcome/done"
        title="Your data is being synced..."
        step={3}
      />
    </>
  );
}
