import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, breakpoints } from "./variables";

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
  leading?: string | number;
}) => css`
  font-family: "Helvetica Neue Cyr Bold", Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${size || "1rem"};
  line-height: ${leading || size || 1};
  color: ${color || colors.black};
`;

const headlineSmall = ({ content }: { content: string }) => css`
  position: relative;
  width: ${headlineW};
  margin: 0 auto;
  ${font({ size: "2.5rem", color: "inherit", leading: 1 })};
  text-transform: uppercase;

  &::after {
    content: "${content}";
    position: absolute;
    height: fit-content;
    top: 0;
    bottom: 0;
    right: 0;
  }
`;

export const SectionHeadline = styled.h2<{ right?: string; content: string }>`
  @media (min-width: ${breakpoints.lg}) {
    ${font({ size: "120px", color: "inherit", leading: 1 })};
  }
  ${({ content }) => headlineSmall({ content })};
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    position: relative;
    width: fit-content;
    margin: 0;
    ${font({ size: "10vw", color: "inherit", leading: "0.95" })};
    text-transform: uppercase;

    &::after {
      content: "${({ content }) => content}";
      position: absolute;
      top: 0;
      right: ${({ right }) => (right ? right : "-4rem")};
      ${font({ size: "2.25rem", color: "inherit", leading: 1 })};
    }
  }
`;

export const SectionHeadlineSmall = styled.h4<{ content: string }>`
  ${({ content }) => headlineSmall({ content })};
`;
