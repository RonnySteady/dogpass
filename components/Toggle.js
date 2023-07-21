import React from 'react';
import styled from 'styled-components';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { PiToggleLeftFill, PiToggleRightFill } from 'react-icons/pi';

const Button = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  font-size: 1.8rem;
  margin-top: 7px;
`;

  const Toggle = ({ theme, toggleTheme }) => {
      return (
          <Button onClick={toggleTheme}>
            {theme === 'light' ? <PiToggleLeftFill /> : <PiToggleRightFill />}
          </Button>
      );
    };

export default Toggle;
