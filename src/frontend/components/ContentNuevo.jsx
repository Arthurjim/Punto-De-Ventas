/* eslint-disable prefer-template */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTicket, deleteTicket } from '../actions';
import '../assets/styles/components/Inventario.scss';

const url = '/nuevoProducto';
const ContentNuevo = () => {
  const useInitialState = { cod_pro: '', nombre: '', cantidad: '', precio: '', tipo: '', inventario_prod: '' };
  const [prod, setProductos] = useState(useInitialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductos({ ...prod, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(prod);
    setProductos(useInitialState);
    try {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(prod),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const hanldeUpdate = async (e) => {
    e.preventDefault();
    console.log(prod);
    setProductos(useInitialState);
    try {
      fetch(url + '/' + prod.cod_pro, {
        method: 'PUT',
        body: JSON. stringify(prod),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Nuevo Productos</h1>
      <form>
        <h3>Codigo</h3>
        <input type="text" name="cod_pro" onChange={handleChange} placeholder="Ingresa codigo" />
        <h3 htmlFor=""> Nombre Prducto</h3>
        <input type="text" name="nombre" onChange={handleChange} placeholder="Ingresa Nombre" />
        <h3 htmlFor=""> Cantidad</h3>
        <input type="text" name="cantidad" onChange={handleChange} placeholder="Ingresa Cantidad" />
        <h3 htmlFor=""> Precio</h3>
        <input type="text" name="precio" onChange={handleChange} placeholder="Ingresa Precio" />
        <h3 htmlFor="">Tipo Producto</h3>
        <input type="text" name="tipo" onChange={handleChange} placeholder="Ingresa Tipo" />
        <h3> Numero Inventario</h3>
        <input type="text" name="inventario_prod" onChange={handleChange} placeholder="Ingresa Tipo" />
        <Link to="/ventas">
          <input type="submit" onClick={handleSubmit} placeholder="ingresar" />
        </Link>

        <Link to="/ventas">
          <input type="submit" onClick={hanldeUpdate} value="Actualizar" />
        </Link>
      </form>
    </>

  );
};

const mapDispatchToProps = {
  setTicket,
  deleteTicket,
};

export default connect(null, mapDispatchToProps)(ContentNuevo);

