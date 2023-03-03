import styled from "@emotion/styled";

import { contentPY, font, SectionHeadlineSmall } from "../mixins";
import { colors, breakpoints } from "../variables";
import { TWITTER_KRISTI_LINK } from "../config";

import { EnergizerIcon, TwitterIcon } from "../assets/icons/icons";

export function Team() {
  return (
    <TeamSection id="team">
      <SectionHeadlineSmall content="05">Team</SectionHeadlineSmall>
      <Members>
        <Member>
          <EnergizerIcon fill={colors.aquaGreen} />
          <Name>Sofi</Name>
          <Title>
            <span>Ceo</span>
            <span>Graphic designer</span>
            <span>Story teller</span>
          </Title>
        </Member>

        <Member>
          <EnergizerIcon fill={colors.purple} />
          <Name>Kristi</Name>
          <Title>
            <span>Founder</span>
            <span>Graphic designer</span>
            <span>Artist</span>
            <MemberSocialLink href={TWITTER_KRISTI_LINK} target="_blank">
              <TwitterIcon fill={colors.black} width="100%" height="27px" />
            </MemberSocialLink>
          </Title>
        </Member>

        <Member>
          <EnergizerIcon fill={colors.pink} />
          <Name>Ann</Name>
          <Title> Developer</Title>
        </Member>
      </Members>
    </TeamSection>
  );
}

const TeamSection = styled.section`
  background-color: ${colors.lightPink};
`;

const Members = styled.div`
  margin: auto;
  padding-top: ${contentPY};
  padding-bottom: ${contentPY};

  height: 100%;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
  }
`;

const Member = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &:first-of-type,
  &:last-of-type {
    margin: 0 3.2rem;
  }
  margin: 3.2rem;
  max-width: unset;

  @media (min-width: ${breakpoints.md}) {
    max-width: 15vw;
  }

  @media (min-width: ${breakpoints.sm}) {
    margin: 0;
  }
`;

const Name = styled.p`
  margin: 0;
  margin-top: 2rem;
  ${font({ size: "1.125rem", color: "inherit" })};
  text-transform: uppercase;
`;

const Title = styled.p`
  margin: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${font({ size: "0.9rem", color: "inherit" })};
`;

const MemberSocialLink = styled.a`
  margin-top: 1rem;
`;
