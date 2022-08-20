import styled from "styled-components";

export const TechItemStyled = styled.li`
  background-color: var(--color-gray-4);
  display: grid;
  min-height: 75px;
  padding: 0 10px;
  margin-bottom: 20px;
  align-items: center;
  grid-template-columns: auto 80px 40px;
  grid-template-areas: "nameTech levelTech buttonsTech";
  border-radius: 8px;
  h3 {
    grid-area: nameTech;
  }
  p {
    grid-area: levelTech;
    justify-self: end;
  }
  .div__buttons {
    grid-area: buttonsTech;
    justify-self: end;
    display: flex;
    gap: 10px;
    flex-direction: column;

    button > svg {
      fill: var(--color-gray-0);
      width: 20px;
    }
  }
  @media (min-width: 768px) {
    li {
      grid-template-columns: auto 80px 80px;
      padding: 0 20px;
      height: 49px;

      div {
        flex-direction: row;
      }
    }
  }
`;
