import styled from "@emotion/styled";

import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { font } from "../mixins";
import { colors, breakpoints } from "../variables";
import { TWITTER_LINK, DISCORD_LINK } from "../config";

import {
  MenuIconButton,
  MenuListItems,
  NavListItem,
  NavIconLink,
} from "./Header";

import { DiscordIcon, TwitterIcon, MenuCloseIcon } from "../assets/icons/icons";

export function DrawerMenu({
  open,
  closeMenu,
}: {
  open: boolean;
  closeMenu: () => void;
}) {
  return (
    <Drawer
      autoFocus={false}
      maskClosable={true}
      open={open}
      onClose={closeMenu}
      height="100vh"
      style={{
        width: "100vw",
      }}
      placement="top"
    >
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
  background-color: ${colors.black};
  padding: 1.2rem;
`;

const StyledMenuListMobile = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    height: auto;
    margin: 0.5rem 0;
    a {
      ${font({ size: "15vw", color: colors.white })};
      text-transform: uppercase;

      @media (min-width: ${breakpoints.sm}) {
        ${font({ size: "10vw", color: colors.white })};
      }
    }
  }

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;
