import { useState } from "react";
import styled from "@emotion/styled";

import { colors, breakpoints } from "../variables";
import { TWITTER_LINK, DISCORD_LINK } from "../config";

import { DrawerMenu } from "./DrawerMenu";

import { DiscordIcon, TwitterIcon, MenuIcon } from "../assets/icons/icons";

export const MenuListItems = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <NavListItem>
        <NavLink onClick={closeMenu} href="#about">
          About
        </NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink onClick={closeMenu} href="#gallery">
          Gallery
        </NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink onClick={closeMenu} href="#team">
          Team
        </NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink onClick={closeMenu} href="#roadmap">
          Roadmap
        </NavLink>
      </NavListItem>
    </>
  );
};

export function Header() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <HeaderStyled>
      <LogoNavLink href="#welcome">the energizers</LogoNavLink>

      <StyledMenuList>
        <MenuListItems closeMenu={closeMenu} />
      </StyledMenuList>

      <MenuIconButton onClick={openMenu}>
        <MenuIcon className="" />
      </MenuIconButton>

      <DrawerMenu open={open} closeMenu={closeMenu} />

      <MenuList>
        <NavListItem>
          <NavIconLink href={TWITTER_LINK} target="_blank">
            <TwitterIcon className="hover-purple" />
          </NavIconLink>
        </NavListItem>
        <NavListItem>
          <NavIconLink href={DISCORD_LINK} target="_blank">
            <DiscordIcon className="hover-purple" />
          </NavIconLink>
        </NavListItem>
      </MenuList>
    </HeaderStyled>
  );
}

const NavLink = styled.a`
  margin: 0 1.2rem;
  color: ${colors.white};
  text-transform: uppercase;

  &:hover {
    color: ${colors.purple};
  }
`;

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr auto 1fr;
  }

  background-color: ${colors.black};
  padding: 0.6rem 0.8rem;
`;

const LogoNavLink = styled(NavLink)`
  display: none;
  margin-left: 0;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
  }
`;

const StyledMenuList = styled.ul`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
  }
`;

export const MenuIconButton = styled.button`
  width: 2.5rem;
  height: 2.2rem;
  justify-self: start;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-self: end;
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavIconLink = styled.a`
  padding: 0.45rem;
  display: flex;

  &:hover {
    svg path {
      fill: ${colors.purple};
    }
  }
`;
