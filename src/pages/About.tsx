import styled from "@emotion/styled";

import { headlineW, SectionHeadline } from "../mixins";
import * as palette from "../variables";

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
  background-color: #000000;
  padding-bottom: 3rem;

  color: #ffffff;
`;

const ContentWrapper = styled.div`
  width: ${headlineW};
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 2rem;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;

  @media (min-width: ${palette.breakpoints.md}) {
    width: 86vw;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  p:first-of-type {
    margin: 1.6rem 0 0;
  }

  p:last-of-type {
    margin-top: 0;
  }
`;

const EmotionalCircleImg = styled.img`
  margin: auto;
  width: ${headlineW};
  margin-bottom: 3rem;

  @media (min-width: ${palette.breakpoints.md}) {
    width: 60vw;
  }
`;
