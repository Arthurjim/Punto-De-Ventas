import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTicket, deleteTicket } from '../actions';
import '../assets/styles/components/TablaProductos.scss';

const ContainerVentas = (props) => {
  const { cod_pro, nombre, cantidad, precio, tipo, } = props;
  //Esta funcion maneja el guardado a ticket
  const handleSetTicket = () => {
    props.setTicket({
      cod_pro, nombre, cantidad, precio, tipo, inventario_prod, Total,
    });
  };
  return (
    <>

      <tbody>
        <tr>
          <td>{cod_pro}</td>
          <td>{nombre}</td>
          <td>{cantidad}</td>
          <td>{precio}</td>
          <td>{tipo}</td>
          <td>{inventario_prod}</td>
          <td>
            <button onClick={handleSetTicket}>
              añadir
            </button>
          </td>

        </tr>
      </tbody>

    </>
  );
};
ContainerVentas.propTypes = {
  cod_pro: PropTypes.number,
  nombre: PropTypes.string,
  cantidad: PropTypes.number,
  precio: PropTypes.string,
  tipo: PropTypes.number,
  inventario_prod: PropTypes.number,
};
const mapDispatchToProps = {
  setTicket,
  deleteTicket,
};

export default connect(null, mapDispatchToProps)(ContainerVentas);