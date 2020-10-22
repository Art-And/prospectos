import styled from 'styled-components';

export const SideBarContainer = styled.aside`
position:fixed;
background-color: rgb(95, 75, 139);
height: 100%;
width: 18.750em;
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
export const ContainerIcons = styled.div`
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
margin-top: 4em;
`;

export const MenuButton = styled.button`
background-color: rgba(0, 0, 0, 0.2);
border-radius:0.5em;
color: white;
margin-bottom: 5px;
border:none;
width: 100%;
display: flex;
align-items: center;

@media screen and (max-width:1000px, 1500px) {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const IconMenu = styled.img`
margin-left: 1.5em;
padding-right: 1.5em;
height: 2.7em;

@media screen and (max-width:1500px) {
  margin-left:0.8em;
}

@media screen and (max-width:1000px) {
  margin-left:0.5em;
}
`;

export const TextMenu = styled.span`
::hover{
  color: aqua;
}
font-size: 1em;

@media screen and (max-width:1000px ) {
  display: none;
}
`;
