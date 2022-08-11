import styled from "styled-components";

export const MainContainer = styled.main`
	display: grid;
	padding-top: 20px;
	grid-template-areas:
		"title btnPlus"
		"container container";
	& > h3 {
		grid-area: title;
		padding-bottom: 20px;
	}
	& > button {
		grid-area: btnPlus;
		justify-self: end;
	}
	.tech__container {
		grid-area: container;
	}
`;
