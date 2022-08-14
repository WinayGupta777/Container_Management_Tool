import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import LayOut from './components/LayOut';
import Terminal from './components/system/Terminal';
import DockerCLI from './components/docker/DockerCLI';
import DockerGUI from './components/docker/DockerGUI';

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
                <Route path="system/cli" element={<Terminal />} />
                <Route path="docker/cli" element={<DockerCLI />} />
                <Route path="docker/gui" element={<DockerGUI /> } />
              </Route>
            </Routes>
          </Router>

        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default App;