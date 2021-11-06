import { DataTypes, Model, Sequelize } from 'sequelize'
import sequelize from '../database/sequelize'

class User extends Model {}

User.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.BIGINT,
    defaultValue: new Date().getTime(),
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.BIGINT,
    defaultValue: new Date().getTime()
  }
}, {
  sequelize,
  modelName: 'User',
  underscored: true,
  defaultScope: {
    attributes: { exclude: ['password'] }
  }
})

export default User
