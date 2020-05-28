import React from 'react';
import { connect } from 'react-redux';
import { deleteTicket } from '../actions';
import removeIcon from '../../frontend/assets/static/equis.png';

const ContentTicket = (props) => {
  const { cod_pro, nombre, cantidad, precio, tipo, inventario_prod, Total } = props;

  //Esta funcion maneja el guardado a nuestros favoritos
  const handleDeleteTicket = (itemId) => {
    props.deleteTicket(itemId);
  };
  return (
    <>
      <label>
        NO.{cod_pro}
      </label>

      Cantidad.<input className="cantidad" type="text" name="" id="" />

      <label>
        {nombre}
      </label>
      <label>
        Precio
        ${precio}
      </label>
      <button type="button" onClick={() => handleDeleteTicket(cod_pro)}>
        <img src={removeIcon} alt="eliminar" />
      </button>
      <p>{Total}</p>
      <br />
      <br />
    </>
  );
};

const mapDispatchToProps = {
  deleteTicket,
};
export default connect(null, mapDispatchToProps)(ContentTicket);
