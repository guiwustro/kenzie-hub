import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
