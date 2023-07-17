import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { lightTheme, darkTheme } from '../components/Themes';
import useDarkMode from '../components/useDarkMode';
import Toggle from "../components/Toggle";
import Header from '../components/Header';
import DogList from '../components/DogList';
import NavBar from '../components/NavBar';

export default function Home({ dogs }) {
  const [dogList, setDogList] = useState(dogs);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const handleDeleteDog = (dogName) => {
    const updatedDogs = dogList.filter((dog) => dog.name !== dogName);
    setDogList(updatedDogs);
  };

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
          <Head>
            <link rel="manifest" href="/manifest.json" />
          </Head>
          <Header />
          <DogList dogs={dogList} onDeleteDog={handleDeleteDog} />
        <NavBar
          buttonText1="Go to owner"
          link1="/owner"
          buttonText2="Add a dog"
          link2="/newdog"
          />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </div>
    </ThemeProvider>
  );
}

