import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import { AnimatePresence } from "framer-motion";

import { IWork } from "../../contexts/authUserContext";
import { useModalContext } from "../../contexts/modalContext";
import { useWorksContext } from "../../contexts/worksContext";
import {
  ThemeParagraphList,
  ThemeSubtitleSmall,
} from "../../styles/typography";
import EditWorkModal from "../EditWorkModal";
import WorkItemStyled from "./styles";

interface WorkItemProps {
  work: IWork;
}

const WorkItem = ({ work }: WorkItemProps) => {
  const { deleteWork } = useWorksContext();
  const { setOpenEditWorkModal, openEditWorkModal } = useModalContext();

  return (
    <>
      <WorkItemStyled urlContent={work.deploy_url}>
        <ThemeSubtitleSmall className="work-title">
          {work.title}
        </ThemeSubtitleSmall>
        <ThemeParagraphList className="work-url">
          <a href={work.deploy_url}>Link do projeto</a>
        </ThemeParagraphList>
        <ThemeParagraphList className="work-description">
          {work.description}
        </ThemeParagraphList>

        <div className="div__buttons-work-item">
          <button onClick={() => setOpenEditWorkModal(true)}>
            <AiFillEdit />
          </button>
          <button onClick={() => deleteWork(work.id)}>
            <BsFillTrashFill />
          </button>
        </div>
      </WorkItemStyled>
      <AnimatePresence>
        {openEditWorkModal && <EditWorkModal actualTech={work} />}
      </AnimatePresence>
    </>
  );
};

export default WorkItem;
