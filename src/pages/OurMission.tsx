import styled from "@emotion/styled";

import { headlineW, contentPY, font, SectionHeadline } from "../mixins";
import { colors, breakpoints } from "../variables";

export function OurMission() {
  return (
    <OurMissionSection>
      <OurMissionContentWrapper>
        <SectionHeadline content="02" right="14vw">
          Our <br />
          Mission
        </SectionHeadline>

        <OurMissionContent>
          <OurMissionTitle>
            We aim to build meaningful friendship with like-minded people.
          </OurMissionTitle>
          <OurMissionDescription>
            Together we synergize, we exchange energy and experience. So that we
            can energize each other, inspary and create something powerful and
            unique.
          </OurMissionDescription>
        </OurMissionContent>
      </OurMissionContentWrapper>
    </OurMissionSection>
  );
}

const OurMissionSection = styled.section`
  height: 100%;
  position: relative;
  display: flex;
  background-color: ${colors.pink};
`;

const OurMissionContentWrapper = styled.div`
  width: ${headlineW};
  margin: auto;
  margin-top: ${contentPY};
  margin-bottom: ${contentPY};

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto;
  }
`;

const OurMissionContent = styled.div`
  width: 100%;
  margin-top: 2rem;

  p {
    ${font({ size: "1rem", color: "inherit", leading: 1 })};
  }

  @media (min-width: ${breakpoints.md}) {
    width: auto;
    margin-top: 0;
  }

  display: flex;
  flex-direction: column;
`;

const OurMissionTitle = styled.p`
  margin: 0;
  margin-bottom: 1.2rem;

  text-transform: uppercase;
`;

const OurMissionDescription = styled.p`
  margin: 0;
`;
