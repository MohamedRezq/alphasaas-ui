import React from "react";

export default async function IntegratePage({
  params,
  searchParams,
}: {
  params: { application_id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  //-------------------------------------------------------//
  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <h3>Authenticated !</h3>
      <div className="underline cursor-pointer" onClick={() => window.close()}>
        close this window
      </div>
    </div>
  );
}
