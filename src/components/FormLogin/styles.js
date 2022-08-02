import styled from "styled-components";

export const FormContainer = styled.div`
	width: 296px;
	background-color: var(--color-gray-3);
	height: 402px;
	padding: 32px 18px;
	border-radius: 10px;
	form {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		div {
			display: flex;
			flex-direction: column;
			gap: 12px;
			width: 100%;

			h1 {
				text-align: center;
			}
			label {
				text-align: start;
			}

			input {
				height: 40px;
				padding-left: 13px;
				width: 100%;
				border-radius: 5px;
				background-color: var(--color-gray-2);
			}

			button {
				width: 100%;
			}

			p {
				text-align: center;
			}
		}
	}
	@media (min-width: 768px) {
		width: 369px;
		padding: 42px 18px;
		height: 502px;
	}
`;
