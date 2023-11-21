import React, { ReactNode } from "react";

interface ICheckBoxProps {
  label: ReactNode;
  setCheckBox: Function;
}

const CheckBox = (props: ICheckBoxProps) => {
  return (
    <label className="checkbox-container text-grayish2 text-[9px]">
      {props.label}
      <input
        type="checkbox"
        onClick={(e: any) => props.setCheckBox(e.target?.checked)}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default CheckBox;
