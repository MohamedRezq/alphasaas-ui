import React from "react";
import { TiTick } from "react-icons/ti";

interface IAccordionTickItemProps {
  text: string;
}

const AccordionTickItem = (props: IAccordionTickItemProps) => {
  return (
    <div className="flex gap-x-1">
      <TiTick className="text-[#509051]" />
      <div className="text-grayish2 text-[9px] font-medium">{props.text}</div>
    </div>
  );
};

export default AccordionTickItem;
