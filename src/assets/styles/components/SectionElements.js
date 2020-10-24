import styled from 'styled-components';
import {
  Menu,
  MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export const ContainerSection = styled.section`
margin-top:1em;
margin-left:17.5em;
margin-right:1em;
height: 55em;
background:white;
box-shadow: 0px 0px 3px 3px #dad9d8;

@media screen and (max-width:1500px) {
  margin-left:11em;
}

@media screen and (max-width:1000px) {
  margin-left:5em;
}
`;

//Boton master
export const OriginButton = styled.button`
  color:white;
  border-radius:.3em;
  margin-right:1.5em;
  background-color:white;
  width:150px;
  border-width:2px;
  border-color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  background:rgb(95, 75, 139);

  :hover{
    border: visible;
    border-width:3px;
    border-color:orangered;
    color: white;
  }

  :focus{
    outline:none;
    background:white;
    border-width:1px;
    border-color:rgb(95, 75, 139);
    color:rgb(95, 75, 139);
}


@media screen and (max-width:520px) {
  display: none;
}
`;

//FistPart
export const FistButtons = styled.div`
padding-top: 20px;
display:flex;
justify-content: flex-end;
`;

export const Menus = styled(Menu)`
`;

export const MenusItem = styled(MenuItem)`
font-size: .8em;
width:23.4em;
display: flex;
justify-content:center;
`;

export const MenusButton = styled.button`
width:300px;
margin-right:10px;
background:white;
border-width:0.5px;
border-color: black;
border-radius:5px;

:focus{
    outline:none;
    background:none;
    border-radius:0em;
}

@media screen and (max-width:400px) {
  width:220px;
}
`;

export const IconLog = styled.img`
padding-right: 1em;
height: 1.5em;

@media screen and (max-width:420px) {
  display: none;
}
`;

//SecondPart
export const SecondButtons = styled.div`

`;

export const ButtonTwo = styled(OriginButton)`

`;

export const ButtonThree = styled(OriginButton)`

`;

export const InputSearch = styled.input.attrs({
  type: 'text',
  placeholder: 'Seach',
})`

`;

export const TextOne = styled.p`

`;
export const TextTwo = styled.p`

`;

//Tabla
export const Tabla = styled.div`

`;
