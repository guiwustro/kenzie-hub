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
		.form__group {
			display: flex;
			position: relative;
			flex-direction: column;
			width: 100%;
			height: 50px;

			input {
				height: 40px;
				padding-left: 13px;
				position: absolute;
				outline: none;
				padding: 1.25rem;
				width: 100%;
				border-radius: 5px;
				background-color: var(--color-gray-3);
				border: 2px solid var(--color-gray-0);
				&:focus {
					border-color: var(--color-primary);
				}
				&:focus ~ label {
					top: -0.5rem;
					font-size: 0.8rem;
					left: 0.8rem;
					color: var(--color-primary);
				}
				&:not(:placeholder-shown) {
					border-color: var(--color-primary);
				}
				&:not(:placeholder-shown) ~ label {
					top: -0.5rem;
					font-size: 0.8rem;
					left: 0.8rem;
					color: var(--color-primary);
				}
			}

			label {
				position: absolute;
				left: 1rem;
				top: 0.8rem;
				padding: 0 0.5em;
				color: white;
				pointer-events: none;
				transition: top 200ms ease-in, left 200ms ease-in,
					font-size 200ms ease-in;
				background-color: var(--color-gray-3);
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
