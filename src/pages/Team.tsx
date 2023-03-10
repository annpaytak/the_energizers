import styled from "@emotion/styled";

import { contentPY, font, SectionHeadlineSmall } from "../mixins";
import { colors, breakpoints } from "../variables";
import { TWITTER_KRISTI_LINK } from "../config";

import A from "../assets/photo_1_ann.jpg";
import S from "../assets/photo_2_s.jpg";
import X from "../assets/photo_3_x.jpg";

import { TwitterIcon } from "../assets/icons/icons";

export function Team() {
  return (
    <TeamSection id="team">
      <TeamHeadline content="05">Team</TeamHeadline>
      <Members>
        <Member>
          <Photo src={X} />
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
          <Photo src={S} />
          <Name>Sofi</Name>
          <Title>
            <span>Ceo</span>
            <span>Graphic designer</span>
            <span>Story teller</span>
          </Title>
        </Member>

        <Member>
          <Photo src={A} />
          <Name>Ann</Name>
          <Title>
            <span>Frontend developer</span>
            <span>Crypto enthusiast</span>
          </Title>
        </Member>
      </Members>
    </TeamSection>
  );
}

const TeamSection = styled.section`
  background-color: ${colors.lightPink};
`;

const TeamHeadline = styled(SectionHeadlineSmall)`
  line-height: 5.8rem;
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
  align-items: center;

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 2rem;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 277px;
`;

const Name = styled.p`
  margin: 0;
  margin-top: 2rem;
  ${font({ size: "1.125rem", color: "inherit" })};
  text-transform: uppercase;
`;

const Title = styled.p`
  margin: 0;
  margin-top: 0.8rem;
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
