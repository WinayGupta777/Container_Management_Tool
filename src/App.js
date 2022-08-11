import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import LayOut from './components/LayOut';

const darkTheme = createTheme({
  palette: { mode: 'dark' }
});
const lightTheme = createTheme({});


const App = () => {
  const globeTheme = useSelector(
    (state) => state.themeReducer.theme
  );

  return (
    <ThemeProvider theme={globeTheme ? darkTheme : lightTheme}>
      <Paper style={{ height: "100vh" }} square={true}>
        <div className='App'>

          <Router>
            <Routes>
              <Route index element={<LayOut />} />
              <Route path="/" element={<LayOut />}>
                <Route path="system/cli" />
              </Route>
            </Routes>
          </Router>

        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default App;