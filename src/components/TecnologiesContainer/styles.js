import styled from "styled-components";

export const TechMain = styled.div.attrs({
	className: "tech__container",
})`
	background-color: var(--color-gray-3);
	width: 100%;
	padding: 24px;
	border-radius: 8px;
	/* grid-area: container; */

	ul {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
`;
