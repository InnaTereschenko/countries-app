import { Wrapper } from "./Main.styled";
import Container from "../Container/Container";

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Main;
