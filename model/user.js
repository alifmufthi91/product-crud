import { DataTypes, Model, Sequelize } from 'sequelize'
import sequelize from '../database/sequelize'

class User extends Model {}

User.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
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
  created_at: {
    type: DataTypes.BIGINT,
    defaultValue: new Date().getTime(),
    allowNull: false
  },
  updated_at: {
    type: DataTypes.BIGINT,
    defaultValue: null
  }
}, {
  sequelize,
  modelName: 'User',
  createdAt: false,
  updatedAt: false,
  underscored: true
})

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get())

  delete values.password
  return values
}

export default User
