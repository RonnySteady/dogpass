import Header from "../../components/Header";
import Navbar from "../../components/NavBar";
import OwnerCard from "../../components/OwnerCard";
import DarkMode from '../../components/DarkMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/Themes';
import Footer from "../../components/Footer"
import styled from "styled-components";

export default function Owner({ dogs }) {
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
            minHeight: '100vh', // Ensure the container fills the viewport height
            
          }}
          >
      <ContentWrapper>
      <Header />
      <CardWrapper>
            <OwnerCard />
      </CardWrapper>
      <Navbar
        buttonText1="Go to dogs"
        link1="/"
        buttonText2="Add a dog"
        link2="/newdog"
      />
    </ContentWrapper>
    <Footer theme={theme} toggleTheme={themeToggler} />
    </div>
      {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
    </ThemeProvider>
  );
}




const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 45px); /* Subtract the footer height from 100vh */
  padding-top: 0px;
  padding-bottom: 0px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;