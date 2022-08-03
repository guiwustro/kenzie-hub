import styled from "styled-components";

export const Container = styled.div`
	width: 300px;
	padding: 30px 18px;
	height: 550px;
	background-color: var(--color-gray-3);
	border-radius: 8px;
	form {
		height: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.form-select {
			width: 100%;
			height: 50px;
			select {
				width: 100%;
				height: 40px;
				padding-left: 13px;
				background-color: var(--color-gray-3);
				border: 2px solid var(--color-gray-0);
				color: var(--color-gray-0);
				border-radius: 5px;
				font-family: "Inter", sans-serif;
				font-size: 0.9rem;
			}
			option {
				color: var(--color-gray-0);
			}
		}
	}
	@media (min-width: 768px) {
		width: 420px;
		height: 600px;
		padding: 42px 50px;
	}
`;
