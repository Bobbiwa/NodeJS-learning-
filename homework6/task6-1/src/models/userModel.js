import { DataTypes, Model } from 'sequelize';
import Group from './groupModel';
import sequelize from '../config/sequelize';
import UserGroup from './userGroupModel';

const User = sequelize.define('user', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
  gp_id: {
    type: DataTypes.STRING,
    foreignKey: true,
  },
});

export default User;
