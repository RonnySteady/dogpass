import React from 'react';
import Toggle from './Toggle';
import AuthIcon from './AuthIcon';
import AuthStatus from './AuthStatus';
import styled from 'styled-components';
import { FaInfoCircle, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRouter } from "next/router";


const TopBar = ({ theme, toggleTheme }) => {
  const router = useRouter();

const handleInfoIconClick = () => {
    router.push('/info'); // Replace 'target-page' with the actual URL of the page you want to navigate to
  };


  return (
    <StyledTopBar>
      <ItemWrapper>
      <a href="#" onClick={handleInfoIconClick}>
      <StyledFaInfoCircle size={17} />
      </a>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <AuthIcon theme={theme} toggleTheme={toggleTheme} />
      {/* <AuthStatus/> */}
      </ItemWrapper>
    </StyledTopBar>
  );
};

export default TopBar;

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 25px;
  z-index: 4; 
  color: ${({ theme }) => theme.textColor};
  backdrop-filter: blur(10px);
  border-bottom: 0.1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.backgroundColor};
`;

const ItemWrapper= styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 375px;
  z-index: 3; 
`;


const StyledFaInfoCircle = styled(FaInfoCircle)`
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

const LoginButton = styled.button`
  position: relative;
  top: 12px;
  font-size: 10px;
  font-weight: 700;
  color: limegreen;
  width: 50px;
  text-align: center;
  padding: 0px;
  border-radius: 16px;
  text-decoration: none;
  margin: 20px 10px 45px;
  background: black;
  backdrop-filter: blur(6px);
  /* color: ${({ theme }) => theme.backgroundColor}; */
  background: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  &:hover,
  &:active,
  &:focus {
    // color: #333333;
    background-color: orange;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
`