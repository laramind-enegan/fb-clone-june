import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    accessToken: "",
    user: {},
  }),
  getters: {
    isLoggedIn() {
      return this.accessToken != "" ? true : false;
    },
  },
  actions: {
    setAccessToken(data) {
      this.accessToken = data;
    },
    setUser(data) {
      this.user = data;
    },
  },
  persist: true,
});
