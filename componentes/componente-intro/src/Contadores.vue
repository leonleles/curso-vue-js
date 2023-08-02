<template>
  <div class="contadores">
    <app-contador v-for="c in 5" :key="c"/>
    <button>?</button>
  </div>
</template>

<script>
import Contador from "./Contador.vue";

export default {
  name: "AppContadores",
  components: {
    "app-contador": Contador,
  },
};
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>
