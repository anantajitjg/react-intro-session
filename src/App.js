import React from 'react';
import './App.css';

// Custom components.
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Posts from './components/Posts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Posts />
      <Footer />
    </>
  );
}

export default App;
