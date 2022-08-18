import { defineStore } from "pinia";

export const useCounterStore = defineStore("index", {
  state: () => ({ count: 0 }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    addCounter() {
      this.count = this.count + 1;
    },
  },
});
