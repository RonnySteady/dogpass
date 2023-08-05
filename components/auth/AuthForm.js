import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/database'; 

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
        <div>Welcome, {user.displayName || user.email}!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>{isSignUp ? 'Sign Up' : 'Login'}</h3>
          {isSignUp && (
            <div>
              <label>Name:</label>
              <input type="text" />
            </div>
          )}
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
          {/* <div>
            {isSignUp ? (
              <p>
                Already have an account? <span onClick={() => setIsSignUp(false)}>Login</span>
              </p>
            ) : (
              <p>
                Don't have an account? <span onClick={() => setIsSignUp(true)}>Sign Up</span>
              </p>
            )}
          </div>
          {isSignUp ? createUserError && <p>{createUserError.message}</p> : signInError && <p>{signInError.message}</p>} */}
        </form>
      )}
    </StyledAuthForm>
  );
};

export default AuthForm;



const StyledAuthForm = styled.li`
  display: flex;
  position: relative;
  width: 350px;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 30px;
  padding: 15px 25px 15px 25px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  z-index: 3;
`;