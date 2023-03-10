import styled from "@emotion/styled";

import { contentPY, headlineRest, font } from "../mixins";
import { TWITTER_LINK, DISCORD_LINK } from "../config";
import { colors, breakpoints } from "../variables";

import { DiscordIcon, TwitterIcon } from "../assets/icons/icons";

export function Footer() {
  return (
    <FooterStyled>
      <FooterText>
        Join us on Twitter <br />
        and Discord
      </FooterText>
      <FooterCText>
        <span>@2023. TheEnergizers.</span>
        <span>All rights reserved!</span>
      </FooterCText>

      <FooterSocials>
        <NavIconLink href={TWITTER_LINK} target="_blank">
          <TwitterIcon fill={colors.white} width="100" height="86px" />
        </NavIconLink>
        <NavIconLink href={DISCORD_LINK} target="_blank">
          <DiscordIcon fill={colors.white} width="110" height="86px" />
        </NavIconLink>
      </FooterSocials>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  padding-top: ${contentPY};
  padding-bottom: ${contentPY};

  background-color: ${colors.black};
  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 2.2rem;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    padding-left: ${headlineRest};
    padding-right: ${headlineRest};
  }

  color: ${colors.white};
`;

const FooterText = styled.p`
  ${font({ size: "1.75rem", color: colors.white })};
  text-transform: uppercase;
  text-align: center;
  margin: 0;

  grid-row-start: 1;
  grid-row-end: 2;

  @media (min-width: ${breakpoints.md}) {
    ${font({ size: "2.25rem", color: colors.white })};
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;

    text-align: left;
  }

  background-color: ${colors.black};
  display: flex;
  flex-direction: column;

  color: ${colors.white};
`;

const FooterCText = styled.p`
  display: flex;
  ${font({ size: "1.125rem", color: colors.white })};
  text-align: center;
  margin: 0;

  grid-row-start: 3;
  grid-row-end: 4;

  & > span:first-of-type {
    margin-right: 0.4rem;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;

    display: inline;
    text-align: left;
  }
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;

  color: ${colors.white};
`;

const FooterSocials = styled.div`
  width: 100%;
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  justify-content: center;
  background-color: ${colors.black};

  @media (min-width: ${breakpoints.md}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;

    justify-content: flex-end;
  }
`;

const NavIconLink = styled.a`
  margin: 0.8rem 1.45rem;
  display: flex;
  align-items: center;
`;
