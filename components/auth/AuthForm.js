import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/database'; 
import SignOut from './SignOut';
import { useRouter } from 'next/router';


const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); 

  const router = useRouter();
  const [user] = useAuthState(auth); 

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      try {
        // Sign-up
        await createUserWithEmailAndPassword(email, password);
      } catch (error) {
        console.error('Error signing up:', error);
      }
    } else {
      // Login
      signInWithEmailAndPassword(email, password)
        .catch((error) => {
          console.error('Error signing in:', error);
        });
    }
  };

  const [createUserWithEmailAndPassword, createUserError] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, signInError] = useSignInWithEmailAndPassword(auth);

  return (
    <StyledAuthForm>
      {user ? (
        <div>Welcome, {user.displayName || user.email}!<SignOut /></div>
      ) : (
        <form onSubmit={handleSubmit}>
    <AuthHeader>
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      {isSignUp ? (
        <AuthSwitcher>
          Signed up already? <span onClick={() => setIsSignUp(false)}> Login</span>
        </AuthSwitcher>
      ) : (
        <AuthSwitcher>
          Need an account? <span onClick={() => router.push('/info')}> Contact</span>
        </AuthSwitcher>
      )}
    </AuthHeader>
          {isSignUp ? createUserError && <p>{createUserError.message}</p> : signInError && <p>{signInError.message}</p>}
          {isSignUp && (
            <AuthDiv>
              <AuthLabel>Name:</AuthLabel>
              <AuthName placeholder="Name" type="text" />
            </AuthDiv>
          )}
              <AuthDiv>
              <AuthLabel>E-Mail:</AuthLabel>
              <AuthEmail placeholder="E-Mail" type="email" value={email} onChange={handleEmailChange} />
            </AuthDiv>
          <div>
            <AuthLabel>Password:</AuthLabel>
            <AuthPassword placeholder="Password" type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <LoginButton type="submit">{isSignUp ? 'Sign Up' : 'Login'}</LoginButton>
        </form>
      )}
    </StyledAuthForm>
  );
};

export default AuthForm;



const StyledAuthForm = styled.li`
  display: flex;
  width: 350px;
  margin-bottom:30px;
  padding: 15px 25px 15px 25px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  z-index: 3;
`;


const AuthHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const AuthSwitcher = styled.p`
  font-size: 14px;
  position: relative;
  left: 60px;
`

const AuthLabel = styled.label`
  position: relative;
  top: 4px;
`

const AuthDiv = styled.div`
  margin-bottom: 15px;
`

const AuthName = styled.input`
  position: relative;
  width: 210px;
  left: 35px;
  background: whitesmoke;
  border-radius: 6px;
  padding: 3px;
`


const AuthEmail = styled.input`
  position: relative;
  width: 210px;
  left: 35px;
  background: whitesmoke;
  border-radius: 6px;
  padding: 3px;
`

const AuthPassword = styled.input`
  position: relative;
  width: 210px;
  left: 12px;
  background: whitesmoke;
  border-radius: 6px;
  padding: 3px;
`

const LoginButton = styled.button`
  margin-top: 20px;
  width: 70px;
  background-color: #445540;
  color: whitesmoke;
  padding: 3px;
  border-radius: 6px;
  grid-column: 2;
  grid-row: 20;
  `