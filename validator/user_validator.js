import Joi from 'joi'

const userValidator = {}
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

userValidator.register = Joi.object().keys({
  first_name: Joi.string().required().messages({
    'string.empty': 'first_name cannot be an empty',
    'any.required': 'first_name is required'
  }),
  last_name: Joi.string().required().messages({
    'string.empty': 'last_name cannot be an empty',
    'any.required': 'last_name is required'
  }),
  email: Joi.string().required()
    .pattern(emailRegex)
    .messages({
      'string.empty': 'email cannot be an empty',
      'string.pattern.base': 'email is invalid',
      'any.required': 'email is required'
    }),
  password: Joi.string().required()
    .min(8)
    .pattern(passwordRegex)
    .messages({
      'string.empty': 'password cannot be an empty',
      'string.min': 'password should have a minimum length of {#limit}',
      'string.pattern.base': 'password must include minimum eight characters, at least one letter and one number',
      'any.required': 'password is required'
    })
})

export default userValidator
