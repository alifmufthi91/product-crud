import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate (models) {
      const { User } = models
      Product.belongsTo(User, { foreignKey: 'uploader_id', as: 'uploader'})
    }
  }

  Product.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    uploader_id: {
      type: DataTypes.INTEGER
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_description: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    underscored: true
  })
  return Product
}
