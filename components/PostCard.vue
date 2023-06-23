<template>
  <article class="post">
    <div class="post__header">
      <div class="post__author">
        <img class="post__author-img" :src="data.author.avatar" alt="" />
        <div class="post__author-info">
          <h4 class="post__author-name">
            {{ data.author.name }} {{ data.author.surname }}
          </h4>
          <time class="post__time">{{ data.time }}</time>
        </div>
      </div>
    </div>
    <div class="post__content">
      {{ data.content }}
    </div>
    <div v-if="data.image" class="post__image">
      <img :src="data.image" />
    </div>
    <a class="post__toggle-comments" href="">Commenti</a>
  </article>
</template>

<script setup>
defineProps(["data"]);
</script>

<style lang="scss" scoped>
.post {
  background-color: #242526;
  margin-top: var(--space-lg);
  border-radius: 10px;
  &__header {
    padding: var(--space-xs);
  }
  &__author {
    display: flex;
    align-items: center;
  }
  &__author-name {
    margin: 0;
  }
  &__author-img {
    height: 40px;
    margin-right: 10px;
  }
  &__image img {
    width: 100%;
  }
  &__content {
    padding: var(--space-xs);
  }
  &__toggle-comments {
    display: inline-block;
    padding: var(--space-xxs) var(--space-xs);
    color: inherit;
    font-size: var(--text-sm);
  }
}
</style>
