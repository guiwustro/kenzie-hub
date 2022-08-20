import AuthUserProvider from "./contexts/authUserContext";
import ModalProvider from "./contexts/modalContext";
import TechnologiesProvider from "./contexts/tecnologiesContext";
import WorksProvider from "./contexts/worksContext";
import RoutesMain from "./routes";
import Global from "./styles/global";
import { ToastContainerStyled } from "./styles/toast";
function App() {
  return (
    <AuthUserProvider>
      <ModalProvider>
        <WorksProvider>
          <TechnologiesProvider>
            <Global />
            <RoutesMain />
            <ToastContainerStyled />
          </TechnologiesProvider>
        </WorksProvider>
      </ModalProvider>
    </AuthUserProvider>
  );
}

export default App;
