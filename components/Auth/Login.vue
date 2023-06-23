<template>
  <div class="form">
    <form @submit.prevent="onSubmitForm">
      <div class="w-100 mb-space-sm">
        <BaseInput
          label="Email"
          id="email"
          class="d-block w-100"
          type="email"
          placeholder="Inserisci l'email"
          v-model="formData.email"
          required
        />
      </div>
      <div class="w-100 mb-space-sm">
        <BaseInput
          label="Password"
          id="password"
          class="d-block w-100"
          type="password"
          placeholder="Inserisci password"
          v-model="formData.password"
          required
        />
      </div>
      <BaseButton class="btn__primary mt-space-sm" type="submit"
        >Accedi</BaseButton
      >
      <div v-if="error" class="error mt-space-sm">
        {{ error }}
      </div>
      <hr class="w-100 my-space-md" />
      <NuxtLink to="/register">
        <BaseButton class="btn__ternary mt-space-sm" type="button"
          >Crea Account</BaseButton
        ></NuxtLink
      >
    </form>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/userStore";

const userStore = useUserStore();

const formData = ref({
  email: "",
  password: "",
});

const error = ref("");

async function onSubmitForm() {
  try {
    const data = await $fetch("http://localhost:3001/login", {
      method: "POST",
      body: formData.value,
    });
    userStore.setAccessToken(data.accessToken);
    userStore.setUser(data.user);
    return navigateTo("/");
  } catch (err) {
    error.value = err.data;
  }
}
</script>

<style lang="scss" scoped>
.form {
  background-color: var(--secondary-color-300);
  padding: var(--space-lg);
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
