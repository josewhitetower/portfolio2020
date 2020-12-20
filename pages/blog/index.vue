<template>
  <main class="mt-24">
    Blog
    <li v-for="post of posts" :key="post._id" class="list-none">
      <NuxtLink :to="'blog/' + post.slug.current">{{ post.title }}</NuxtLink>
    </li>
  </main>
</template>
<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type == "post"]{slug,_id,title}`
export default {
  head() {
    return {
      title: 'Blog'
    }
  },
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    // eslint-disable-next-line nuxt/no-this-in-fetch-data
    this.posts = await this.$sanity.fetch(query)
  }
}
</script>
<style></style>
