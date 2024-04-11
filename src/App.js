import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Footer from './Components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b0dbf1',
    },
    secondary: {
      main: '#253da1',
    },
    error: {
      main: '#000137',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Other routes go here */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;