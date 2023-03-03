import styled from "@emotion/styled";

import { contentPY } from "../mixins";
import { colors, breakpoints } from "../variables";

import AnimationGif from "../assets/animation.gif";

export function Gif() {
  return (
    <GifSection>
      <GifImg src={AnimationGif} alt="" />
    </GifSection>
  );
}

const GifSection = styled.section`
  display: grid;
  justify-items: center;
  height: 100%;
  background-color: ${colors.aqua};
`;

const GifImg = styled.img`
  width: 100vw;
  max-width: 622.95px;
  margin-top: ${contentPY};
  margin-bottom: ${contentPY};

  @media (min-width: ${breakpoints.md}) {
    margin-top: 5.5vw;
    margin-bottom: 5.5vw;
  }
`;
