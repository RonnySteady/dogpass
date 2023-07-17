import Header from "../../components/Header";
import AddDogForm from "../../components/AddDogForm";
import NavBar from "../../components/NavBar";
import useDarkMode from '../../components/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/Themes';
import Toggle from "../../components/Toggle";


export default function DogForm({ dogs }) {
  const [theme, themeToggler] = useDarkMode();
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
      <Header />
      <AddDogForm dogs={dogs} />
      <Toggle theme={theme} toggleTheme={themeToggler} />
    </div>
    </ThemeProvider>
  );
}
