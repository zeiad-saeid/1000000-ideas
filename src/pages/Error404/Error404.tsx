import { Link, useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

import "./Error404.scss";
export default function Error404() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <>
      <div className="bg-pcolor flex justify-center items-center flex-col gap-5 h-screen w-screen">
        <h2 className="text-scolor text-6xl font-bold ">عذراً</h2>
        <p className="text-scolor text-xl">لقد حدث خطأ يا عزيزي العميل</p>
        <p className="text-scolor text-2xl">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link
          className="bg-scolor hover:bg- text-white font-bold py-2 px-4 rounded"
          to="/"
        >Return To Home</Link>
      </div>
    </>
  );
}
