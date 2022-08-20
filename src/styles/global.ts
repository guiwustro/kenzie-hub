import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
	  --color-text: #000000;
    --color-primary: #FF577F;
    --color-primary-50: #FF427F;
    --color-primary-disable:#59323F;
    --color-gray-0: #F8F9FA;
    --color-gray-1: #868E96;
    --color-gray-2: #343B41;
    --color-gray-3:#212529;
    --color-gray-4:#121214;
    --color-red: #ed4337;
    --color-bgc-modal: #0505057a;
  }

  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    color: var(--color-text);

  }

  body, #root {
    background: var(--color-background);
    -webkit-font-smoothing: antialiased;
    overflow-y: auto;
    width: 100vw;
   height: 100vh;
    background-color:var(--color-gray-4)
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
  }
  input{
    border: 0;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  }
  ul{
    list-style: none;
  }
`;
