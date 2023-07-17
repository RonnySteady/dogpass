import React from 'react';
import styled from 'styled-components';
import { PiToggleLeftFill, PiToggleRightBold } from 'react-icons/pi';


const Button = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.textColor};
  /* border-radius: 8px; */
  cursor: pointer;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Container>
      <Button onClick={toggleTheme}>
        {theme === 'light' ? <PiToggleLeftFill /> : <PiToggleRightBold />}
      </Button>
    </Container>
  );
};

export default Toggle;
