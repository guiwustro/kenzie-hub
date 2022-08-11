import RoutesMain from "./routes";
import Global from "./styles/global";
import AuthUserProvider from "./contexts/authUser";
import TechnologiesUserProvider from "./contexts/tecnologiesUser";
import ModalProvider from "./contexts/modalContext";
function App() {
	return (
		<AuthUserProvider>
			<ModalProvider>
				<TechnologiesUserProvider>
					<Global />
					<RoutesMain />
				</TechnologiesUserProvider>
			</ModalProvider>
		</AuthUserProvider>
	);
}

export default App;
