import { DataTypes, Model } from 'sequelize';
import User from './userModel';
import sequelize from '../config/sequelize';
import UserGroup from './userGroupModel';
class Group extends Model {}
Group.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    permissions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'groups',
  }
);

(async () => {
  await Group.sync({ force: true });
  Group.belongsToMany(User, { through: UserGroup });
})();

export default Group;
