import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';
import User from './userModel';

class UserGroup extends Model {}

UserGroup.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { sequelize, tableName: 'usergroup' }
);

(async () => {
  try {
    await UserGroup.sync({ force: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default UserGroup;