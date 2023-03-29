<template>
  <div class="container-fluid">
    <section class="row">
      <div v-for="houseFromVFor in houses" :key="houseFromVFor.id" class="col-4">
        <HouseCard :house="houseFromVFor" />
      </div>
    </section>
  </div>
</template>


<script>
import { onMounted, computed } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js"
import { AppState } from "../AppState.js";
import HouseCard from "../components/HouseCard.vue";

export default {
  setup() {
    async function getHouses() {
      try {
        await housesService.getHouses();
      }
      catch (error) {
        logger.log(error);
        Pop.error(error);
      }
    }
    onMounted(() => {
      getHouses();
    });
    return {
      houses: computed(() => AppState.houses),
      account: computed(() => AppState.account)
    };
  },
  components: { HouseCard }
}
</script>


<style lang="scss" scoped></style>