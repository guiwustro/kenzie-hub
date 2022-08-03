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
		.form__title {
			h1 {
				text-align: center;
			}
		}
		p {
			text-align: center;
		}
	}

	@media (min-width: 768px) {
		width: 369px;
		padding: 42px 18px;
		height: 502px;
	}
`;
