import React from 'react';
import SlideBar from '../components/SideBar/SlideBar';
import Header from '../components/Header/Header';

import '../assets/styles/App.scss';

const App = () => (
  <div className='app'>
    <Header />
    <SlideBar />
  </div>
);

export default App;
