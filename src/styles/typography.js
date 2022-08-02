import styled from "styled-components";

export const ThemeTitle = styled.h1`
	font-family: "Inter", sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 1rem;
	line-height: 22px;
	color: var(--color-gray-0);
	@media (min-width: 768px) {
		font-size: 1.2rem;
	}
`;

export const ThemeLabel = styled.label`
	font-family: "Inter", sans-serif;
	font-weight: 400;
	font-size: 0.625rem;
	color: var(--color-gray-0);
	@media (min-width: 768px) {
		font-size: 0.75rem;
	}
`;

export const ThemeInput = styled.input`
	font-family: "Inter", sans-serif;
	font-weight: 400;
	font-size: 0.8rem;
	color: var(--color-gray-0);
	&::placeholder {
		color: var(--color-gray-1);
		font-size: 0.8rem;
	}
	@media (min-width: 768px) {
		font-size: 1rem;
		&::placeholder {
			font-size: 1rem;
		}
	}
`;

export const ThemeParagraph = styled.p`
	font-family: "Inter", sans-serif;
	font-weight: 400;
	font-size: 0.625rem;
	color: var(--color-gray-1);
`;
