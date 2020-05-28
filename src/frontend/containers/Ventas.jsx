import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import ContainerVentas from '../components/ContainerVentas';
import TablaProductos from '../components/TablaProductos';
import ContentTicket from '../components/ContentTicket';
import TotalVenta from '../components/TotalVenta';
import { setTicket, setPrecio } from '../actions';
import Header from '../components/Header';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/components/Ventas.scss';
const API = 'http://localhost:3000/todos';

const Ventas = ({ ticket, preciototal }) => {
  const prod = useInitialState(API);
  // addTotals = () => {
  //   let Total = 0;
  //   ticket.map((item) => (Total += item.precio));
  //   return {
  //     ticket: Total,
  //   };
  // };

  return (
    <>
      <Header />
      <div className="container">
        <div className="tick">
          <div className="datos">
            <h2>Dulcería Asientos</h2>
            <label className="#gg">
              Folio:
            </label>
            <input className="DescTick" type="text" />
            <label className="gg">Fecha: </label>
            <input className="DescTick" type="text " />
            <label className="gg">Hora: </label>
            <input className="DescTick" type="datetime" name="" id="" />
          </div>
          <div className="subtick">
            <h2>Cantidad Productos</h2>
            {ticket.length > 0 && (
              <>
                {
                  ticket.map((item) => <ContentTicket key={item.cod_pro} {...item} />)
                }
              </>
            )}
            <TotalVenta Total="100" />
          </div>

          <div className="lin">
            <a href="#gg">Vender</a>
            <a href="#gg">Eliminar</a>
          </div>

        </div>
        {prod.data.length > 0 && (
          <TablaProductos>
            {prod.data.map(item =>
              <ContainerVentas key={item.cod_pro}{...item} />
            )}
          </TablaProductos>
        )};
    </div>
    </>
  );
};
const mapStateToPorps = (state) => {
  return {
    data: state.data,
    ticket: state.ticket,
  };
};

export default connect(mapStateToPorps, null)(Ventas);