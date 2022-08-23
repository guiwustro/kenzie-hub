import styled from "styled-components";

export const ModalAddWork = styled.div`
  height: 370px;

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
    height: calc(370px - 40px);
  }
  @media (min-width: 768px) {
    height: 370px;

    width: 369px;
    .modal__body {
      padding: 34px 32px 40px 32px;
      height: calc(370px - 40px);
    }
  }
`;
export default ModalAddWork;
