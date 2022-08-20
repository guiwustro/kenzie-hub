import styled from "styled-components";

export const TechMain = styled.div`
  background-color: var(--color-gray-3);
  width: 100%;
  border-radius: 8px;
  display: grid;
  height: 100%;
  padding: 20px 20px 0px 20px;
  grid-template-rows: 45px auto;
  grid-template-areas:
    "title btnPlus"
    "container container";
  & > h3 {
    grid-area: title;
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
