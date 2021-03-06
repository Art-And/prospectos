import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

export const SideBarContainer = styled.aside`
position:fixed;
background-color: rgb(95, 75, 139);
height: 100%;
width: 16em;
top: 0;
left: 0;
transition: 0.3s ease-in-out;

@media screen and (max-width:1500px) {
  width: 10em;
}
@media screen and (max-width:1000px) {
  width: 4em;
}`;

//Styles de Icons
export const ContainerIcons = styled(NavLink)`
margin-top:0.938em;
display: flex;
justify-content: center;
align-items: center;
`;

export const NameIcon = styled.img`
height: 2.813em;
@media screen and (max-width:1000px) {
  display: none;
}
`;

export const Icon = styled.img`
margin-top: 0.313em;
height: 1.875em;
`;

//Styles de  Menu
export const MenuContainer = styled.div`
margin-top: 4em
`;

export const MenuButton = styled(NavLink)`
background-color: rgba(0, 0, 0, 0.2);
border-radius:.5em;
color: white;
margin-bottom: 5px;
border:none;
width: 100%;
display: flex;
align-items: center;
text-decoration: none;

:focus{
    background:#F2F2F2;
    border-radius:0em;
    color:rgb(95, 75, 139);
}

:hover{
  color: orange;
  text-decoration: none;
}

@media screen and (max-width:1000px, 1500px) {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const IconMenu = styled.img`
margin-left: 0.5em;
padding-right: 1em;
height: 2.7em;

@media screen and (max-width:1500px) {
  margin-left:0.6em;
}

@media screen and (max-width:1000px) {
  margin-left:0.5em;
}
`;

export const TextMenu = styled.span`
font-size: .8em;

@media screen and (max-width:1000px ) {
  display: none;
}
`;

//styles de Dropdown del Menu

export const DropD = styled(Dropdown)`

`;

export const DropdownT = styled(DropdownToggle)`
width:100%;
padding:0;
height: 45px;
margin-bottom:5px;
border: none;
background: none;

`;

export const DropdownM = styled(DropdownMenu)`
background:none;
border: none;
width:9.375em;
padding-top:1px;
`;

export const DropdownI = styled.div`
background: none;

@media screen and (max-width:1000px) {
  width: 3.8em;
}
`;
