<template>
  <article class="mt-24">
    <h1>{{ post.title }}</h1>
    <NuxtContent :document="post" class="" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('blog', params.slug).fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
      console.log(post)
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post
    }
  }
}
</script>
