import React from 'react';
import {
  IconMenu,
  MenuButton,
  TextMenu } from '../../assets/styles/components/SlideBarElements';

const SideBarMenu = ({ title, icon }) => (
  <>
    <MenuButton>
      <IconMenu src={icon} />
      <TextMenu>{title}</TextMenu>
    </MenuButton>
  </>
);

export default SideBarMenu;
