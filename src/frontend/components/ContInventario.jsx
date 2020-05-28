/* eslint-disable eol-last */
/* eslint-disable prefer-template */
/* eslint-disable camelcase */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setProductos, setTicket, deleteTicket } from '../actions';
import '../assets/styles/components/Inventario.scss';

const url = 'http://localhost:3000/todos';
const ConInventario = (props) => {
  const { cod_pro, nombre, cantidad, precio, tipo, inventario_prod } = props;
  // function deleteData(cod_pro, url) {
  //   return fetch(url + '/' + cod_pro, {
  //     method: 'delete',
  //   })
  //     .then(response => response.json());
  // }
  const handleDeleteTicket = (cod_pro) => {
    console.log(props);
    try {
      fetch(url + '/' + cod_pro, {
        method: 'get',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
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
            <Link to="/ventas">
              <button className="btnEliminar" type="button" onClick={() => handleDeleteTicket(cod_pro)}>
                Eliminar
              </button>
            </Link>

            <button className="btnActualizar" type="button">
              Actualizar
            </button>

          </td>

        </tr>
      </tbody>

    </>

  );
};

const mapDispatchToProps = {
  setProductos,
  setTicket,
  deleteTicket,
};

export default connect(null, mapDispatchToProps)(ConInventario);