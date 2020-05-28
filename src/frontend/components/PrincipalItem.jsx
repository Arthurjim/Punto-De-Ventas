import React from 'react';
import { Link } from 'react-router-dom';
import inventario from '../assets/static/inventario.jpg';
import ventas from '../assets/static/ventas.png';
import mercancia from '../assets/static/mercancia.png';
import ticket from '../assets/static/ticket.jpg';
import ganancias from '../assets/static/ganancias.jpg';
import usuario from '../assets/static/usuario.jpg';

const PrincipalItem = () => (

  <>
    <div className="product-item" category="limpieza">

      <img src={inventario} alt="" />
      <h3>Revisar Inventario</h3>
      <Link to="/inventario">
        Acceso
      </Link>
    </div>
    <div className="product-item" category="limpieza">
      <img src={ventas} alt="" />
      <h3>Área de Ventas</h3>
      <Link to="/ventas">
        Ventas
      </Link>
    </div>
    <div className="product-item" category="limpieza">
      <img src={mercancia} alt="" />
      <h3>Registrar Mercancía</h3>
      <a href="#">Acceso</a>
    </div>
    <div className="product-item" category="limpieza">
      <img src={usuario} alt="" />
      <h3>Usuarios</h3>
      <Link to="/registro">Acceso</Link>
    </div>
    <div className="product-item" category="limpieza">
      <img src={ticket} alt="" />
      <h3>Reimprimir Ticket</h3>
      <a href="#">Acceso</a>
    </div>
    <div className="product-item" category="limpieza">
      <img src={ganancias} alt="" />
      <h3>Ganancias</h3>
      <a href="#">Acceso</a>
    </div>
  </>

);

export default PrincipalItem;