import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="flex text-xs justify-center items-center flex-col min-h-screen">
      <h1 className="text-3xl text-red-700 font-bold">Oops!</h1>
      <p className="my-5">Sorry, an unexpected error has occured</p>
      <p className="font-bold">{error.statusText || error.message}</p>
    </div>
  );
}
