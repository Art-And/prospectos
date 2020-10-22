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

const SlideBar = () => {
  const titleNames = ['Desarrollos', 'Prospectos', 'Dashboard', 'Anuncios', 'Reportes', 'Usuarios'];

  return (
    <SideBarContainer>
      <ContainerIcons to='/'>
        <Icon src={iconMin} />
        <NameIcon src={iconFull} />
      </ContainerIcons>

      <MenuContainer>
        <SideBarMenu title={titleNames[0]} icon={homeIcon} route={titleNames[0]} />
        <SideBarMenu title={titleNames[1]} icon={prospIcon} route='/' />
        <SideBarMenu title={titleNames[2]} icon={dashIcon} route={titleNames[2]} />
        <SideBarMenu title={titleNames[3]} icon={adsIcon} route={titleNames[3]} />
        <SideBarMenu title={titleNames[4]} icon={repIcon} route={titleNames[4]} />
        <SideBarMenu title={titleNames[5]} icon={userIcon} route={titleNames[5]} />
      </MenuContainer>

    </SideBarContainer>
  );
};

export default SlideBar;
