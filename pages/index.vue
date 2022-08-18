<template>
  <NuxtLayout name="start">
    <div class="base">
      <h1>Начальная страница</h1>
      <nuxt-link to="app/auth"> К приложению </nuxt-link>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
import { useCounterStore } from "~/store";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useCounterStore();

    const { getCount } = storeToRefs(store);

    return {
      counter: getCount,
      addCount: store.addCounter,
    };
  },
};
</script>

<style scoped lang="sass">
.base
  min-height: 80vh
</style>
