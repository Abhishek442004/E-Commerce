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



function App() {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/category/tshirt' element = {<ShirtPage/>}/>
          <Route path='/category/poster' element = {<PosterPage/>}/>
          <Route path='*' element = {<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    );
}

// const App = () => {
//     const cards = [
//       {
//         title: 'Card 1',
//         content: 'Content for card 1',
//         image: 'https://img.favpng.com/23/24/16/printed-t-shirt-top-sleeve-gift-png-favpng-aMzqKYvrjMJ9bEWuz9EDY0wn5.jpg'
//       },
//       {
//         title: 'Card 2',
//         content: 'Content for card 2',
//         image: 'https://storage.vsemayki.ru/images/0/2/2701/2701179/previews/people_4_manshortfull_front_white_500.jpg'
//       },
//       {
//         title: 'Card 3',
//         content: 'Content for card 3',
//         image: 'https://printbar.ru/upload/images/5f/5f3a52.jpg'
//       },
//       {
//         title: 'Card 4',
//         content: 'Content for card 4',
//         image: 'https://i.pinimg.com/originals/b8/bf/34/b8bf34ae7c76028e0fd9d249e275e6fe.jpg'
//       }
//     ];
  
//     return (
//       <div className="App">
//         <h1>Moving Cards Animation</h1>
//         <MovingCards cards={cards} />
//       </div>
//     );
//   };

export default App;

