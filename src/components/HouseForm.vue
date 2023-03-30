<template>
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">List a House</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>

  <form @submit.prevent="createHouse()">
    <div class="modal-body">
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Price</span>
        <input type="number" v-model="editable.price" class="form-control" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Year</span>
        <input type="number" v-model="editable.year" class="form-control" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Levels</span>
        <input type="number" v-model="editable.levels" class="form-control" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Bathrooms</span>
        <input type="number" v-model="editable.bathrooms" class="form-control" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Bedrooms</span>
        <input type="number" v-model="editable.bedrooms" class="form-control" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Image Url</span>
        <input type="url" v-model="editable.imgUrl" class="form-control" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group">
        <span class="input-group-text">Description</span>
        <textarea v-model="editable.description" class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>


<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
export default {
  props: {
    house: {
      type: House,
      default: {}
    }
  },
  setup(props) {
    const editable = ref({ ...props.house })

    const router = useRouter()

    return {
      editable,

      async createHouse() {
        try {
          const houseData = editable.value
          logger.log(houseData)
          await housesService.createHouse(houseData)
          router.push({ name: 'HouseDetails', params: { houseId: house.id } })
        } catch (error) {
          logger.error(error)
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>