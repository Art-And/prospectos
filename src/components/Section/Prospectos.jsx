import React from 'react';
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/components/Prospectos.scss';

const Prospectos = ({ openClosePopUp, ls, update, nameUser, cel, email, correo, origen, visita, km, min, ingreso, inversion, pago, tiempoCompra, cita, fechaRegistro }) => (
  <tr>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{ls}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{update}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{nameUser}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{cel}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{email}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{correo}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{origen}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{visita}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{km}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{min}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{ingreso}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{inversion}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{pago}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{tiempoCompra}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{cita}</Button></td>
    <td><Button className='chavito' color='' onClick={openClosePopUp}>{fechaRegistro}</Button></td>
  </tr>
);

export default Prospectos;
