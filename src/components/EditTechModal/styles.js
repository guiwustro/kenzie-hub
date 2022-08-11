import styled from "styled-components";

export const ModalEditTech = styled.div`
	height: 275px;
	width: 296px;
	border-radius: 4px;
	background-color: var(--color-gray-3);
	.modal__header {
		background-color: var(--color-gray-2);
		padding: 0 22px;

		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.modal__close-button {
			font-size: 1rem;
			font-weight: 600;
			line-height: 26px;
			color: var(--color-gray-1);
		}
	}
	.modal__body {
		padding: 24px 22px 32px 22px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: calc(275px - 50px);
		.form-select__status {
			width: 100%;
			height: 60px;
			position: relative;

			select {
				width: 100%;
				height: 40px;
				padding-left: 13px;
				background-color: var(--color-gray-3);
				border: 2px solid;

				color: var(
					${(props) => (props.errors ? "--color-red" : "--color-gray-0")}
				);
				border-radius: 5px;
				font-family: "Inter", sans-serif;
				font-size: 0.9rem;

				&:focus {
					border-color: var(--color-primary);
					color: var(--color-primary);
				}
			}
			option {
				color: var(--color-gray-0);
			}
			.text__error {
				position: absolute;
				top: 42px;
				left: 10px;
			}
		}
		.modal__buttons {
			display: flex;
			justify-content: space-between;
			width: 100%;
			gap: 3%;
			button:nth-child(1) {
				width: 67%;
			}
			button:nth-child(2) {
				width: 30%;
			}
		}
	}
	@media (min-width: 768px) {
		height: 342px;

		width: 369px;
		.modal__body {
			padding: 34px 32px 50px 32px;
			height: calc(342px - 50px);
		}
	}
`;
