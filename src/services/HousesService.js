import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {
  async getHouses() {
    const res = await api.get('auth/api/houses')
    logger.log('[GETTING THE HOUSES]', res.data)
    AppState.houses = res.data.map(h => new House(h))
    logger.log('[HOUSES IN APPSTATE]', AppState.houses)
  }

  async getHouseById(houseId) {
    AppState.house = null
    const res = await api.get(`auth/api/houses/${houseId}`)
    logger.log(res.data)
    AppState.house = new House(res.data)
  }

  async createHouse(houseData) {
    const res = await api.post(`auth/api/houses`, houseData)
    logger.log('[THIS IS THE POSTED HOUSE]', res.data)
    const newHouse = new House(res.data)
    AppState.houses.push(newHouse)
    return newHouse
  }

  async deleteHouse(houseId) {
    const res = await api.delete(`auth/api/houses/${houseId}`)
    logger.log('[DELETING HOUSE]', res.data)
  }
}

export const housesService = new HousesService()