import Joi from 'joi'

const productValidator = {}

productValidator.register = Joi.object().keys({
  product_name: Joi.string().required().messages({
    'string.empty': 'product_name cannot be an empty',
    'any.required': 'product_name is required'
  }),
  product_description: Joi.string().optional().allow(null).messages({
    'string.empty': 'product_description cannot be an empty'
  }),
  photo: Joi.string().optional().allow(null).messages({
    'string.empty': 'photo cannot be an empty'
  })
})

export default productValidator
