import { useUserStore } from "~/stores/userStore";

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore();

  if (to.name !== "login" && !userStore.isLoggedIn) return navigateTo("/login");
});
