import styled from "@emotion/styled";

import { contentPY, font } from "../mixins";
import { TWITTER_LINK, DISCORD_LINK } from "../config";
import { colors, breakpoints } from "../variables";

import { DiscordIcon, TwitterIcon } from "../assets/icons/icons";

export function Footer() {
  return (
    <FooterWrapper>
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
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  padding: ${contentPY} 4rem;
  background-color: ${colors.black};
`;

const FooterStyled = styled.footer`
  width: fit-content;
  margin: auto;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  row-gap: 2.2rem;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: minmax(24rem, 35rem) minmax(18rem, 22rem);
    grid-template-rows: auto auto;
  }
`;

const FooterText = styled.p`
  grid-row-start: 1;
  grid-row-end: 2;

  ${font({ size: "1.75rem", color: colors.white })};
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}) {
    ${font({ size: "2.25rem", color: colors.white })};
    text-align: left;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

const FooterCText = styled.p`
  grid-row-start: 3;
  grid-row-end: 4;

  ${font({ size: "1.125rem", color: colors.white })};
  text-align: center;
  margin: 0;
  display: flex;
  flex-direction: column;

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
`;

const FooterSocials = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: center;

  display: flex;
  background-color: ${colors.black};

  @media (min-width: ${breakpoints.md}) {
    justify-self: end;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const NavIconLink = styled.a`
  margin: 0.8rem 0;
  display: flex;
  align-items: center;

  &:first-of-type {
    padding-right: 1.45rem;
  }
  &:last-of-type {
    padding-left: 1.45rem;
  }
`;
