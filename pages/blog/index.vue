<template>
  <main class="mt-24">
    Blog
    <li v-for="post of posts" :key="post.slug" class="list-none">
      <NuxtLink :to="'blog/' + post.slug">{{ post.title }}</NuxtLink>
    </li>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: 'Blog'
    }
  },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()

    return {
      posts
    }
  },
  data() {
    return {}
  }
}
</script>
<style></style>
