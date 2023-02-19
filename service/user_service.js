import { logger } from 'express-glass'
import jwt from 'jsonwebtoken'
import sha1 from 'sha1'
import env from '../config/env'
import ParamIllegal from '../error/param_illegal'
import Unauthorized from '../error/unauthorized'
import { Product, User } from '../model'
import { assertTrue } from '../util/assert_util'
import { maskingString, objectToLogStr } from '../util/log_util'

// const userRepository = new UserRepository()
const userService = {}

userService.login = async (email, password) => {
  logger().info(`user login, email = ${maskingString(email)}`)
  const user = await User.findOne({
    where: {
      email: email
    }
  })
  const userPassword = Buffer.from(user.password).toString()
  if (!user || userPassword !== sha1(password)) {
    throw new Unauthorized('Invalid email or password')
  }

  const authUser = { user_id: user.id }
  const token = jwt.sign(authUser, env.JWT_SECRET, { expiresIn: env.JWT_TTL })
  return token
}

userService.register = async (user) => {
  logger().info(`register new user, user = ${objectToLogStr(user)}`)
  assertTrue(!(await User.findOne({
    where: {
      email: user.email
    }
  })),
  new ParamIllegal('email already registered'))
  const newUser = await User.create({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: sha1(user.password)
  })
  logger().info('register new user success')
  return newUser
}

userService.getAll = async () => {
  logger().info('getting all user')
  const users = await User.findAll()
  logger().info('getting all user success')
  return users
}

userService.getById = async (userId) => {
  logger().info(`getting user by id, userId = ${userId}`)
  const user = await User.findOne({
    include: [{
      model: Product,
      as: 'products'
    }]
  })
  logger().info('getting user by id success')
  return user
}

export default userService
