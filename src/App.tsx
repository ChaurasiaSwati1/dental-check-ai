import React from 'react';
import '../src/assets/css/index.css';
import Router from './routes/BrouserRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    </>
  );
}

export default App;
