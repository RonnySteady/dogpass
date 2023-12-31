import Header from "../../components/Header";
import DarkMode from '../../components/DarkMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/Themes';
import styled from "styled-components";
import TopBar from "../../components/TopBar";
import DogFacts from "../../components/DogFacts";
import DogPhotos from "../../components/DogPhotos";
import NavBar from "../../components/NavBar";
import WeatherCard from "../../components/WeatherCard";
import RaceSearch from "../../components/RaceSearch";

export default function Facts({ dogs }) {
  const [theme, themeToggler] = DarkMode();
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
          <TopBar theme={theme} toggleTheme={themeToggler} />
          <Header />
          <CardWrapper>
          <WeatherCard/>
          <RaceSearch/>
          <DogFacts/>
          </CardWrapper>
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

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 80px;
`;