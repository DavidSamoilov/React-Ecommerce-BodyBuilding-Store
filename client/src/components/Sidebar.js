import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Sidebar = () => {
  const isOpen = true;
  return (
    <SidebarContainer>
      <aside
        className={`${isOpen ? "sidebar show-sidebar" : "show-sidebar"}`}
      ></aside>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="Davids gym"/>
        <button className="close-btn" type="button">
          <FaTimes/>
        </button>
      </div>
    </SidebarContainer>
  );
};
const SidebarContainer = styled.div``;
export default Sidebar;
