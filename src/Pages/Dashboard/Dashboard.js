import React from "react";
// import { useNavigate } from "react-router-dom";
import { NavBar } from "../../Assets/Component/Navbar/Navbar.";
import { SideBar } from "../../Assets/Component/Sidebar/Sidebar";
import { SideBar2 } from "../../Assets/Component/Sidebar/Sidebar2";
import "./Dashboard.css";

export const Dashboard = () => {
  
  return (
    <div>
      <div className="container-dashboard-main">
        <SideBar />
        <div className="dashboard-right">
          <NavBar />
          <div className="content-right">
            <div className="sidebar-right">
              <SideBar2 />
            </div>
            <h1>Halaman Admin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
