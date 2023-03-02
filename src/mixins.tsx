import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as palette from "./variables";

export const headlineW = 86 + "vw";
export const contentPY = "12vw";
export const headlineRest = (100 - 86) / 2 + "vw";

export const font = ({
  size,
  color,
  leading,
}: {
  size?: string;
  color?: string;
  leading?: string;
}) => css`
  font-family: "Helvetica Neue Cyr Bold", Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${size || "1rem"};
  line-height: ${leading || size || "1rem"};
  color: ${color || palette.colors.black};
`;

const headlineSmall = ({ content }: { content: string }) => css`
  position: relative;
  width: ${headlineW};
  margin: 0 auto;
  padding: 1.4rem 0 0.9rem 0;
  ${font({ size: "2.5rem", color: "inherit" })};
  text-transform: uppercase;

  &::after {
    content: "${content}";
    margin: 1.4rem 0 0.9rem 0;
    position: absolute;
    height: fit-content;
    top: 0;
    bottom: 0;
    right: 0;
  }
`;

export const SectionHeadline = styled.h2<{ right?: string; content: string }>`
  @media (min-width: ${palette.breakpoints.xl}) {
    // xl or lg
    font-size: 120px;
  }
  ${({ content }) => headlineSmall({ content })};
  width: 100%;

  @media (min-width: ${palette.breakpoints.md}) {
    // or md check on roman tablet
    position: relative;
    width: fit-content;
    margin: 0;
    ${font({ size: "10vw", color: "inherit", leading: "1" })};
    text-transform: uppercase;

    &::after {
      content: "${({ content }) => content}";
      position: absolute;
      top: 0;
      right: ${({ right }) => (right ? right : "-4rem")};
      ${font({ size: "2.25rem", color: "inherit", leading: "2.75rem" })};
    }
  }
`;

export const SectionHeadlineSmall = styled.h4<{ content: string }>`
  ${({ content }) => headlineSmall({ content })};
`;
