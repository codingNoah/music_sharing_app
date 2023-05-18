import React from "react";
import { Outlet } from "react-router-dom";
import SideBarComponent from "./SideBarComponent";
import { Container } from "./SideBarStyles";

function SideBar() {
  return (
    <Container>
      <SideBarComponent />

      <Outlet />
    </Container>
  );
}

export default SideBar;
