import TecnologiesContainer from "../TecnologiesContainer";
import WorksContainer from "../WorksContainer";
import { MainContainer } from "./styles";

const Main = () => {
  return (
    <>
      <MainContainer>
        <TecnologiesContainer />
        <WorksContainer />
      </MainContainer>
    </>
  );
};

export default Main;
