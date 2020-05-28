import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Producto from './Productos';

const Categoria = sequelize.define('categoria', {
  id_categoria: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

Categoria.hasMany(Producto, { foreignKey: 'tipo', sourceKey: 'id' });
Producto.belongsTo(Categoria, { foreignKey: 'tipo', sourceKey: 'id' });

export default Categoria;
