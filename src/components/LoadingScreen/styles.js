import styled from "styled-components";

export const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1024px;
	margin: 0 20px;
	@media (min-width: 1024px) {
		margin: 0 auto;
	}
	gap: 100px;
`;

export const LoadingCircle = styled.div`
	align-self: center;
	position: relative;
	width: 3rem;
	height: 3rem;
	span {
		display: block;
		width: 3rem;
		height: 3rem;
		border: 0.5rem solid var(--color-gray-1);
		border-top: 0.5rem solid #3498db;
		border-radius: 50%;
	}
`;
