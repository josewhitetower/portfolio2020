<template>
  <main class="mt-40 md:mt-56 lg:mt-64">
    <div class="lg:flex md:block sm:block">
      <div class="mb-10 text-gray-900 mr-10">
        <h2 class="md:text-3xl lg:text-4xl font-sans font-black text-2xl mb-2">
          Skills
        </h2>
      </div>
      <ul class="w-2/3 mx-auto">
        <li
          v-for="(group, key) in skills"
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
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import skills from '@/skills'
export default {
  head() {
    return {
      title: 'Skills'
    }
  },
  data() {
    return {
      skills
    }
  }
}
</script>
<style></style>
