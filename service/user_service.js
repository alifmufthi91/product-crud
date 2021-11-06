import { logger } from 'express-glass'
import ParamIllegal from '../error/param_illegal'
import UserRepository from '../repository/user_repository'
import { assertTrue } from '../util/assert_util'
import sha1 from 'sha1'

const userRepository = new UserRepository()
const userService = {}

userService.add = async (user) => {
  logger().info(`add new user, user = ${user}`)
  assertTrue(!(await userRepository.findByEmail(user.email)),
    new ParamIllegal('email already registered'))
  const newUser = await userRepository.create({
    firstName: user.first_name,
    lastName: user.last_name,
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
