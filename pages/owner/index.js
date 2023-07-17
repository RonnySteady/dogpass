import Header from "../../components/Header";
import Navbar from "../../components/NavBar";
import OwnerCard from "../../components/OwnerCard";
import useDarkMode from '../../components/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/Themes';
import Toggle from "../../components/Toggle";

export default function Owner({ dogs }) {
  const [theme, themeToggler] = useDarkMode();
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
      <Header />
      <OwnerCard />
      <Navbar
        buttonText1="Go to dogs"
        link1="/"
        buttonText2="Add a dog"
        link2="/newdog"
      />
      <Toggle theme={theme} toggleTheme={themeToggler} />
    </div>
    </ThemeProvider>
  );
}
