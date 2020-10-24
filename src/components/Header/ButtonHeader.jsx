import React from 'react';
import {
  ContainerButtons,
  NavButton,
  Icon,
  TextMenu,
  ButtonVisit,
  ButtonAds,
  IconAds } from '../../assets/styles/components/HeaderElements';

import edifIcon from '../../assets/static/edificio.svg';
import maleIcon from '../../assets/static/equipaje.svg';
import faceIcon from '../../assets/static/facebook.svg';
import googleIcon from '../../assets/static/google.svg';

const ButtonHeader = () => (
  <ContainerButtons>
    <NavButton>
      <Icon src={edifIcon} />
      <TextMenu>Desk</TextMenu>
    </NavButton>
    <ButtonVisit>
      <Icon src={maleIcon} />
      <TextMenu>Quieren Visitar</TextMenu>
    </ButtonVisit>
    <ButtonAds>
      <IconAds src={faceIcon} />
      <TextMenu>0%</TextMenu>
    </ButtonAds>
    <ButtonAds>
      <IconAds src={googleIcon} />
      <TextMenu>0%</TextMenu>
    </ButtonAds>
  </ContainerButtons>
);

export default ButtonHeader;
