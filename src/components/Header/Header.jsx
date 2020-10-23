import React from 'react';
import {
  ContainerButtons,
  ContainerHeader,
  NavButton,
  Icon,
  TextMenu,
  ButtonVisit,
  ButtonAds,
  IconAds,
  Menus,
  MenusItem,
  MenusButton,
  TextLog,
  IconLog } from '../../assets/styles/components/HeaderElements';

import edifIcon from '../../assets/static/edificio.svg';
import maleIcon from '../../assets/static/equipaje.svg';
import faceIcon from '../../assets/static/facebook.svg';
import googleIcon from '../../assets/static/google.svg';
import UserMenuIcon from '../../assets/static/usuario_menu.svg';

const Header = () => (
  <ContainerHeader>
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

    <Menus menuButton={(
      <MenusButton>
        <TextLog>
          Hola,
          {' '}
          <strong> usuario</strong>
        </TextLog>
        <IconLog src={UserMenuIcon} />
      </MenusButton>
    )}
    >
      <MenusItem>Suscripcion</MenusItem>
      <MenusItem>Historial de pagos</MenusItem>
      <MenusItem>Cambiar contraseña</MenusItem>
      <MenusItem>Cerrar sesion</MenusItem>
    </Menus>

  </ContainerHeader>
);

export default Header;
