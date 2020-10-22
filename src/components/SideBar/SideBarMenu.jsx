import React from 'react';
import { IconMenu, MenuButton, TextMenu } from '../../assets/styles/components/SlideBarElements';

const SideBarMenu = ({ title, icon, route }) => (
  <>
    <MenuButton to={route}>
      <IconMenu src={icon} />
      <TextMenu title={title}>{title}</TextMenu>
    </MenuButton>
  </>
);

export default SideBarMenu;
