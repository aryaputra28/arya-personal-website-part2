import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";
import { animateScroll as scroll } from "react-scroll";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            AR
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="profile"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Profile
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experiences"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-30}
              >
                Experiences
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="abilities"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-30}
              >
                Abilities
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="contact"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contact
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
