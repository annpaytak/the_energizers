import styled from "@emotion/styled";

import {
  headlineW,
  contentPY,
  headlineRest,
  font,
  SectionHeadline,
} from "../mixins";
import { colors, breakpoints } from "../variables";

const roadmap = [
  "Website creation and launch",
  "Growing Meaningful Community on Twitter & Discord",
  "THE ENERGIZERS NFT Collection Mint",
  "$NRG Community Token Airdrop",
  'Working on a Digital Gallery "THE ENERGIZERS" in some of XRPL Metaverse',
  "Collaboration with NFT artists and creating art projects together",
  "THE ENERGIZERS merchandise",
  "THE ENERGIZERS Hype events",
  "THE ENERGIZERS IRL Art Exhibition",
  "New ideas more to come…",
];

export function Roadmap() {
  return (
    <RoadmapSection id="roadmap">
      <SectionHeadline content="04">Roadmap</SectionHeadline>
      <table>
        <tbody>
          {roadmap.map((text, i) => (
            <tr key={i}>
              <TCell>{(i + 1) * 10}%</TCell>
              <TCellText>{text}</TCellText>
            </tr>
          ))}
        </tbody>
      </table>
    </RoadmapSection>
  );
}

const RoadmapSection = styled.section`
  background-color: ${colors.black};
  padding-top: ${contentPY};
  padding-bottom: ${contentPY};

  h2 {
    margin-left: ${headlineRest};
    padding-bottom: ${contentPY};
    width: ${headlineW};
  }

  @media (min-width: ${breakpoints.md}) {
    h2 {
      padding-bottom: 5vw;
      width: fit-content;
    }
  }

  color: ${colors.white};
`;

const TCell = styled.td`
  width: auto;
  padding: 0.6rem;
  border-top: 1px solid ${colors.white};
  border-bottom: 1px solid ${colors.white};

  @media (min-width: ${breakpoints.sm}) {
    width: 17%;
    padding: 0.6rem;
    padding-left: ${headlineRest};
  }
`;

const TCellText = styled.td`
  width: auto;

  padding: 0.6rem;
  border-top: 1px solid ${colors.white};
  border-bottom: 1px solid ${colors.white};

  ${font({ size: "1.125rem", color: "inherit" })};

  @media (min-width: ${breakpoints.sm}) {
    width: 83%;
  }

  & > span {
    text-transform: uppercase;
  }
`;
