import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/components/Prospectos.scss';

const TablaProspectos = ({ children, openClosePopUp, popUp }) => {

  const modalStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <>
      <div className='prospectos table-responsive'>
        <table className='prospectos__tab table table-hover table-sm'>
          <thead className='prospectos__thead'>
            <tr>
              <th className='prospectos__ls'>LS</th>
              <th className='prospectos__actualizacion'>Actualizacion</th>
              <th className='prospectos__name'>Nombre</th>
              <th className='prospectos__cel'>Telefono</th>
              <th className='prospectos__email'>eMail</th>
              <th className='prospectos__correo'>Correo abierto</th>
              <th className='prospectos__origen'>Origen</th>
              <th className='prospectos__visita'>Quiere visitar</th>
              <th className='prospectos__km'>Distancia km</th>
              <th className='prospectos__min'>Distancia Min</th>
              <th className='prospectos__ingreso'>Ingresos</th>
              <th className='prospectos__inversion'>Inversion</th>
              <th className='prospectos__pago'>Metodo de pago</th>
              <th className='prospectos__tiempo--compra'>Tiempo estimado para compra</th>
              <th className='prospectos__cita'>Fecha deseada de visita</th>
              <th className='prospectos__fecha--registro'>Fecha registro</th>
            </tr>
          </thead>
          <tbody>
            { children }
          </tbody>
        </table>
      </div>

      <Modal isOpen={popUp} style={modalStyles}>
        <ModalHeader>
          Modal del Prospecto
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for='grafica'>Grafica</Label>
          </FormGroup>
          <FormGroup>
            <Label for='datos'>Datos</Label>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color='primary' onClick={openClosePopUp}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default TablaProspectos;
