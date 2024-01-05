import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const Title = styled(Link)`
  color: var(--color-text);
  font-size: var(--font-s-md);
  font-weight: var(--font-w-bold);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    text-shadow: 0 0 10px yellow;
    transform: scale(1.05);
  }
`;

export const ThemeTogle = styled.div`
  text-align: center;
  cursor: pointer;
  color: var(--color-text);
  font-size: var(--font-s-md);
  font-weight: var(--font-w-bold);
  text-transform: capitalize;
`;
