import React, { useState } from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <HeroContainer>
          <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroContent> 
        <HeroItems>
          <HeroH1>Greatest Marketing</HeroH1>
          <HeroP>Expert marketing services</HeroP>
          <HeroBtn>Book a consultation</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}
