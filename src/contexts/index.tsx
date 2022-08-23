import { ReactNode } from "react";

import AuthUserProvider from "./authUserContext";
import ModalProvider from "./modalContext";
import TechnologiesProvider from "./tecnologiesContext";
import WorksProvider from "./worksContext";

interface IProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
  return (
    <AuthUserProvider>
      <ModalProvider>
        <WorksProvider>
          <TechnologiesProvider>{children}</TechnologiesProvider>
        </WorksProvider>
      </ModalProvider>
    </AuthUserProvider>
  );
};
