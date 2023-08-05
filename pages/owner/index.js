import Header from "../../components/Header";
import Navbar from "../../components/NavBar";
import OwnerCard from "../../components/OwnerCard";
import DarkMode from '../../components/DarkMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/Themes';
import styled from "styled-components";
import TopBar from "../../components/TopBar";
import Buttons from "../../components/Buttons";
import withAuth from '../../components/auth/withAuth';


const Owner = ({ dogs }) => {
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
      <ContentWrapper>
      <Header />
          <TopBar theme={theme} toggleTheme={themeToggler} />
      <CardWrapper>
            <OwnerCard />
      </CardWrapper>
      <Buttons
                buttonText1="Go to dogs"
                link1="/dogs"
                buttonText2="Add a dog"
                link2="/newdog"/>
    </ContentWrapper>
      <Navbar/>
    </div>
    </ThemeProvider>
  );
}

export default withAuth(Owner); // Wrap Owner component with withAuth


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 50px); 
  padding-top: 0px;
  padding-bottom: 0px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

`;