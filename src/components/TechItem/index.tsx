import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import { useModalContext } from "../../contexts/modalContext";
import {
  ITechData,
  useTechnologiesContext,
} from "../../contexts/tecnologiesContext";
import {
  ThemeParagraphList,
  ThemeSubtitleSmall,
} from "../../styles/typography";
import { TechItemStyled } from "./styles";

interface TechItemProps {
  tech: ITechData;
}

const TechItem = ({ tech }: TechItemProps) => {
  const { deleteTech } = useTechnologiesContext();
  const { TechEditModal } = useModalContext();

  return (
    <>
      <TechItemStyled>
        <ThemeSubtitleSmall>{tech.title}</ThemeSubtitleSmall>
        <ThemeParagraphList>{tech.status}</ThemeParagraphList>
        <div className="div__buttons">
          <button onClick={() => TechEditModal(tech)}>
            <AiFillEdit />
          </button>
          <button onClick={() => deleteTech(tech.id)}>
            <BsFillTrashFill />
          </button>
        </div>
      </TechItemStyled>
    </>
  );
};

export default TechItem;
