import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './view/Home.jsx';
import Edition from './view/Edition.jsx';
import Footer from './components/Footer.jsx';
import Menu from './view/Menu.jsx';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Menu/>} />
          <Route path='/edition' element={<Edition/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
