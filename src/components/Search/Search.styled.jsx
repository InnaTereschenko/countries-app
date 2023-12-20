import styled from "styled-components";

export const InputContainer = styled.label`
background-color: var(--color-ui-base);
padding: 1rem 2rem;
display: flex;
align-items: center;
margin-top: 1rem;
margin-bottom: 1.5rem;
border-radius: var( --border-r);
box-shadow: var(--shadow);
width: 100%;
cursor: pointer;

&hover{
    box-shadow: yellow;
}

  @media (min-width: 767.99px) {
    margin-bottom: 0;
    width: 280px;
  }

  `;

export const Input = styled.input`
border-box: none;

`;

