import { Product, User } from '../model'
import BaseRepository from './base_repository'

export default class UserRepository extends BaseRepository {
  constructor () {
    super(User)
  }

  async findByEmail (email) {
    return this.model.findOne({
      where: {
        email
      }
    })
  }

  async findAllAndProducts () {
    return this.model.findAll({
      include: Product
    })
  }
}
