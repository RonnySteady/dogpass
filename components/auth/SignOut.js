import React from 'react';
import styled from 'styled-components';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/database';



const SignOut = () => {
  const [user] = useAuthState(auth);  

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return user ? (
    <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
  ) : null;
};

export default SignOut;



const LogoutButton = styled.button`
  /* position: relative;
  right: -10px; */
  margin-left: 12px;
  width: 70px;
  background-color: #800000;
  color: whitesmoke;
  padding: 4px;
  border-radius: 6px;
`;