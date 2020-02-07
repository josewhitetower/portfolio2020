<template>
  <main class="mt-40 md:mt-56 lg:mt-64">
    <div
      class="md:text-center lg:text-center lg:mt-32 md:mt-24 mt-20 md:px-20 lg:px-40"
    >
      <h1
        class="md:text-3xl lg:text-4xl font-sans font-bang text-gray-900 text-2xl"
      >
        My Tools 🛠
      </h1>
      <p
        class="text-gray-700 font-sans md:px-6 lg:px-6 mt-4 lg:text-2xl md:text-2xl text-lg leading-loose"
      >
        Doing Frontend Web Development is not easy, but luckily there are tools
        that help us build amazing things and I enjoy working with.
      </p>
    </div>
    <div class="max-w-2xl mx-auto w-full justify-center mt-16">
      <div
        v-for="(group, key) in tools"
        :key="key"
        class="flex justify-around mb-12"
      >
        <a
          v-for="tool in group"
          :key="tool.icon"
          :title="tool.name"
          :href="tool.link"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            :src="`/icons/${tool.icon}.svg`"
            :alt="tool.name"
            class="h-16 responsive"
          />
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import tools from '@/tools.js'
export default {
  head() {
    return {
      title: 'Toolbox'
    }
  },
  data() {
    return {
      tools
    }
  }
}
</script>

<style></style>
