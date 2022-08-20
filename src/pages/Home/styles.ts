import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`;
