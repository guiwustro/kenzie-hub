import styled from "styled-components";

interface IWorkItemStyledProps {
  urlContent: string;
}

const WorkItemStyled = styled.li<IWorkItemStyledProps>`
  background-color: var(--color-gray-4);
  display: grid;
  min-height: 75px;

  padding: 10px;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  grid-template-columns: 100px auto 20px;
  grid-template-areas: "nameWork descriptionWork buttonsWork" "urlWork descriptionWork buttonsWork";
  border-radius: 8px;
  .work-title {
    grid-area: nameWork;
  }
  .work-url {
    grid-area: urlWork;
    justify-self: start;

    position: relative;
    a {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      line-height: 1.4;
      font-size: 0.7rem;
      color: var(--color-primary-50);
      text-decoration: none;
    }
  }
  .work-url::before {
    content: ${({ urlContent }) => `"${urlContent}"`};
    visibility: hidden;
    opacity: 0;
    padding: 2px 4px;
    border-radius: 5px;

    font-size: 0.7rem;
    background-color: var(--color-gray-2);
    color: var(--color-gray-0);
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 130%;
  }
  .work-url:hover:before {
    opacity: 1;
    visibility: visible;
  }

  .work-description {
    grid-area: descriptionWork;
    align-self: start;
  }
  .div__buttons-work-item {
    grid-area: buttonsWork;
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
      grid-template-columns: auto 250px 80px;
      padding: 0 20px;
      height: 49px;
      div {
        flex-direction: row;
      }
    }
  }
`;

export default WorkItemStyled;
