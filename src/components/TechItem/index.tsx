import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import { AnimatePresence } from "framer-motion";

import { useModalContext } from "../../contexts/modalContext";
import {
  ITechData,
  useTechnologiesContext,
} from "../../contexts/tecnologiesContext";
import {
  ThemeParagraphList,
  ThemeSubtitleSmall,
} from "../../styles/typography";
import EditTechModal from "../EditTechModal";
import { TechItemStyled } from "./styles";

interface TechItemProps {
  tech: ITechData;
}

const TechItem = ({ tech }: TechItemProps) => {
  const { deleteTech } = useTechnologiesContext();
  const { openEditTechModal, setOpenEditTechModal } = useModalContext();
  {
    console.log(tech);
  }

  return (
    <>
      <TechItemStyled>
        <ThemeSubtitleSmall>{tech.title}</ThemeSubtitleSmall>
        <ThemeParagraphList>{tech.status}</ThemeParagraphList>
        <div className="div__buttons">
          <button onClick={() => setOpenEditTechModal(true)}>
            <AiFillEdit />
          </button>
          <button onClick={() => deleteTech(tech.id)}>
            <BsFillTrashFill />
          </button>
        </div>
      </TechItemStyled>
      <AnimatePresence>
        {openEditTechModal && <EditTechModal actualTech={tech} />}
      </AnimatePresence>
    </>
  );
};

export default TechItem;
