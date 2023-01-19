import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../stateManagement/contexts/AuthContext";

const NotFoundPage = () => {

  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/admin/login", { replace: true });
    }
  }, [state.isAuthenticated]);

  return (
    <div className="w-full flex justify-center items-center text-7xl h-screen text-gray-700 ">
      Not Found
    </div>
  );
};

export default NotFoundPage;