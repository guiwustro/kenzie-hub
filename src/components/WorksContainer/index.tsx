import { useModalContext } from "../../contexts/modalContext";
import { useWorksContext } from "../../contexts/worksContext";
import { ThemeButton } from "../../styles/buttons";
import { ThemeSubtitleBig } from "../../styles/typography";
import WorkItem from "../WorkItem";
import { WorkMain } from "./styles";

const WorksContainer = () => {
  const { works } = useWorksContext();
  const { WorkAddModal } = useModalContext();

  return (
    <WorkMain>
      <ThemeSubtitleBig>Projetos</ThemeSubtitleBig>
      <ThemeButton
        size="medium"
        bgcolor="darkGray"
        onClick={() => WorkAddModal()}
      >
        +
      </ThemeButton>
      {!!works.length && (
        <ul>
          {works.map((work) => (
            <WorkItem work={work} key={work.id} />
          ))}
        </ul>
      )}
    </WorkMain>
  );
};

export default WorksContainer;
