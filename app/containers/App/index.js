/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignupPage from 'containers/SignupPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import LandingPage from 'containers/LandingPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/signup" component={SignupPage} />{' '}
        <Route exact path="/login" component={LoginPage} />{' '}
        <Route exact path="/landing" component={LandingPage} />{' '}
        <Route exact path="/" component={HomePage} />{' '}
        <Route component={NotFoundPage} />{' '}
      </Switch>{' '}
      <GlobalStyle />
    </div>
  );
}
