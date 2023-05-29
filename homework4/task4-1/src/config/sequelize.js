const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'postgres://postgres:123456@localhost:5432/myDatabase'
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
