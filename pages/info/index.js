import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/Themes';
import DarkMode from '../../components/DarkMode';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import TopBar from "../../components/TopBar";
import InfoCard from "../../components/InfoCard";


export default function InfoPage({ dogs }) {
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
          <InfoCard/>
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

