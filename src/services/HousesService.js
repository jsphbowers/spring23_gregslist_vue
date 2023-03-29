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
}

export const housesService = new HousesService()