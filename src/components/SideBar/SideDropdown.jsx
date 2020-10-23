import React, { useState } from 'react';
import { DropD, DropdownT, DropdownM, DropdownI } from '../../assets/styles/components/SlideBarElements';
import SideBarMenu from './SideBarMenu';

const SideDropdown = ({ children, title, icon, route }) => {
  const [dropdown, setDropdown] = useState(false);

  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <>
      <DropD isOpen={dropdown} toggle={openCloseDropdown} direction='right'>
        <DropdownT>
          {children}
          <DropdownM>
            <DropdownI to={route}>
              <SideBarMenu title={title} icon={icon} route='#' />
            </DropdownI>
          </DropdownM>
        </DropdownT>

      </DropD>
    </>
  );
};

export default SideDropdown;
