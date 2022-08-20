import styled from "styled-components";

interface IContainerProps {
  errors: boolean;
}

export const Container = styled.div<IContainerProps>`
  min-width: 300px;
  width: 90%;
  max-width: 420px;
  padding: 30px 18px;
  height: 700px;
  background-color: var(--color-gray-3);
  border-radius: 8px;
  p {
    padding-bottom: 0.7rem;
  }
  form {
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .form-select {
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
  }
  @media (min-width: 768px) {
    max-width: 500px;
    height: 750px;
    padding: 42px 50px;
  }
`;
