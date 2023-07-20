import Header from "../../components/Header";
import DarkMode from '../../components/DarkMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/Themes';
import styled from "styled-components";
import TopBar from "../../components/TopBar";
import DogList from "../../components/DogList";
import { useState } from 'react';
import NavBar from "../../components/NavBar";


const handleDeleteDog = (dogName) => {
  const updatedDogs = dogList.filter((dog) => dog.name !== dogName);
  setDogList(updatedDogs);
};


export default function Dogs({ dogs }) {
  const [theme, themeToggler] = DarkMode();
  const [dogList, setDogList] = useState(dogs);

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
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
          <Header />
          <TopBar theme={theme} toggleTheme={themeToggler} />
          <DogList dogs={dogList} onDeleteDog={handleDeleteDog} />
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
`;


