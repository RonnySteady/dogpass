import { useState } from 'react';
import styled from "styled-components";
import Header from "../../components/Header";
import DarkMode from '../../components/DarkMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/Themes';
import TopBar from "../../components/TopBar";
import DogList from "../../components/DogList";
import NavBar from "../../components/NavBar";
import Buttons from "../../components/Buttons";
import withAuth from '../../components/auth/withAuth';

const Dogs = ({ dogs }) => {
  const [dogList, setDogList] = useState(dogs);
  const [theme, themeToggler] = DarkMode();
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
          minHeight: '100vh', 
        }}
      >
        <ContentWrapper id="content-wrapper">
          <Header />
          <TopBar theme={theme} toggleTheme={themeToggler} />
          <CardWrapper>
          <DogList dogs={dogList} onDeleteDog={handleDeleteDog} />
        </CardWrapper>
          <Buttons
                buttonText1="Add a dog"
                link1="/newdog"
                buttonText2="Go to owner"
                link2="/owner"/>
        </ContentWrapper>
          <NavBar/>
      </div>
    </ThemeProvider>
  );
}


export default withAuth(Dogs);



const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 50px); 
  padding-bottom: 0px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;


