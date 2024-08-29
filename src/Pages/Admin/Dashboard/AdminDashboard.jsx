import React, { useState } from "react";
import ProductManagement from "../ProductManagement/ProductManagement";
import CommissionControl from "../CommissionControl/CommissionControl";
import Announcements from "../Announcements/Announcements.jsx";
import {
  DashboardContainer,
  NavBar,
  NavButton,
} from "./AdminDashboard.style.js";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("productManagement");

  return (
    <DashboardContainer>
      <NavBar>
        <NavButton
          active={activeTab === "productManagement"}
          onClick={() => setActiveTab("productManagement")}
        >
          Product Management
        </NavButton>
        <NavButton
          active={activeTab === "commissionControl"}
          onClick={() => setActiveTab("commissionControl")}
        >
          Commission Control
        </NavButton>
        <NavButton
          active={activeTab === "announcements"}
          onClick={() => setActiveTab("announcements")}
        >
          Announcements
        </NavButton>
      </NavBar>
      {activeTab === "productManagement" && <ProductManagement />}
      {activeTab === "commissionControl" && <CommissionControl />}
      {activeTab === "announcements" && <Announcements />}
    </DashboardContainer>
  );
};

export default AdminDashboard;
