import { Product } from '../model'
import BaseRepository from './base_repository'

export default class ProductRepository extends BaseRepository {
  constructor () {
    super(Product)
  }
}
