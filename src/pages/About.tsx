import styled from "@emotion/styled";

import { font, headlineW, SectionHeadline } from "../mixins";
import { colors, breakpoints } from "../variables";

import EmotionalCircle from "../assets/emotional_circkle.png";

export function About() {
  return (
    <AboutSection id="about">
      <ContentWrapper>
        <SectionHeadline content="01">About</SectionHeadline>

        <Content>
          <p>
            THE ENERGIZERS is an NFT collection where all elements symbolize
            feelings and emotions. This collection about human energy. Always
            unrepeatable, unique and different.
          </p>
          <p>
            They are 8 primary emotions: Joy, Acceptance, Fear, Surprise,
            Sadness, Disgust, Anger and Anticipation. Which are always
            interconnected and flow from each other.
          </p>
          <p>
            So our collection about us! About our emotional states and energy
            which we share to the world!
          </p>
        </Content>
      </ContentWrapper>

      <EmotionalCircleImg src={EmotionalCircle} alt="" />
    </AboutSection>
  );
}

const AboutSection = styled.section`
  display: grid;
  height: 100%;
  background-color: ${colors.black};
  padding-bottom: 3rem;

  color: ${colors.white};
`;

const ContentWrapper = styled.div`
  width: ${headlineW};
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 2rem;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media (min-width: ${breakpoints.md}) {
    margin-top: 0;
  }

  p {
    ${font({ size: "1rem", color: "inherit", leading: 1 })};
  }

  p:first-of-type {
    margin: 0;
  }

  p:last-of-type {
    margin-top: 0;
  }
`;

const EmotionalCircleImg = styled.img`
  margin: auto;
  width: ${headlineW};
  margin-bottom: 3rem;

  @media (min-width: ${breakpoints.md}) {
    width: 60vw;
  }
`;
