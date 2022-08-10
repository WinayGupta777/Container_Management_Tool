import './App.css';
import React from 'react'
import AppBarComp from './components/AppBar';
import DrawerMain from './components/DrawerMain';
const App = () => {
  return (
    <div className='App'>
      <AppBarComp />
      <DrawerMain />
    </div>
  )
}

export default App;