import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/Themes';
import DarkMode from '../components/DarkMode';
import Header from '../components/Header';
import DogList from '../components/DogList';
import NavBar from '../components/NavBar';
import DogFacts from '../components/DogFacts';
import TopBar from "../components/TopBar";
import DogPhotos from '../components/DogPhotos';
import Buttons from '../components/Buttons';
import AuthForm from '../components/auth/AuthForm';
import { useSignOut } from 'react-firebase-hooks/auth'; 
import { auth } from '../firebase/database'; 


export default function Home({ dogs }) {
  const [dogList, setDogList] = useState(dogs);
  const [theme, themeToggler] = DarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const handleDeleteDog = (dogName) => {
    const updatedDogs = dogList.filter((dog) => dog.name !== dogName);
    setDogList(updatedDogs);
  };

  useEffect(() => {
    const handleResize = () => {
      const contentWrapper = document.getElementById('content-wrapper');
      if (contentWrapper) {
        const contentHeight = contentWrapper.clientHeight;
        const windowHeight = window.innerHeight;
        if (contentHeight < windowHeight) {
          contentWrapper.style.minHeight = `${windowHeight}px`;
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <div
        style={{
          background: themeMode.background,
          backgroundImage: themeMode.backgroundImage,
          backgroundSize: 'cover',
          color: themeMode.text,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          minHeight: '100vh', 
        }}
      >
        <ContentWrapper id="content-wrapper">
          <TopBar theme={theme} toggleTheme={themeToggler} />
          <Header />
          <AuthForm/>
          <DogPhotos/>
        </ContentWrapper>
          <NavBar/>
      </div>
    </ThemeProvider>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 50px); 
  padding-bottom: 0px;
`;

