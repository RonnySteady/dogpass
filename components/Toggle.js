import React from 'react';
import styled from 'styled-components';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';


const Button = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.textColor};
  /* border-radius: 8px; */
  cursor: pointer;
  font-size: 1.5rem;
  margin-top: 6px;
`;

  const Toggle = ({ theme, toggleTheme }) => {
      return (
          <Button onClick={toggleTheme}>
            {theme === 'light' ? <FaToggleOff /> : <FaToggleOn />}
          </Button>
      );
    };

export default Toggle;
