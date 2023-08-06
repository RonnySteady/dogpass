import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/database'; 
import SignOut from './SignOut';


const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); 

  const [user] = useAuthState(auth); 

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Sign-up
      createUserWithEmailAndPassword();
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
            {/* {isSignUp ? (
              <AuthSwitcher>
                Signed up already? <span onClick={() => setIsSignUp(false)}> Login</span>
              </AuthSwitcher>
            ) : (
              <AuthSwitcher>
                Need an account? <span onClick={() => setIsSignUp(true)}> Sign up</span>
              </AuthSwitcher>
            )} */}
          </AuthHeader>
          {isSignUp ? createUserError && <p>{createUserError.message}</p> : signInError && <p>{signInError.message}</p>}
          {isSignUp && (
            <AuthDiv>
              <AuthLabel>Name:</AuthLabel>
              <AuthInput placeholder="Name" type="text" />
            </AuthDiv>
          )}
              <AuthDiv>
              <AuthLabel>E-Mail:</AuthLabel>
              <AuthInput placeholder="E-Mail" type="email" value={email} onChange={handleEmailChange} />
            </AuthDiv>
          <div>
            <AuthLabel>Password:</AuthLabel>
            <AuthInput placeholder="Password" type="password" value={password} onChange={handlePasswordChange} />
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
  position: absolute;
  right: 32px;
`

const AuthDiv = styled.div`
  margin-bottom: 15px;
`

const AuthLabel = styled.label`
  position: relative;
  top: 4px;
`

const AuthInput = styled.input`
  position: absolute;
  width: 200px;
  left: 120px;
  background: whitesmoke;
  border-radius: 6px;
  padding: 3px;
`

const LoginButton = styled.button`
  margin-top: 22px;
  margin-bottom: 4px;
  width: 70px;
  background-color: #445540;
  color: whitesmoke;
  padding: 3px;
  border-radius: 6px;
  grid-column: 2;
  grid-row: 20;
  `