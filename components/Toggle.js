import React from 'react';
import styled from 'styled-components';
import { PiToggleLeftFill, PiToggleRightLight } from 'react-icons/pi';


const Button = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.textColor};
  /* border-radius: 8px; */
  cursor: pointer;
  font-size: 2rem;
  margin-top: 6px;
`;


const Toggle = ({ theme, toggleTheme }) => {
  return (
      <Button onClick={toggleTheme}>
        {theme === 'light' ? <PiToggleLeftFill /> : <PiToggleRightLight />}
      </Button>
  );
};

export default Toggle;
