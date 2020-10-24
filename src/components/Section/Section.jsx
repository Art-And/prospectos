import React from 'react';
import { ContainerSection,
  FistButtons,
  SecondButtons,
  Tabla,
  OriginButton,
  Menus,
  MenusItem,
  MenusButton,
  IconLog,
  ButtonTwo,
  ButtonThree,
  InputSearch,
  TextOne,
  TextTwo } from '../../assets/styles/components/SectionElements';
import Toggle from './Toggle';

import calendarIcon from '../../assets/static/calendario.svg';

const Section = () => (
  <ContainerSection>

    <FistButtons>
      <OriginButton>Ver Landing Page</OriginButton>
      <Menus menuButton={(
        <MenusButton>
          <IconLog src={calendarIcon} />
          09/10/2020 - 23/10/2020
        </MenusButton>
      )}
      >
        <MenusItem>Ultimos 30 Días </MenusItem>
        <MenusItem>Ultimos 15 Días</MenusItem>
        <MenusItem>Ultimos 7 Días</MenusItem>
        <MenusItem>Hoy</MenusItem>
        <MenusItem>Desde el origen de los tiempos</MenusItem>
        <MenusItem>Personalizado</MenusItem>
      </Menus>
    </FistButtons>

    <SecondButtons>
      <TextOne>Prospectos </TextOne>
      <TextTwo> en total</TextTwo>
      <Toggle />
      <InputSearch />
      <ButtonTwo>Ver Landing Page</ButtonTwo>
      <ButtonTwo>Ver Landing Page</ButtonTwo>
      <ButtonThree>Ver Landing Page</ButtonThree>
      <ButtonThree>Ver Landing Page</ButtonThree>
    </SecondButtons>

    <Tabla />

  </ContainerSection>

);

export default Section;
