import React from 'react';
import SlideBar from '../components/SideBar/SlideBar';
import Header from '../components/Header/Header';
import Section from '../components/Section/Section';

import '../assets/styles/App.scss';

const App = () => (
  <div className='app'>
    <Header />
    <SlideBar />
    <Section />
  </div>
);

export default App;
