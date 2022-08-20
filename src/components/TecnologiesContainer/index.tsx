import { useModalContext } from "../../contexts/modalContext";
import { useTechnologiesContext } from "../../contexts/tecnologiesContext";
import { ThemeButton } from "../../styles/buttons";
import { ThemeSubtitleBig } from "../../styles/typography";
import TechItem from "../TechItem";
import { TechMain } from "./styles";

const TecnologiesContainer = () => {
  const { technologies } = useTechnologiesContext();
  const { setOpenAddTechModal } = useModalContext();

  return (
    <TechMain>
      <ThemeSubtitleBig>Tecnologias</ThemeSubtitleBig>
      <ThemeButton
        size="medium"
        bgcolor="darkGray"
        onClick={() => setOpenAddTechModal(true)}
      >
        +
      </ThemeButton>
      {!!technologies.length && (
        <ul>
          {technologies.map((tech) => (
            <TechItem tech={tech} key={tech.id} />
          ))}
        </ul>
      )}
    </TechMain>
  );
};

export default TecnologiesContainer;
