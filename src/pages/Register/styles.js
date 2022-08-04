import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	gap: 20px;
	.register-header {
		max-width: 420px;
		min-width: 300px;
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		@media (min-width: 768px) {
			max-width: 500px;
		}
	}
`;
