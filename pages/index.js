import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { lightTheme, darkTheme } from '../components/Themes';
import DarkMode from '../components/DarkMode';
import Toggle from "../components/Toggle";
import Header from '../components/Header';
import DogList from '../components/DogList';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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
          minHeight: '100vh', // Ensure the container fills the viewport height
        }}
      >
        <ContentWrapper id="content-wrapper">
          <Header />
          <DogList dogs={dogList} onDeleteDog={handleDeleteDog} />
          <NavBar
            buttonText1="Go to owner"
            link1="/owner"
            buttonText2="Add a dog"
            link2="/newdog"
          />
          {/* <DarkMode/> */}
          {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
        </ContentWrapper>
        <Footer theme={theme} toggleTheme={themeToggler} />
      </div>
    </ThemeProvider>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 45px); /* Subtract the footer height from 100vh */
  padding-bottom: 0px;
`;