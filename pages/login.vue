<template>
  <div class="row align-center">
    <div class="col-7">
      <h1>Facebook</h1>
      <p class="text--xl">
        Facebook ti aiuta a connetterti e rimanere in contatto con le persone
        della tua vita.
      </p>
    </div>
    <div class="col-5">
      <AuthLogin />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
</script>

<style lang="scss" scoped>
h1 {
  color: var(--primary-color-400);
}
</style>
