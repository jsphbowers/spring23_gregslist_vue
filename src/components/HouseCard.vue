<template>
  <router-link :to="{ name: 'HouseDetails', params: { houseId: house.id } }">
    <div class="card img-fluid elevation-3 p-3 my-2">
      <img :src="house.imgUrl" :alt="house.description">
      <h4>{{ house.price }}</h4>
      <p>{{ house.bedrooms }}</p>
      <p>{{ house.bathrooms }}</p>
    </div>
  </router-link>
</template>


<script>
import { House } from "../models/House.js";

export default {
  props: {
    house: {
      type: House,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>