import React from "react";

const ChartDiagram = ({ chart }: { chart?: React.ReactElement }) => {
  return (
    <>
      {chart !== undefined ? (
        <>{chart}</>
      ) : (
        <div className="flex justify-center items-center text-xs text-gray-400">
          AlphaSaas Chart Loading...
        </div>
      )}
    </>
  );
};

export default ChartDiagram;
