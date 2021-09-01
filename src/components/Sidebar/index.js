import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElement";

function Sidebar({ isOpen, toggle }) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="profile"
              onClick={toggle}
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-30}
            >
              Profile
            </SidebarLink>
            <SidebarLink
              to="experiences"
              onClick={toggle}
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-30}
            >
              Experience
            </SidebarLink>
            <SidebarLink
              to="abilities"
              onClick={toggle}
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-30}
            >
              Abilities
            </SidebarLink>
            <SidebarLink
              to="projects"
              onClick={toggle}
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              Projects
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute
              to="contact"
              onClick={toggle}
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contact
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
