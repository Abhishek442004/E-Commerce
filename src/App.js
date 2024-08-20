import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import PosterPage from '../src/pages/PosterPage';
import ShirtPage from '../src/pages/ShirtPage';

import Navbar from './components/Navbar/Navbar';
import NoPage from './pages/NoPage';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';

// import image1 from './assets/tshirt/ThunderT_front.png'

// import image2 from './assets/tshirt/WavesT_front.png'

// import image3 from './assets/tshirt/TBlack_front.png'



function App() {
  // const cards = [
  //   {
  //     id: 1,
  //     title: 'T-shirt white',
  //     content: "T-shirt white",
  //     image: image1,
  //   },
  //   {
  //     id: 2,
  //     title: 'T-shirt blue',
  //     content: "T-shirt blue",
  //     image: image2,
  //   },
  //   {
  //     id: 3,
  //     title: 'T-shirt green',
  //     content: "T-shirt green",
  //     image: image3,
  //   }
  // ]
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/category/tshirt' element = {<ShirtPage/>}/>
          <Route path='/category/poster' element = {<PosterPage/>}/>
          <Route path='/signup' element = {<Register/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='*' element = {<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;

