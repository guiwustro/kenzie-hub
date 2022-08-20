import React from "react";
import { useNavigate } from "react-router-dom";

import FormRegister from "../../components/FormRegister";
import Logo from "../../components/Logo";
import { ThemeButton } from "../../styles/buttons";
import { Container } from "./styles";

const Register = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="register-header">
        <Logo />
        <ThemeButton
          size="small"
          bgcolor="darkGray"
          onClick={() => navigate("/", { replace: true })}
        >
          Voltar
        </ThemeButton>
      </div>
      <FormRegister />
    </Container>
  );
};

export default Register;
