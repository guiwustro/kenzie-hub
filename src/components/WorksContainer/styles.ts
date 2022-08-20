import styled from "styled-components";

export const WorkMain = styled.div.attrs({
  className: "work__container",
})`
  background-color: var(--color-gray-3);
  width: 100%;
  height: 100%;
  padding: 20px 20px 0px 20px;
  border-radius: 8px;
  display: grid;
  margin-bottom: 20px;

  grid-template-rows: 45px auto;
  grid-template-areas:
    "title btnPlus"
    "container container";
  & > h3 {
    grid-area: title;
    height: 42px;
    padding-bottom: 20px;
  }
  & > button {
    grid-area: btnPlus;
    justify-self: end;
  }
  & > ul {
    grid-area: container;
    display: flex;
    flex-direction: column;
  }
`;
