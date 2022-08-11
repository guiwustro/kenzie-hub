import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled(motion.div)`
	border-top: 1px solid var(--color-gray-0);
	border-bottom: 1px solid var(--color-gray-0);

	header {
		display: flex;
		height: 131px;
		flex-direction: column;
		justify-content: center;
		gap: 20px;
		@media (min-width: 768px) {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height: 118px;
		}
	}
`;
