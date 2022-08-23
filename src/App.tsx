import { Providers } from "./contexts";
import RoutesMain from "./routes";
import Global from "./styles/global";
import { ToastContainerStyled } from "./styles/toast";
function App() {
  return (
    <Providers>
      <Global />
      <RoutesMain />
      <ToastContainerStyled />
    </Providers>
  );
}

export default App;
