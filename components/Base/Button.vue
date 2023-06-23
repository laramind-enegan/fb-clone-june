<template>
  <component :is="type" class="btn">
    <slot />
  </component>
</template>

<script setup>
import { computed, useAttrs } from "vue";
const attrs = useAttrs();
const type = computed(() => (attrs.href ? "a" : "button"));
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  text-decoration: none;

  &:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }

  &__primary,
  &__ternary {
    background-color: var(--primary-color-400);
    color: #fff;
    padding: var(--space-sm) var(--space-xl);
    font-size: var(--text-sm);
    transition: background 0.2s, color 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  &__ternary {
    background-color: var(--success-color);
  }
}
</style>
