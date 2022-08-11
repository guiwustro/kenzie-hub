import React, { useContext } from "react";
import { TechMain } from "./styles";
import { TechnologiesUserContext } from "../../contexts/tecnologiesUser";
import TechItem from "../TechItem";

function TecnologiesContainer() {
	const { technologies } = useContext(TechnologiesUserContext);

	return (
		<TechMain>
			<ul>
				{technologies?.map((tech) => (
					<TechItem tech={tech} key={tech.id} />
				))}
			</ul>
		</TechMain>
	);
}

export default TecnologiesContainer;
