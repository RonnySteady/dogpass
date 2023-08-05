// components/auth/withAuth.js
import React from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/database';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    // If the user is not logged in and not loading, redirect to the login page
    if (!user && !loading) {
      router.replace('/login'); // Replace the current URL with the login page
      return null; // Return null while loading
    }

    // If the user is logged in or still loading, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
