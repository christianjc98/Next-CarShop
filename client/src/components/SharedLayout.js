import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../assets/wrappers/components/SharedLayout";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const SharedLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Container>
      <main className="dashboard">
        <Sidebar showSidebar={showSidebar} />
        <div className="main-content">
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Container>
  );
};
export default SharedLayout;
