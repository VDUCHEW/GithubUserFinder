import React from 'react';
import Main from '../components/Main.js';
import Home from '../components/Home.js';
import Profile from '../components/Profile.js';
import {Router, IndexRoute} from 'react-router';

export default (
  <Router path="/" component={Main}>
    <Router path="profile/:username" component={Profile}/>
    <IndexRoute component={Home} />
  </Router>
)
