import styled from "styled-components";

interface IFormGroup {
  errors?: boolean;
}

export const FormGroupStyled = styled.div<IFormGroup>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 70px;

  input {
    height: 40px;
    padding-left: 13px;
    position: absolute;
    outline: none;
    width: 100%;
    border-radius: 5px;
    background-color: var(--color-gray-3);
    border: 2px solid;
    border-color: var(
      ${(props) => (props.errors ? "--color-red" : "--color-gray-0")}
    );

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
      /* border-color: var(--color-primary); */
    }
    &:not(:placeholder-shown) ~ label {
      top: -0.5rem;
      font-size: 0.8rem;
      left: 0.8rem;
      /* color: var(--color-primary); */
    }
  }

  label {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    padding: 0 0.5em;
    color: var(${(props) => (props.errors ? "--color-red" : "--color-gray-0")});
    pointer-events: none;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: var(--color-gray-3);
  }
`;

export const FormGroupTextAreaStyled = styled.div<IFormGroup>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 90px;

  textarea {
    height: 60px;
    resize: none;
    padding-top: 0.5rem;
    padding-left: 13px;
    position: absolute;
    outline: none;
    width: 100%;
    border-radius: 5px;
    background-color: var(--color-gray-3);
    border: 2px solid;
    border-color: var(
      ${(props) => (props.errors ? "--color-red" : "--color-gray-0")}
    );

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
      /* border-color: var(--color-primary); */
    }
    &:not(:placeholder-shown) ~ label {
      top: -0.5rem;
      font-size: 0.8rem;
      left: 0.8rem;
      /* color: var(--color-primary); */
    }
  }

  label {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    padding: 0 0.5em;
    color: var(${(props) => (props.errors ? "--color-red" : "--color-gray-0")});
    pointer-events: none;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: var(--color-gray-3);
  }
`;
