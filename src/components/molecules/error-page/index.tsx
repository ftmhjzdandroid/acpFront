import { useState } from "react";

const ErrorPage = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div onClick={() => setShow(false)} className="cursor-pointer p-2 text-center text-white bg-red-400 fixed w-full z-50	">
          <p className="th-border-color">اتصال اینترنت خود را چک کنید.</p>
        </div>
      )}
    </>
  );
};

export default ErrorPage;
