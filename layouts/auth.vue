<template>
  <div class="container container-md w-100">
    <slot />
  </div>
  <AuthFooter />
</template>

<script setup></script>

<style lang="scss">
body > div {
  min-height: 100vh;
  margin: 0;

  display: flex;
  flex-direction: column;
}
</style>
