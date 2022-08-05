import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const ToastContainerStyled = styled(ToastContainer)`
	.Toastify__toast {
		background-color: var(--color-gray-2);
	}

	.Toastify__toast-body > div:last-child {
		color: var(--color-gray-0);
		padding: 10px 0px;
		line-height: 1.3;
	}
	div {
	}
	.Toastify__close-button {
		color: blue;

		svg {
			fill: var(--color-gray-0);
		}
	}
`;
