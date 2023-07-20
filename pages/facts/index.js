import Header from "../../components/Header";
import DarkMode from '../../components/DarkMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/Themes';
import styled from "styled-components";
import TopBar from "../../components/TopBar";
import DogFacts from "../../components/DogFacts";
import NavBar from "../../components/NavBar";

export default function Facts({ dogs }) {
  const [theme, themeToggler] = DarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
    <div
          style={{
            background: themeMode.background,
            backgroundImage: themeMode.backgroundImage,
            color: themeMode.text,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            minHeight: '100vh', 
            
          }}
          >
        <ContentWrapper id="content-wrapper">
          <Header />
          <TopBar theme={theme} toggleTheme={themeToggler} />
          <DogFacts/>
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
  padding-top: 0px;
  padding-bottom: 0px;
`;

