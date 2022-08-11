import { createContext, useRef, useState } from "react";

export const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
	const [openAddTechModal, setOpenAddTechModal] = useState(false);
	const [openEditTechModal, setOpenEditTechModal] = useState(false);

	// const modalRef = useRef();

	// const handleOutClick = (event) => {
	// 	console.log(event);
	// };
	// handleOutClick();

	return (
		<ModalContext.Provider
			value={{
				openAddTechModal,
				setOpenAddTechModal,
				openEditTechModal,
				setOpenEditTechModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
