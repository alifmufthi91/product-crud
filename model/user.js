import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate (models) {
      const { Product } = models
      User.hasMany(Product, { foreignKey: 'uploader_id' , as: 'products'})
    }
  }

  User.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
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
      type: DataTypes.BLOB('long'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    underscored: true,
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    }
  })

  return User
}
