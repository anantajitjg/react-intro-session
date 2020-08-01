import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// Custom components.
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Posts from './components/Posts';
import Post from './components/Post';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/blog/:slug">
          <Post />
        </Route>
        <Route path="/">
          <Jumbotron />
          <Posts />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
