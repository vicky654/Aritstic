import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeContext from './contexts/ThemeContext';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';

import GlobalStyles from './styles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlternateLandingPage = () => <div>Alternate Landing Page</div>;
const AlternateRegisterPage = () => <div>Alternate Register Page</div>;

function App() {
  const { theme } = useContext(ThemeContext);
  const getCurrentUniverseTime = () => new Date();
  const universeTime = getCurrentUniverseTime();
  const desiredTimeStart = new Date();
  desiredTimeStart.setHours(1, 40, 0); // Set desired start time to 1:40 AM
  const desiredTimeEnd = new Date();
  desiredTimeEnd.setHours(2, 0, 0); // Set desired end time to 2:00 AM
  const shouldShowLandingPage =
    universeTime >= desiredTimeStart && universeTime <= desiredTimeEnd;

  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              shouldShowLandingPage ? <LandingPage /> : <AlternateLandingPage />
            }
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
