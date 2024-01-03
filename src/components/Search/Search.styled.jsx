import styled from "styled-components";

export const InputContainer = styled.label`
background-color: var(--color-ui-base);
padding: 1rem 2rem;
display: flex;
align-items: center;
justify-content: center;
margin-top: 1rem;
margin-bottom: 1.5rem;
border-radius: var( --border-r);
box-shadow: var(--shadow);
max-width: 100%;
// box-sizing: content-box;
cursor: pointer;
transition: box-shadow 0.3s ease, transform 0.3s ease;

&:hover {
    box-shadow: 0 0 10px yellow;
    transform: scale(1.05);
  }

  @media (min-width: 767.99px) {
    margin-bottom: 0;
    width: 280px;
  }

  `;

export const Input = styled.input`
border: none;
margin-right: 2rem;
outline: none;
background-color: var(--color-ui-base);
color: var(--color-text);
`;

