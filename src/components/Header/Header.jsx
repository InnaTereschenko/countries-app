import { useState, useEffect } from "react";
import { HeaderStyle, WrapperHeader, Title, ThemeTogle } from "./Header.styled";
import Container from "../Container/Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

const Header = () => {
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <HeaderStyle>
      <Container>
        <WrapperHeader>
          <Title to='/'>Where is the country?</Title>
          <ThemeTogle onClick={toggleTheme}>
                       {theme === 'light' ? (<IoMoonOutline size='14px'/>) : (<IoMoon size='14px'/>)}
                      <span style={{marginLeft:'0.75rem'}}>{theme} Theme</span>
          </ThemeTogle>
        </WrapperHeader>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
