import React from "react";
import { TailSpin } from "react-loader-spinner";

interface ISpinnerLoaderProps {
  height: string;
  width: string;
}

const SpinnerLoader = (props: ISpinnerLoaderProps) => {
  return (
    <TailSpin
      height={props.height}
      width={props.width}
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default SpinnerLoader;
