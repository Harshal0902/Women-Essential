import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home/Homepage.jsx';
import HomeHi from './components/Home/Homepagehi'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './components/Health/Health';
import Chatbot from './components/Chatbot/Chatbot';
import DiseaesPred from './components/DiseasePred/DiseaseDetection';

function App() {
  return (
    <Router>
    <Chatbot />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/hi' exact component={HomeHi} />
        <Route path='/DiseaesPred' component={DiseaesPred} />
        <Route path='/health' component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
