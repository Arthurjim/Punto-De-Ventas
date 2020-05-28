/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import avatar from '../assets/static/avatar.png';
import '../assets/styles/Login.scss';

const Login = props => {
  const [form, setValues] = useState({
    email: '',
  });
  //escuchara el valor event que se encuentra en nuestro input
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  const handleSumbit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/home');
  };
  return (
    <div className="Fondo">
      <div className="login-box">
        <img src={avatar} className="avatar" alt="Avatar" />
        <h1>BIENVENIDO</h1>
        <form onSubmit={handleSumbit}>
          <label forhtml="username">USUARIO</label>
          <input
            name="email"
            type="text"
            placeholder="Ingresa tu usuario"
            onChange={handleInput}
          />

          <label forhtml="password">Contraseña</label>
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Ingresa tu contraseña"
            onChange={handleInput}
          />

          <input type="submit" value="Entrar" />
          <h1>DULCERÍA LILY</h1>
        </form>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login)