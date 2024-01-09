// import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonStyle = styled.button`
  color: var(--color-text);
  padding: 0 1rem;
  background-color: var(--color-ui-base);
  border-radius: var(--border-r);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    text-shadow: 0 0 10px yellow;
    transform: scale(1.05);
  }
`;
