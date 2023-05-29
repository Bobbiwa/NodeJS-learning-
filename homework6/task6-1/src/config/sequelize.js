const { Sequelize } = require('sequelize');
import * as dotenv from 'dotenv'
dotenv.config()
const sequelize = new Sequelize(
  process.env.HOST
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
