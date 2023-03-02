import styled from "@emotion/styled";

import { contentPY } from "../mixins";
import * as palette from "../variables";

import AnimationGif from "../assets/animation.gif";

const GifSection = styled.section`
  display: grid;
  justify-items: center;
  height: 100%;
  background-color: #9bf9f4;
`;

const GifImg = styled.img`
  width: 100vw;
  max-width: 622.95px;
  margin-top: ${contentPY};
  margin-bottom: ${contentPY};

  @media (min-width: ${palette.breakpoints.md}) {
    margin-top: 5.5vw;
    margin-bottom: 5.5vw;
  }
`;

export function Gif() {
  return (
    <GifSection>
      <GifImg src={AnimationGif} alt="" />
    </GifSection>
  );
}
