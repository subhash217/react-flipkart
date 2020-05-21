import React from 'react';
//import logo from './logo.svg';
import Home from './home';
import Footer from './Footer';
import Products from './Products';
import './App.css';

function App() {
  return (
    <div >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        
      </header> */}
      <Home/>
      <Products/>
      <Footer/>
      
    </div>
  );
}

export default App;
