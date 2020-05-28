import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/Login.scss';
import user from '../assets/static/user.jpg';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleInput = event =>{
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/home');
  }
  return (
    <div className="Fondo">

      <div className="login-box lo">
        <img src={user} className="avatar" alt="Avatar" />
        <h1>Nuevo Usuario</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nombre</label>
          <input
            name="name"
            type="text"
            placeholder=""
            onChange={handleInput}
          />

          <label htmlFor="username">Correo</label>
          <input
            name="email"
            type="text"
            placeholder=""
            onChange={handleInput}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            name="password"
            type="text"
            placeholder=""
            onChange={handleInput }
          />
          <input type="submit" value="Agregar" />
          <input type="submit" value="vaciar" />

        </form>
      </div>

    </div>
  );
};
const mapDispatchToProps = {
  registerRequest,
}
export default connect(null, mapDispatchToProps)(Register);