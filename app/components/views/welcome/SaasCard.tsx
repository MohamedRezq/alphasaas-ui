"use client";
import React, { useState } from "react";
//-----> Components <-----------------------------------------//
import Switch from "react-switch";
import Image from "next/image";
import {
  IApiOrganizationApplication,
  ISaasCardProps,
  integration_status,
} from "@/utils/interfaces";
//-----> END OF IMPORTS <-------------------------------------//

const SaasCard = (props: ISaasCardProps) => {
  //----------------------------------------------------------------------------------//
  const [checked, setChecked] = useState(props.active);
  const handleUpdateOrgAppIntegrationStatus = async (
    checked: boolean | undefined
  ) => {
    const orgApp: IApiOrganizationApplication = {
      organization_id: "1",
      category_id: props.category_id,
      application_id: Number(props.id),
      integration_status: checked
        ? integration_status.pending
        : integration_status.disabled,
    };
    const res: any = null;
    if (res?.status == 201) setChecked(true);
    else if (res?.status == 204) setChecked(false);
  };

  //----------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------//
  return (
    <div
      className=" w-[200px] h-[118px] rounded-2xl bg-wildsand relative"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className="pl-4 pt-5 flex items-center">
        <div
          className={`w-7 rounded-md h-7 p-1 flex justify-center items-center ${
            checked ? "bg-hippiegreen" : "bg-grayish"
          }`}
        >
          <Image
            src={props.logo_url}
            alt="Logo"
            className=""
            width={25}
            height={25}
          />
        </div>
        <div className="text-emperor text-sm font-bold ml-3">{props.name}</div>
      </div>
      <div className=" pl-5 pr-7 pt-1 text-silverchalice text-[9px] pb-2">
        {props.description}
      </div>
      <div
        className={`w-full absolute flex justify-end items-center pr-5 bottom-0 h-[30px] rounded-br-2xl rounded-bl-2xl ${
          checked ? "bg-hippiegreen" : "bg-mercury"
        }`}
      >
        <Switch
          onChange={async () => {
            await handleUpdateOrgAppIntegrationStatus(!checked);
            // setChecked(!checked);
          }}
          onClick={() => {}}
          //disabled={!props.disableable}
          checked={checked === undefined ? false : checked}
          uncheckedIcon={false}
          checkedIcon={false}
          handleDiameter={18}
          offHandleColor="#A5A5A5"
          onHandleColor="#eee"
          onColor="#B1B1B1"
          height={8}
          width={30}
          className=""
        />
      </div>
    </div>
  );
};

export default SaasCard;
