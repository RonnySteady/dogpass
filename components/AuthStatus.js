import React from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/database';



const AuthStatus = ({ theme, toggleTheme }) => {
  const [user] = useAuthState(auth);

  const handleButtonClick = () => {
    if (user) {
      // User is logged in, perform logout action
      auth.signOut();
    } else {
      // User is logged out, perform login action
      // Add your login logic here
    }
  };

  return (
    <Button onClick={handleButtonClick}>
      {user ? "LOGOUT" : "LOGIN"}
    </Button>
  );
};

export default AuthStatus;


const Button = styled.button`
position: relative;
top: 13px;
font-size: 10px;
font-family: Poppins, Open Sans, Avenir, Roboto, system-ui;
font-weight: 600;
color: limegreen;
text-align: center;
padding-top: 1px;
padding-left: 5px;
padding-right: 5px;
border-radius: 16px;
text-decoration: none;
margin: 20px 10px 45px;
background: black;
backdrop-filter: blur(6px);
/* color: ${({ theme }) => theme.backgroundColor}; */
background: ${({ theme }) => theme.textColor};
border: 0.5px solid ${({ theme }) => theme.borderColor};
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

&:hover,
&:active,
&:focus {
  // color: #333333;
  background-color: orange;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`