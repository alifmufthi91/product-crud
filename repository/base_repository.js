export default class BaseRepository {
  constructor (model) {
    this.model = model
  }

  async findAll (attributes) {
    return this.model.findAll({
      attributes
    })
  }

  async create (object) {
    return this.model.create(object)
  }

  async build (object) {
    return this.model.build(object)
  }
}
