import { Op } from 'sequelize'

export default function getProductConditions (query) {
  const conditions = {}

  if (query.product_name) {
    conditions.product_name = {
      [Op.like]: '%' + (query.product_name) + '%'
    }
  }
  if (query.product_description) {
    conditions.product_description = {
      [Op.like]: '%' + (query.product_description) + '%'
    }
  }
  if (query.id) {
    conditions.id = {
      [Op.eq]: (query.id)
    }
  }
  return conditions
}
