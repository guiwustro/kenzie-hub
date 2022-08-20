import { AiFillWarning } from "react-icons/ai";

import { ThemeTextError } from "../../styles/typography";
import { Container } from "./styles";

interface ErrorMessageProps {
  error?: string;
}

function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <Container>
      <AiFillWarning />
      <ThemeTextError>{error}</ThemeTextError>
    </Container>
  );
}

export default ErrorMessage;
