import { HeaderStyle, WrapperHeader, Title, ThemeTogle } from "./Header.styled";
import Container from "../Container/Container";
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

const Header = () => {
    return (
        <HeaderStyle>
            <Container>
                <WrapperHeader>
                    <Title>Where is the country?</Title>
                    <ThemeTogle>
<IoMoon/> Light Theme
                    </ThemeTogle>
</WrapperHeader>
            </Container>

        </HeaderStyle>
    )
}

export default Header;