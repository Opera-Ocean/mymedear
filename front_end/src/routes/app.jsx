import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Index from '../pages/app/index';
import About from '../pages/app/about';
import Error from '../pages/app/error';
import Profile from '../pages/users/profile';
import Settings from '../pages/users/settings';
import Signup from '../pages/authentication/signup';
import Login from '../pages/authentication/login';
import PublicProfile from '../pages/users/public';

const Navigation = () =>{
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/settings" exact element={<Settings />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/public" exact element={<PublicProfile />} />
          <Route path="*" exact element={<Error />} />
        </Routes>
      </Router>
  );
}

export default Navigation;
