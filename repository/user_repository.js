import User from '../model/user'
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
}
