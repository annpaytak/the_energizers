import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import { font } from "../mixins";
import { colors, breakpoints } from "../variables";

import Homepage1 from "../assets/homepage_1.png";
import Homepage2 from "../assets/homepage_2.png";
import Homepage3 from "../assets/homepage_3.png";
import Homepage4 from "../assets/homepage_4.png";
import Homepage5 from "../assets/homepage_5.png";
import Homepage6 from "../assets/homepage_6.png";

import { EnergizerIcon } from "../assets/icons/icons";

const left = [Homepage1, Homepage3, Homepage5];
const right = [Homepage2, Homepage4, Homepage6];

function Animation() {
  const leftTimer = useRef(0);
  const rightTimer = useRef(0);
  const [leftCurrent, setLeftCurrent] = useState(0);
  const [rightCurrent, setRightCurrent] = useState(0);

  useEffect(() => {
    leftTimer.current = setInterval(() => {
      setLeftCurrent((current: number) =>
        current === left.length - 1 ? 0 : current + 1
      );
    }, 2500);

    return () => {
      clearInterval(leftTimer.current);
    };
  }, [leftCurrent]);

  useEffect(() => {
    rightTimer.current = setInterval(() => {
      setRightCurrent((current: number) =>
        current === right.length - 1 ? 0 : current + 1
      );
    }, 2650);

    return () => {
      clearInterval(rightTimer.current);
    };
  }, [rightCurrent]);

  return (
    <StyledAnimation>
      <AnimationLeft>
        {left.map(
          (image, index) =>
            index === leftCurrent && (
              <AnimationImg key={image} className="active" src={image} alt="" />
            )
        )}
      </AnimationLeft>
      <AnimationRight>
        {right.map(
          (image, index) =>
            index === rightCurrent && (
              <AnimationImg key={image} className="active" src={image} alt="" />
            )
        )}
      </AnimationRight>
    </StyledAnimation>
  );
}

export function Welcome() {
  return (
    <WelcomeSection id="welcome">
      <Headline>the energizers</Headline>
      <EnergizerIconStyled />
      <Description>
        find and choose your <br /> energizes!
      </Description>
      <Animation />
    </WelcomeSection>
  );
}

const AnimationImg = styled.img`
  height: 0;

  transition: opacity 1s ease-out;
  transition-delay: 2500ms;
  opacity: 0;
  height: 0;
  overflow: hidden;

  &.active {
    opacity: 1;

    @media (min-width: ${breakpoints.md}) {
      height: 80vh;
    }

    @media (min-width: ${breakpoints.lg}) {
      height: 100vh;
    }

    height: 50vh;
  }
`;

const AnimationItem = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  width: auto;
  height: fit-content;

  @media (min-width: ${breakpoints.lg}) {
    top: 5%;
  }
`;

const AnimationLeft = styled(AnimationItem)`
  left: 0;
`;

const AnimationRight = styled(AnimationItem)`
  right: 0;
`;

const StyledAnimation = styled.div`
  height: 100%;
`;

const Headline = styled.h1`
  z-index: 2;
  position: relative;
  margin: 0;
  ${font({ size: "10vw" })};
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${breakpoints["xl"]}) {
    ${font({ size: "8rem" })};
  }
`;

const Description = styled.p`
  align-self: center;
  z-index: 1;
  margin: 0;
  ${font({ size: "1.75rem" })};
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${breakpoints.md}) {
    ${font({ size: "2.25rem" })};
  }
`;

const WelcomeSection = styled.section`
  background-color: ${colors.purple};
  position: relative;
  display: grid;
  grid-template-rows: 12vw 2fr 1fr;
  justify-items: center;
  padding-top: 6rem;
  height: calc(100vh - 50px);

  @media (min-width: ${breakpoints.md}) {
    padding-top: 4.75rem;
    grid-template-rows: 12vw 3fr 1fr;
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-rows: 12vw 2fr 2fr;
  }
`;

const EnergizerIconStyled = styled(EnergizerIcon)`
  width: 73px;
  height: fit-content;

  @media (min-width: ${breakpoints.md}) {
    width: 92px;
    height: 128px;
  }
`;
