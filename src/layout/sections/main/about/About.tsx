import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import Typewriter from "typewriter-effect";
import { Button } from "../../../../components/Button";
import { NavLink } from "../../../../components/link/Link";
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";
import photo from "../../../../assets/images/173543381_545605816406879_8761131686456400960_n-_1_.webp";

export const About = () => {
  return (
    <StyledAbout>
      <Photo />
      <FlexWrapper
        direction={"column"}
        justifyContent={"space-evenly"}
        gap={"25px"}
      >
        <Name>
          I'm <span>Daniil Lameika</span>
        </Name>
        <MainTitle>
          <p>Front-End Developer</p>
          <Typewriter
            options={{
              strings: ["Front-End Developer"],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </MainTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
          ipsum in justo vestibulum vulputate.
        </Description>
        <RegisterButtons>
          <Button>See Projects</Button>
          <NavLink to={"#"}>Download Resume</NavLink>
        </RegisterButtons>
      </FlexWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.article`
  display: flex;
  align-items: center;
  gap: 76px;
  flex-wrap: wrap;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);

  background-image: linear-gradient(
    147deg,
    ${Theme.colors.primaryBlur} -6.76%,
    ${Theme.colors.secondaryBlur} 102.96%
  );

  border-radius: 200px 0;
  border: 2px solid ${Theme.colors.secondary};
  backdrop-filter: blur(4px);
  max-width: 1158px;
  width: 100%;
  padding: 43px 11px 41px 104px;
  margin-top: 188px;

  @media ${Theme.media.tablet} {
    gap: 0;
    max-width: 590px;
    padding: 29px 51px 86px 76px;
    justify-content: center;
  }
`;

const RegisterButtons = styled.div`
  display: flex;
  gap: 32px;
`;

const Name = styled.h2`
  ${font({
    weight: 700,
    Fmax: 60,
    Fmin: 34,
    color: Theme.colors.font.pramiary.light,
  })}

  span {
    color: ${Theme.colors.accent};
  }
`;

const MainTitle = styled.h1`
  ${font({
    color: Theme.colors.font.pramiary.light,
    weight: 700,
    Fmax: 60,
    Fmin: 34,
  })}

  p {
    display: none;
  }
`;

const Description = styled.p`
  max-width: 376px;
  width: 100%;

  ${font({ Fmax: 20, Fmin: 11 })}
`;

const Photo = styled.img.attrs(() => ({
  src: photo,
  alt: "Photo",
}))`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 335px;
  border: 25px solid #fff;

  @media ${Theme.media.tablet} {
    width: 335px;
    height: 335px;
  }
`;