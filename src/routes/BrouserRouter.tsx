import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/login/Login';
import Home from '../pages/Home/Home';

function Router() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Login />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="home" element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default Router;
