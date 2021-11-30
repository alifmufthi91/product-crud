export default class BaseRepository {
  constructor (model) {
    this.model = model
  }

  async findAll (options) {
    return this.model.findAll(options)
  }

  async findOne (options) {
    return this.model.findOne(options)
  }

  async findAndCountAll (options) {
    return this.model.findAndCountAll(options)
  }

  async findByPk (primaryKey, options) {
    return this.model.findByPk(primaryKey, options)
  }

  async create (object, options) {
    return this.model.create(object, options)
  }

  build (object, options) {
    return this.model.build(object, options)
  }

  async update (object, options) {
    return this.model.update(object, options)
  }

  async aggregate (attribute, aggregateFunction, options) {
    return this.model.aggregate(attribute, aggregateFunction, options)
  }
}
