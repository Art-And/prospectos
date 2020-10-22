import React from 'react';
import SideBarMenu from './SideBarMenu';
import {
  ContainerIcons,
  Icon,
  MenuContainer,
  NameIcon,
  SideBarContainer } from '../../assets/styles/components/SlideBarElements';

import iconFull from '../../assets/static/logo-dark.png';
import iconMin from '../../assets/static/perfilan_home.png';
import homeIcon from '../../assets/static/desarrollos.svg';
import prospIcon from '../../assets/static/prospectos.svg';
import dashIcon from '../../assets/static/dashboard.svg';
import adsIcon from '../../assets/static/reportfb-g.svg';
import repIcon from '../../assets/static/reportes.svg';
import userIcon from '../../assets/static/usuarios.svg';

const SlideBar = ({ title }) => (
  <SideBarContainer>
    <ContainerIcons>
      <Icon src={iconMin} />
      <NameIcon src={iconFull} />
    </ContainerIcons>

    <MenuContainer>
      <SideBarMenu title='Desarrollos' icon={homeIcon} />
      <SideBarMenu title='Prospectos' icon={prospIcon} />
      <SideBarMenu title='Dashboards' icon={dashIcon} />
      <SideBarMenu title='Anuncios' icon={adsIcon} />
      <SideBarMenu title='Reportes' icon={repIcon} />
      <SideBarMenu title='Usuarios' icon={userIcon} />
    </MenuContainer>

  </SideBarContainer>
);

export default SlideBar;
