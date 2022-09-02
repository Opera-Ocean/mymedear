import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router";
import moment from "moment";

function ProtectedRouter({ children }) {
  const token = localStorage.getItem("token");
  const expireTime = moment(localStorage.getItem("expireTime"));
  const presentTime = moment();
  const isValid = moment(expireTime).isAfter(presentTime);
  let location = useLocation();

  useEffect(() => {
    const checkValid = () => {
      if (!isValid) {
        localStorage.removeItem("token");
        localStorage.removeItem("expireTime");
        localStorage.removeItem("user");
      }
    };
    checkValid();
  }, []);


  if (!token || !isValid) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRouter;
