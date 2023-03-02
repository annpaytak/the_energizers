import styled from "@emotion/styled";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { font } from "../mixins";
import * as palette from "../variables";

import { DiscordIcon, TwitterIcon, MenuCloseIcon } from "../assets/icons/icons";

import { TWITTER_LINK, DISCORD_LINK } from "../config";
import {
  MenuIconButton,
  MenuListItems,
  NavListItem,
  NavIconLink,
} from "./Header";

export function DrawerMenu({
  open,
  closeMenu,
}: {
  open: boolean;
  closeMenu: () => void;
}) {
  return (
    <Drawer size="100vh" open={open} onClose={closeMenu} direction="top">
      <StyledMenu>
        <MenuIconButton onClick={closeMenu}>
          <MenuCloseIcon />
        </MenuIconButton>
        <StyledMenuListMobile>
          <MenuListItems closeMenu={closeMenu} />
        </StyledMenuListMobile>
        <DrawerNavListItem>
          <NavListItem>
            <NavIconLink href={TWITTER_LINK} target="_blank">
              <TwitterIcon width="100%" height="86px" />
            </NavIconLink>
          </NavListItem>
          <NavListItem>
            <NavIconLink href={DISCORD_LINK} target="_blank">
              <DiscordIcon width="100%" height="86px" />
            </NavIconLink>
          </NavListItem>
        </DrawerNavListItem>
      </StyledMenu>
    </Drawer>
  );
}

const DrawerNavListItem = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledMenu = styled.div`
  display: grid;
  gap: 1rem;
  box-sizing: border-box;

  grid-template-rows: 21px 2fr 1fr;

  width: 100%;
  height: 100vh;
  background-color: #000000;
  padding: 1.2rem;
`;

const StyledMenuListMobile = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    height: auto;
    margin: 0.5rem 0;
    a {
      ${font({ size: "15vw", color: palette.colors.white })};
      text-transform: uppercase;

      @media (min-width: ${palette.breakpoints.sm}) {
        ${font({ size: "10vw", color: palette.colors.white })};
      }
    }
  }

  @media (min-width: ${palette.breakpoints.md}) {
    display: none;
  }
`;
