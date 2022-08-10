import './App.css';
import React from 'react'
import AppBarComp from './components/AppBar';
import DrawerMain from './components/DrawerMain';
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import { useSelector } from "react-redux";

const darkTheme = createTheme({
  palette: { mode: 'dark' }
});
const lightTheme = createTheme({});


const App = () => {
  const globeTheme = useSelector(
    (state) => state.themeReducer.theme
  );

  return (
    <ThemeProvider theme={globeTheme ?  darkTheme : lightTheme }>
      <Paper style={{ height: "100vh" }} square={true}>

        <div className='App'>
          <AppBarComp />
          <DrawerMain />
        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default App;