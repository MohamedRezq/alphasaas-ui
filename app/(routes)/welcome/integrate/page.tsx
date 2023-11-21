import React from "react";
import SaasAccordion from "@/app/components/views/welcome/SaasAccordion";
import WelcomeContentBody from "@/app/components/views/welcome/WelcomeContentBody";
import WelcomeFooter from "@/app/components/views/welcome/WelcomeFooter";
import { ISaasCardProps } from "@/utils/types";

export default async function IntegratePage() {
  //-------------------------------------------------------//
  const applications: any[] = [];
  //-------------------------------------------------------//
  return (
    <>
      <WelcomeContentBody>
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          {applications?.map(
            (card: { application: ISaasCardProps; id: string }, i: number) => (
              <SaasAccordion
                key={`${card.application.name}-${i}`}
                card={{
                  category_id: card.application.category_id,
                  logo_url: card.application.logo_url,
                  name: card.application.name,
                  description: card.application.description,
                  id: card.application.id,
                }}
                preExpand={i === 0 ? true : false}
              />
            )
          )}
        </div>
      </WelcomeContentBody>
      <WelcomeFooter
        backLink="/welcome/select"
        nextLink={applications ? "/welcome/sync" : undefined}
        title="Customize your access"
        step={2}
      />
    </>
  );
}
