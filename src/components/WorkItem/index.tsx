import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import { IWork } from "../../contexts/authUserContext";
import { useModalContext } from "../../contexts/modalContext";
import { useWorksContext } from "../../contexts/worksContext";
import {
  ThemeParagraphList,
  ThemeSubtitleSmall,
} from "../../styles/typography";
import WorkItemStyled from "./styles";

interface WorkItemProps {
  work: IWork;
}

const WorkItem = ({ work }: WorkItemProps) => {
  const { deleteWork } = useWorksContext();
  const { WorkEditModal } = useModalContext();

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
          <button onClick={() => WorkEditModal(work)}>
            <AiFillEdit />
          </button>
          <button onClick={() => deleteWork(work.id)}>
            <BsFillTrashFill />
          </button>
        </div>
      </WorkItemStyled>
    </>
  );
};

export default WorkItem;
