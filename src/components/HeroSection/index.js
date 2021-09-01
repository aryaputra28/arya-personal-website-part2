import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";
import Video from "../../videos/video.mp4";

function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Aryaputra Athallah</HeroH1>
        <HeroP>Welcome to My Resume</HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
