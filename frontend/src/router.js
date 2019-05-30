//this is kind of App.js
// import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import NotFoundPage from './pages/NotFoundPage';
import cat from './assets/cat.jpg';

const AppRouter = () => {
  const sectionStyle = {
    width: "100vw",
    height: "120vh",
    backgroundImage: `url(${cat})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return(
    <BrowserRouter>
      <div className="dtc v-base cover ph4-m ph5-l" style={sectionStyle}>
        <Header/>
        <Switch>
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/about" component={AboutPage} exact={true} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default AppRouter;
// https://images.unsplash.com/photo-1516139008210-96e45dccd83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80