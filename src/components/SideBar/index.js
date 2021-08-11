import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarLink,
  SideBarRoute,
  SideBtnWrap,
} from "./SideBarElements";



const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="/">Branding</SideBarLink>
        <SideBarLink to="/">Consulting</SideBarLink>
        <SideBarLink to="/">Strategy</SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
        <SideBarRoute to="/">Book a Consultation</SideBarRoute>
      </SideBtnWrap>
    </SideBarContainer>
  );
};

export default SideBar;
