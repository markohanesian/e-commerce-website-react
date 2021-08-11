import React from 'react'
import Navbar from '../Navbar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

export default function Hero() {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Marketing</HeroH1>
                    <HeroP>Expert marketing services</HeroP>
                    <HeroBtn>Book a consultation</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}
