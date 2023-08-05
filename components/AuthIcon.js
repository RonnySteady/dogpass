import React from 'react';
import styled from 'styled-components';
import { BiSolidLogInCircle, BiSolidLogOutCircle } from "react-icons/bi";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/database';
import { useRouter } from "next/router";



const Button = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  font-size: 1.38rem;
  margin-top: 5px;
`;

const AuthIcon = ({ theme, toggleTheme }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  const handleButtonClick = () => {
    if (user) {
      // User is logged in, perform logout action
      auth.signOut();
    } else {
      // User is logged out, perform login action
      router.push(`/login`);
    }
  };

  return (
    <Button onClick={handleButtonClick}>
      {user ? <BiSolidLogOutCircle /> : <BiSolidLogInCircle />}
    </Button>
  );
};

export default AuthIcon;