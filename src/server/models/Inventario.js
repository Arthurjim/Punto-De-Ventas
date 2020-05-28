import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Producto from './Productos';

const Inventario = sequelize.define('inventario', {
  id_inventario: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
  },
  existencia: {
    type: Sequelize.INTEGER,
  },
  fecha_cad: {
    type: Sequelize.DATE,
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

Inventario.hasMany(Producto, { foreignKey: 'inventario_prod', sourceKey: 'id' });
Producto.belongsTo(Inventario, { foreignKey: 'inventario_prod', sourceKey: 'id' });

export default Inventario;
