import styled from "styled-components";
// import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
box-shadow: var(--shadow);
background-color: var(--color-ui-base);

`

export const WrapperHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 0;
`

export const Title = styled.a`
color: var(--color-text);
font-size: var(--font-s-md);
font-weight: var(--font-w-bold);
`
    // .attrs({ to: '/' })`

// `
export const ThemeTogle = styled.div`
text-align: center;
cursor: pointer;
color: var(--color-text);
font-size: var(--font-s-md);
font-weight: var(--font-w-bold);
text-transform: capitalize;
`