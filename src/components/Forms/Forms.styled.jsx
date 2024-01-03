import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

@media (min-width: 767.99px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`