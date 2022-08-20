import { ButtonHTMLAttributes } from "react";

import styled, { css } from "styled-components";

interface IThemeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  bgcolor: "primary" | "lightGray" | "darkGray";
}

export const ThemeButton = styled.button<IThemeButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  border-radius: 5px;
  border-color: transparent;
  color: var(--color-gray-0);
  width: 100%;
  ${(props) =>
    props.size === "big"
      ? css`
          height: 38px;
          @media (min-width: 768px) {
            height: 48px;
          }
        `
      : props.size === "small"
      ? css`
          height: 30px;
          width: 80px;
          @media (min-width: 768px) {
            height: 38px;
          }
        `
      : css`
          height: 28px;
          font-size: 1.5rem;
          width: 30px;
        `}

  background-color: var(
		${({ bgcolor }) => {
    const bgcolors = {
      primary: "--color-primary",
      lightGray: "--color-gray-1",
      darkGray: "--color-gray-2",
    };
    return bgcolors[bgcolor];
  }}
	);

  &:hover {
    background-color: var(
      ${({ bgcolor }) => {
        const bgcolors = {
          primary: "--color-primary-50",
          lightGray: "--color-gray-2",
          darkGray: "--color-gray-1",
        };
        return bgcolors[bgcolor];
      }}
    );
  }
`;
