import { DataTypes, Model } from 'sequelize';
import Group from './groupModel';
import sequelize from '../config/sequelize';
import UserGroup from './userGroupModel';
class User extends Model {}
User.init(
  {
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
  },
  {
    sequelize,
    tableName: 'users',
  }
);

(async () => {
  await User.sync({ force: true });
  User.belongsToMany(Group, { through: UserGroup });
})();

export default User;
