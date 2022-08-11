import RoutesMain from "./routes";
import Global from "./styles/global";
import AuthUserProvider from "./contexts/authUser";
import TechnologiesUserProvider from "./contexts/tecnologiesUser";
import ModalProvider from "./contexts/modalContext";
import { ToastContainerStyled } from "./styles/toast";
function App() {
	return (
		<AuthUserProvider>
			<ModalProvider>
				<TechnologiesUserProvider>
					<Global />
					<RoutesMain />
					<ToastContainerStyled />
				</TechnologiesUserProvider>
			</ModalProvider>
		</AuthUserProvider>
	);
}

export default App;
