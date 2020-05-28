import Sequelize from 'sequelize';

// eslint-disable-next-line no-new
// eslint-disable-next-line import/prefer-default-export
export const sequelize = new Sequelize(
  'Dulceria', // db name,
  'postgres', // username
  'arturo15922', // password
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 6,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false,
  },
);
