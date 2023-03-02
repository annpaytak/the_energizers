import styled from "@emotion/styled";

import { contentPY, headlineRest, font } from "../mixins";
import * as palette from "../variables";

import { DiscordIcon, TwitterIcon } from "../assets/icons/icons";

import { TWITTER_LINK, DISCORD_LINK } from "../config";
import { NavIconLink } from "../components/Header";

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
          <TwitterIcon width="100%" height="86px" />
        </NavIconLink>
        <NavIconLink href={DISCORD_LINK} target="_blank">
          <DiscordIcon width="100%" height="86px" />
        </NavIconLink>
      </FooterSocials>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  padding-top: ${contentPY};
  padding-bottom: ${contentPY};

  background-color: #000000;
  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 2.2rem;

  @media (min-width: ${palette.breakpoints.md}) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    padding-left: ${headlineRest};
    padding-right: ${headlineRest};
  }

  color: #ffffff;
`;

const FooterText = styled.p`
  ${font({ size: "1.75rem", color: palette.colors.white })};
  text-transform: uppercase;
  text-align: center;
  margin: 0;

  grid-row-start: 1;
  grid-row-end: 2;

  @media (min-width: ${palette.breakpoints.md}) {
    ${font({ size: "2.25rem", color: palette.colors.white })};
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;

    text-align: left;
  }

  background-color: #000000;
  display: flex;
  flex-direction: column;

  color: #ffffff;
`;

const FooterCText = styled.p`
  display: flex;
  ${font({ size: "1.125rem", color: palette.colors.white })};
  text-align: center;
  margin: 0;

  grid-row-start: 3;
  grid-row-end: 4;

  & > span:first-of-type {
    margin-right: 0.4rem;
  }

  @media (min-width: ${palette.breakpoints.md}) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;

    display: inline;
    text-align: left;
  }
  background-color: #000000;
  display: flex;
  flex-direction: column;

  color: #ffffff;
`;

const FooterSocials = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  justify-content: center;
  background-color: #000000;

  & > a {
    margin: 0 1rem;
  }

  @media (min-width: ${palette.breakpoints.md}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;

    justify-content: flex-end;
  }
`;
