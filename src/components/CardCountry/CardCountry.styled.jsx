import styled from "styled-components";

export const CardWrapper = styled.article`
  border-radius: var(--border-r);
  background-color: var(--color-ui-base);
  cursor: pointer;
  box-shadow: var(--shadow);
  overflow: hidden;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;
export const CardInfo = styled.div`
  padding: 1rem 1.5rem 2rem;
`;
export const CardTitle = styled.h3`
  font-size: var(--font-s-md);
  font-weight: var(--font-w-bold);
`;

export const CardList = styled.ul`
  padding: 1rem 0 0;
`;

export const CardListItem = styled.li`
  font-size: var(--font-s-sm);
  font-weight: var(--font-w-light);
  line-height: 1.5;

  & > b {
    font-weight: var(--font-w-bold);
  }
`;
