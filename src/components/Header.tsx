import { useState } from "react";
import styled from "@emotion/styled";

import * as palette from "../variables";

import { DiscordIcon, TwitterIcon, MenuIcon } from "../assets/icons/icons";

import { TWITTER_LINK, DISCORD_LINK } from "../config";
import { DrawerMenu } from "./DrawerMenu";

export const MenuListItems = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <NavListItem>
        <NavLink
          onClick={() => {
            closeMenu();
          }}
          href="#about"
        >
          About
        </NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink
          onClick={() => {
            closeMenu();
          }}
          href="#gallery"
        >
          Gallery
        </NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink
          onClick={() => {
            closeMenu();
          }}
          href="#team"
        >
          Team
        </NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink
          onClick={() => {
            closeMenu();
          }}
          href="#roadmap"
        >
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
  color: ${palette.colors.white};
  text-transform: uppercase;

  &:hover {
    color: ${palette.colors.purple};
  }
`;

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #000000;
  padding: 0.6rem 0.8rem;
`;

const LogoNavLink = styled(NavLink)`
  display: none;
  margin-left: 0;

  @media (min-width: ${palette.breakpoints.md}) {
    display: flex;
  }
`;

const StyledMenuList = styled.ul`
  display: none;

  @media (min-width: ${palette.breakpoints.md}) {
    display: flex;
  }
`;

export const MenuIconButton = styled.button`
  width: 2.5rem;
  height: 2.2rem;
  justify-self: end;
  /* align-self: flex-end; */
  box-sizing: border-box;

  @media (min-width: ${palette.breakpoints.md}) {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
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
      fill: #6658fd;
    }
  }
`;
