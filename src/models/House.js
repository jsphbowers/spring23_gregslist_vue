import { Profile } from "./Account.js"

export class House {
  constructor(data) {
    this.id = data.id
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.price = data.price
    this.seller = new Profile(data.seller)
    this.createdAt = new Date(data.createdAt)
  }
}