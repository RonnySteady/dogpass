import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/Themes';
import DarkMode from '../components/DarkMode';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Info({ dogs }) {
  const [theme, themeToggler] = DarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  return (
    <StyledInfoCard>
      <h2>Dog Pass</h2>
      <p>Version 0.3.2</p>
      <Contact>
      <h3>Contact</h3>
      </Contact>
      <LogoContainer>
  <a href="https://github.com/RonnySteady" target="_blank" rel="noopener noreferrer">
    <StyledGithubIcon size={28} />
  </a>
  <a href="https://www.linkedin.com/in/ronaldheimert" target="_blank" rel="noopener noreferrer">
    <StyledLinkedinIcon size={28} />
  </a>
</LogoContainer>
    </StyledInfoCard>
  );
}



const StyledInfoCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  min-height: 200px;
  margin-bottom: 30px;
  padding: 20px 25px 15px 25px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  border: 1px solid ${({ theme }) => theme.borderColor};
  z-index: 3;
`;


const Contact = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
  padding-top: 25px;
  padding-bottom: 5px;
`


const StyledGithubIcon = styled(FaGithub)`
  margin: 3px;
  color: ${({ theme }) => theme.textColor};
  &:hover,
  &:active,
  &:focus {
    fill: orange;
  }
`

const StyledLinkedinIcon = styled(FaLinkedin)`
  margin: 3px;
  color: ${({ theme }) => theme.textColor};
  &:hover,
  &:active,
  &:focus {
    fill: orange;
  }
`;

const LogoContainer = styled.div`

`