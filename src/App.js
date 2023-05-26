import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeContext from './contexts/ThemeContext';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage'; // Import the RegisterPage component
import GlobalStyles from './styles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />{' '}
          {/* Add the register page route */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
