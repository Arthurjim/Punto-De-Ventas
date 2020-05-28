import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import casa from '../assets/static/casa.png';
import salidas from '../assets/static/salidas-icon.png';
import ventas from '../assets/static/ventas_icon.png';
import inventario from '../assets/static/inventario-icon.png';
import producto from '../assets/static/paquete.png';
import Login from '../assets/static/user-icon.png';

const Header = () => {
  return (

    <header>
      <nav>
        <ul>

          <li>
            <Link to="/home">
              <img src={casa} alt="" />
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/ventas">
              <img src={ventas} alt="" />
              Ventas
            </Link>
          </li>
          <li className="submenu">
            <Link to="/inventario">
              <img src={inventario} alt="" />
              Inventario
            </Link>
            <ul className="children">
              <li><a href="#gg">inventario 1</a></li>
              <li><a href="#hh">inventario 1</a></li>
              <li><a href="#nn">inventario 1</a></li>
            </ul>
          </li>
          <li>
            <a href="#gg">
              <img src={producto} alt="" />
              Productos
            </a>
          </li>
          <li>
            <a href="#gg">
              <img src={salidas} alt="" />
              Salidas
            </a>
          </li>
          <li>
            <Link to="/login">
              <img src={Login} alt="" />
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;