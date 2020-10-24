import React from 'react';
import { ContainerHeader } from '../../assets/styles/components/HeaderElements';
import MenusHeader from './MenusHeader';
import ButtonHeader from './ButtonHeader';

const Header = () => (
  <ContainerHeader>
    <ButtonHeader />
    <MenusHeader />
  </ContainerHeader>
);

export default Header;
