import styled from "styled-components";

export const ErrorMessage = styled.div`
	position: absolute;
	top: 42px;
	left: 0px;
	display: flex;
	align-items: center;
	gap: 3px;
	svg {
		width: 15px;
		height: 15px;
		fill: red;
	}
	span {
		text-align: start;
	}
`;
