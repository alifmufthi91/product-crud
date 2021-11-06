import { logger } from 'express-glass'
import ParamIllegal from '../error/param_illegal'
import UserRepository from '../repository/user_repository'
import { assertTrue } from '../util/assert_util'
import sha1 from 'sha1'
import Unauthorized from '../error/unauthorized'
import jwt from 'jsonwebtoken'
import { maskingString, objectToLogStr } from '../util/log_util'
import env from '../config/env'

const userRepository = new UserRepository()
const userService = {}

userService.login = async (email, password) => {
  logger().info(`user login, email = ${maskingString(email)}`)
  const user = await userRepository.findByEmail(email)
  if (!user || user.password !== sha1(password)) {
    throw new Unauthorized('Invalid email or password')
  }

  const authUser = { user_id: user.id }
  const token = jwt.sign(authUser, env.JWT_SECRET, { expiresIn: env.JWT_TTL })
  return token
}

userService.add = async (user) => {
  logger().info(`add new user, user = ${objectToLogStr(user)}`)
  assertTrue(!(await userRepository.findByEmail(user.email)),
    new ParamIllegal('email already registered'))
  const newUser = await userRepository.create({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: sha1(user.password)
  })
  logger().info('add new user success')
  return newUser
}

userService.getAll = async () => {
  logger().info('geting all user')
  const users = await userRepository.findAll()
  logger().info('getting all user success')
  return users
}

export default userService
