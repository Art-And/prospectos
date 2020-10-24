import React from 'react';
import {
  Menus,
  MenusItem,
  MenusButton,
  TextLog,
  IconLog } from '../../assets/styles/components/HeaderElements';

import UserMenuIcon from '../../assets/static/usuario_menu.svg';

const MenusHeader = () => (
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

);

export default MenusHeader;
