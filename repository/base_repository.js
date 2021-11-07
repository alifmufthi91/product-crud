export default class BaseRepository {
  constructor (model) {
    this.model = model
  }

  async findAll (attributes) {
    return this.model.findAll({
      attributes
    })
  }

  async findById (id) {
    return this.model.findByPk(id)
  }

  async create (object) {
    return this.model.create(object)
  }

  async build (object) {
    return this.model.build(object)
  }

  async deleteById (id) {
    return this.model.destroy({ where: { id: id } })
  }
}
