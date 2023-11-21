"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
//-----> Components <-----------------------------------------//
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";
import AccordionTickItem from "@/app/components/common/AccordionTickItem";
import CheckBox from "@/app/components/common/CheckBox";
import { IApiOrganizationApplication, ISaasCardProps } from "@/utils/types";
import { integrableApplications } from "@/config";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

interface ISaasAccordionProps {
  card: ISaasCardProps;
  preExpand: boolean;
}

export default function SaasAccordion(props: ISaasAccordionProps) {
  const [termsAgreement, setTermsAgreement] = useState(false);
  //----------------------------------------------------------------------------------//
  const [connected, setConnected] = useState(false);
  //----------------------------------------------------------------------------------//
  const handleConnect = () => {
    localStorage.setItem("application_id", props.card.id);
    window.open(
      integrableApplications.get(String(props.card.id)),
      "_blank",
      `location=yes,height=${
        window.innerHeight * 0.75
      },width=520,scrollbars=yes,status=yes`
    );
  };
  useEffect(() => {
    window.addEventListener("focus", async () => {
      const apps: IApiOrganizationApplication[] = [];
      if (apps) {
        const filteredApp = apps.filter(
          (app: IApiOrganizationApplication) =>
            Number(app.application_id) == Number(props.card.id)
        );
        // if (filteredApp) setConnected(true);
      }
    });
  }, []);
  //----------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------//
  return (
    <div className="px-0 w-full md:w-[460px] sm:px-5 mx-2 py-2 rounded-2xl bg-wildsand">
      <Accordion className="w-full rounded-sm bg-wildsand">
        <AccordionItem
          dangerouslySetExpanded={props.preExpand ? true : undefined}
          className="w-full rounded-sm bg-wildsand"
        >
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="flex items-center text-xl font-medium">
                <div
                  className={` w-6 h-6 rounded-md p-1 flex justify-center items-center bg-hippiegreen`}
                >
                  <Image
                    src={props.card.logo_url}
                    alt="Logo"
                    className=""
                    width={25}
                    height={25}
                  />
                </div>
                <div className="text-emperor text-sm font-bold ml-3">
                  {props.card.name}
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <hr className="border-silverchalice mb-5 h-px" />
            <p className="text-[10px] text-grayish2">
              {props.card.description}
            </p>
            <p className="text-[11px] text-emperor flex items-center gap-x-[5px] ml-1 font-bold my-2">
              <BsFillInfoCircleFill className=" text-[#B2B2B2] w-2 h-2" />{" "}
              Access
            </p>
            {["Invoice Access", "Some Access", "Random Access"].map(
              (item: string) => (
                <AccordionTickItem
                  key={`accordion-tick-item-${item}`}
                  text={item}
                />
              )
            )}
            <hr className="border-silverchalice my-5 h-px" />
            {connected ? (
              <div className=" bg-hippiegreen text-white text-xs px-3 py-1 w-fit rounded-xl flex items-center">
                Connected
              </div>
            ) : (
              <>
                <CheckBox
                  label={
                    <span className="flex">
                      I agree to the{" "}
                      <Link
                        href=""
                        className="underline mx-1 items-center flex text-hippiegreen"
                      >
                        Terms and Conditions
                        <HiOutlineExternalLink className="text-silverchalice mx-1" />
                      </Link>
                    </span>
                  }
                  setCheckBox={setTermsAgreement}
                />

                <button
                  className={`${
                    termsAgreement
                      ? "bg-[#5EBF60] hover:bg-hippiegreen"
                      : "bg-[#B2B2B2]"
                  }  rounded-xl py-3 pr-3 pl-[14px] mt-4 text-white text-[10px] font-bold`}
                  disabled={!termsAgreement}
                  onClick={() => handleConnect()}
                >
                  Connect
                </button>
              </>
            )}
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
