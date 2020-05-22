import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './ButtonSection';
import TotalCount from './SideBar';

function App() {
  return (
    <div className="App">
      <TotalCount />
      <Buttons />
    </div>
  );
}

export default App;
