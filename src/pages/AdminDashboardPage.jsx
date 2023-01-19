import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import LeadBoard from "../components/LeadBoard/LeadBoard";
import Logout from "../components/Logout/Logout";
import "../pagesStyles/AdminDashboard.css";
import { AuthContext } from "../stateManagement/contexts/AuthContext";


const AdminDashboardPage = () => {

  const { state } = useContext(AuthContext);

  const navigate = useNavigate();




  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/admin/login", { replace: true });
    }
  }, [state.isAuthenticated]);



  return (
    <>
      <div className=" dashboardContainer">
        <div className="dashBoardHeader">
          <h1 className="pageTitle">App</h1>
          <Logout />
        </div>
        <LeadBoard />
      </div>
    </>
  );
};

export default AdminDashboardPage;
