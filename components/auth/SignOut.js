import React from 'react';
import styled from 'styled-components';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/database';


const LogoutButton = styled.button`
  background-color: #ff4500;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

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
