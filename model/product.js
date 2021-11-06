import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/sequelize'

class Product extends Model {}

Product.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
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
  modelName: 'Product',
  createdAt: false,
  updatedAt: false,
  underscored: true
})

export default Product
