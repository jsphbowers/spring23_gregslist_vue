<template>
  <div class="container-fluid">
    <section class="row">
      <div v-if="house" class="col-10">
        <HouseCard :house="house" />
      </div>
    </section>
  </div>
</template>


<script>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import HouseCard from "../components/HouseCard.vue";
import { housesService } from "../services/HousesService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const route = useRoute()
    async function getHouseById() {
      try {
        await housesService.getHouseById(route.params.houseId)
      } catch (error) {
        logger.log(error)
        Pop.error(error)
      }
    }
    onMounted(() => {
      getHouseById()
    })
    return {
      house: computed(() => AppState.house)
    }
  },
  components: { HouseCard }
}
</script>


<style lang="scss" scoped></style>