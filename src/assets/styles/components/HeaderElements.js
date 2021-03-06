import styled from 'styled-components';
import {
  Menu,
  MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export const ContainerHeader = styled.header`
  background-color:none;
  height: 5em;
  display: flex;
  margin-left:16em;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width:1500px) {
  margin-left: 10em;
}

@media screen and (max-width:1000px) {
  margin-left: 4em;
}
`;

//Styles Buttons
export const ContainerButtons = styled.div`
margin-top: 1.5em;
margin-left:1em;
display:flex;
justify-content: flex-start;

`;

export const NavButton = styled.button`
  color:grey;
  border-radius:.3em;
  margin-right:1.5em;
  background-color:white;
  width:120px;
  border-width:0px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover{
    border: visible;
    border-width:1px;
    border-color:rgb(95, 75, 139);
    color: rgb(95, 75, 139);
  }

  :focus{
    background:rgb(95, 75, 139);
    border-radius:0em;
    color:#F2F2F2;
}

@media screen and (max-width:800px) {
  display:flex;
  justify-content: center;
  width:40px;
  margin: .3em;
}

@media screen and (max-width:420px) {
  display: none;
}

`;

export const Icon = styled.img`
padding-right: 1em;
height: 1.8em;

@media screen and (max-width:800px) {
  padding:0;
}

`;

export const IconAds = styled(Icon)`
padding-right:0.5em;
height: 1.5em;

@media screen and (max-width:800px) {
  padding:0;
}
`;

export const TextMenu = styled.span`
font-size: .8em;

@media screen and (max-width:800px) {
display:none;
}
`;

export const ButtonVisit = styled(NavButton)`
margin-right:.5em;
width:150px;

@media screen and (max-width:800px) {
  display:flex;
  justify-content: center;
  width:40px;
}
@media screen and (max-width:300px) {
  display: none;
}
`;

export const ButtonAds = styled(NavButton)`
margin-right:.5em;
width:80px;

@media screen and (max-width:800px) {
  display:flex;
  justify-content: center;
  width:40px;
}
@media screen and (max-width:300px) {
  display: none;
}
`;

//styles User Menu
export const ContainerUser = styled.div`
  margin-right: 30px;
`;

export const MenuProfile = styled.div`
background-color:aqua;
`;

export const TextUser = styled(TextMenu)`
font-size: .8em;
`;

export const Menus = styled(Menu)`
`;

export const MenusItem = styled(MenuItem)`
font-size: .8em;
display:flex;
justify-content:flex-end;
`;

export const MenusButton = styled(NavButton)`
margin-top:20px;
width:150px;
background:none;
border:none;
margin-right:10px;

:hover{
  box-shadow:none;
    color: rgb(95, 75, 139);
  }
  :focus{
    outline:none;
    background:none;
    border-radius:0em;
}

@media screen and (max-width:800px) {
  display:flex;
  justify-content: center;
  width:40px;
}
`;

export const TextLog = styled(TextMenu)`
padding-right:1.5em;
`;

export const IconLog = styled(IconAds)`
padding-right: 0;
`;

