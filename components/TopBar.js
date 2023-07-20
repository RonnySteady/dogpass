import React from 'react';
import Toggle from './Toggle';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaHome, FaSearch, FaInfoCircle } from 'react-icons/fa';
import {HiMail} from "react-icons/hi";

const TopBar = ({ theme, toggleTheme }) => {
  return (
    <StyledTopBar>
      <a href="https://www.linkedin.com/in/ronaldheimert/" target="_blank" rel="noopener noreferrer">
      <StyledFaLinkedin size={18} />
      </a>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <a href="https://github.com/RonnySteady" target="_blank" rel="noopener noreferrer">
      <StyledGithubIcon size={19} />
      </a>
    </StyledTopBar>
  );
};

export default TopBar;

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 375px;
  height: 25px;
  color: ${({ theme }) => theme.textColor};
  z-index: 1; 
  backdrop-filter: blur(10px);
  border-bottom: 0.1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.backgroundColor};
`;

const StyledFaLinkedin = styled(FaLinkedin)`
  color: ${({ theme }) => theme.textColor};
  position: relative;
  top: 3px;
  &:hover,
  &:active,
  &:focus {
    fill: orange;
  }
`

const StyledGithubIcon = styled(FaGithub)`
  color: ${({ theme }) => theme.textColor};
  position: relative;
  top: 3px;
  &:hover,
  &:active,
  &:focus {
    fill: orange;
  }
`;

