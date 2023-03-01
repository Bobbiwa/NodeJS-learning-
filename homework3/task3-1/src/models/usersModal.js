import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/myDatabase')

const Student = sequelize.define('student', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
});

module.exports = Student
