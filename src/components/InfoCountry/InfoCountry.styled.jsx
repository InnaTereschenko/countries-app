import styled from "styled-components";

export const InfoWrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

export const InfoImg = styled.img`
display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const InfoTitle = styled.h2`
margin: 0;
font-weight: var(--font-w-normal);
`;
 
export const InfoList = styled.ul`

`;

export const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const InfoListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--font-w-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    text-shadow: 0 0 10px yellow;
    transform: scale(1.05);
`;