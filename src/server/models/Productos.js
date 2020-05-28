import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Producto = sequelize.define('productos', {
  cod_pro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
  },
  cantidad: {
    type: Sequelize.INTEGER,
  },
  precio: {
    type: Sequelize.DECIMAL,
  },
  tipo: {
    type: Sequelize.STRING,
  },
  inventario_prod: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

export default Producto;
