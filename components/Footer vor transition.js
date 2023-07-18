import React from 'react';
import Toggle from './Toggle';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ theme, toggleTheme }) => {
  return (
    <StyledFooter>
      <AppInfo>Dog Pass, 0.1</AppInfo>
      <a href="https://github.com/RonnySteady" target="_blank" rel="noopener noreferrer">
      <StyledGithubIcon size={20} />
      </a>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <a href="https://www.linkedin.com/in/ronaldheimert/" target="_blank" rel="noopener noreferrer">
      <StyledFaLinkedin size={20} />
      </a>
      <AppInfo>©️ R. Heimert</AppInfo>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center; 
  bottom: 0px;
  left: 0;
  right: 0;
  width: 350px;
  margin: auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
`;

const StyledGithubIcon = styled(FaGithub)`
  color: ${({ theme }) => theme.textColor};
  position: relative;
  top: 3px;
`;

const StyledFaLinkedin = styled(FaLinkedin)`
  color: ${({ theme }) => theme.textColor};
  position: relative;
  top: 3px;
`;

const AppInfo = styled.p`
  font-family: Avenir, Open Sans, system-ui;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.textColor};
`;
