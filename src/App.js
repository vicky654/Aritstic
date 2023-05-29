import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeContext from './contexts/ThemeContext';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import AlternateRegisterPage from './pages/AlternateRegisterPage';

import GlobalStyles from './styles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { theme } = useContext(ThemeContext);
  const getCurrentUniverseTime = () => new Date();
  const universeTime = getCurrentUniverseTime();
  const desiredTimeStart = new Date();
  desiredTimeStart.setHours(10, 50, 0); // Set desired start time to 1:40 AM
  const desiredTimeEnd = new Date();
  desiredTimeEnd.setHours(11, 0, 0); // Set desired end time to 2:00 AM
  const shouldShowLandingPage =
    universeTime >= desiredTimeStart && universeTime <= desiredTimeEnd;

  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path="/"
            element={shouldShowLandingPage ? <LandingPage /> : <LandingPage />}
          />
          <Route
            path="/register"
            element={
              shouldShowLandingPage ? (
                <RegisterPage />
              ) : (
                <AlternateRegisterPage />
              )
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
