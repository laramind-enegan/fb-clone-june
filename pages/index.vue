<template>
  <Head>
    <Title>Dashboard</Title>
  </Head>

  <div>
    <PostCard v-for="post in posts" :key="post.id" :data="post" />
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/userStore";

const userStore = useUserStore();
const { user } = userStore;

definePageMeta({
  middleware: "auth",
});

const { data: posts } = await useFetch(
  `http://localhost:3001/users/${user.id}/posts`
);
</script>

<style lang="scss" scoped></style>
