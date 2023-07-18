import Header from "../../components/Header";
import DogForm from "../../components/DogForm";
import NavBar from "../../components/NavBar";
import DarkMode from '../../components/DarkMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/Themes';
import Footer from "../../components/Footer";
import styled from "styled-components";

export default function NewDog({ dogs }) {
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
            minHeight: '100vh', // Ensure the container fills the viewport height
          }}
        >
        <ContentWrapper>
      <Header />
      <FormWrapper>
      <DogForm dogs={dogs} />
      </FormWrapper>
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
  /* min-height: 100vh; */
  min-height: calc(100vh - 45px); /* Subtract the footer height from 100vh */
  padding-top: 0px;
  padding-bottom: 20px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;