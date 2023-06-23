<template>
  <TheHeader />
  <!-- La pagina da renderizzare -->
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <slot />
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
