<template>
  <router-link :to="{ name: 'HouseDetails', params: { houseId: house.id } }">
    <div class="card img-fluid elevation-3 p-3 my-2">
      <img :src="house.imgUrl" :alt="house.description">
      <h4>${{ house.price }}</h4>
      <div v-if="route.name == 'HouseDetails'" class="d-flex justify-content-between">
        <div>
          <h5> Beds: {{ house.bedrooms }} </h5>
          <h5> Baths: {{ house.bathrooms }} </h5>
          <h5> Levels: {{ house.levels }} </h5>
        </div>
        <div>
          <h5>Description:</h5>
          <p>{{ house.description }}</p>
        </div>
        <div v-if="house.creatorId == account.Id">
          <button @click="deleteHouse()" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
          <button></button>
        </div>
      </div>
    </div>
  </router-link>
</template>


<script>
import { House } from "../models/House.js";
import { computed } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js";
import { logger } from "../utils/Logger.js";

export default {
  props: {
    house: {
      type: House,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    return {
      route,
      account: computed(() => AppState.account),
      async deleteHouse() {
        try {
          if (await Pop.confirm()) {
            const houseId = props.house.id;
            await housesService.deleteHouse(houseId);
            router.push({ name: "Houses" })
          }
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