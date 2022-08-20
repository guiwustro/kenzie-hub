import { ToastContainer } from "react-toastify";

import styled from "styled-components";

export const ToastContainerStyled = styled(ToastContainer).attrs({
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})`
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
