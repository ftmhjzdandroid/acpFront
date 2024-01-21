import React, { useState, useEffect } from "react";
import ErrorPage from "../../components/molecules/error-page";
interface Iprops {
  children?: React.ReactNode;
}
function WithNetworkStatus(props: Iprops) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function onlineHandler() {
      setIsOnline(true);
    }

    function offlineHandler() {
      setIsOnline(false);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  return (
    <div>
      {!isOnline && <ErrorPage />}
      {props.children}
    </div>
  );
}

export default WithNetworkStatus;
