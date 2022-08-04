import RoutesMain from "./routes";
import Global from "./styles/global";
import { useState } from "react";
function App() {
	const [user, setUser] = useState();
	return (
		<>
			<Global />
			<RoutesMain user={user} setUser={setUser} />
		</>
	);
}

export default App;
