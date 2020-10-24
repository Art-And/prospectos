/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import SlideBar from '../components/SideBar/SlideBar';
import Header from '../components/Header/Header';
import Section from '../components/Section/Section';
import TablaProspectos from '../components/Section/TablaProspectos';
import useInitialState from '../hooks/useInitialState';
import Prospectos from '../components/Section/Prospectos';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const [popUp, setPopUp] = useState(false);

  const openClosePopUp = () => {
    setPopUp(!popUp);
  };

  const initialState = useInitialState(API);

  return (
    <div className='app'>
      <Header />
      <SlideBar />

      {initialState.prospec?.length > 0 && (
        <Section>
          <TablaProspectos openClosePopUp={openClosePopUp} popUp={popUp}>
            {initialState.prospec?.map((item) => <Prospectos openClosePopUp={openClosePopUp} key={item.id} {...item} />)}
          </TablaProspectos>
        </Section>
      )}
    </div>
  );
};

export default App;
