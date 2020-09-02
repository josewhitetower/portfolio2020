<template>
  <main class="mt-40">
    <div class="lg:flex md:block sm:block">
      <div class="w-2/3 mb-10 text-gray-900 mr-10">
        <h2 class="md:text-3xl lg:text-4xl font-sans font-black text-2xl mb-2">
          Projects
        </h2>
      </div>
      <ul>
        <li
          v-for="(project, key) in projects"
          :key="key"
          class="mb-12 md:mb-20 lg:mb-20 font-sans"
        >
          <h4
            class="text-2xl font-semibold text-gray-800 py-2 bg-white sticky top-84"
          >
            {{ project.title }}
          </h4>
          <div class="text-gray-600 mb-2">
            <span title="" class="hover:text-gray-900">
              {{ project.type }}
            </span>
          </div>
          <div class="flex flex-col">
            <a
              :href="project.liveDemo"
              :title="project.title"
              target="_blank"
              rel="nofoollow noopener"
            >
              <img :src="project.image" alt="netlify" class="self-start my-4" />
            </a>
            <div
              v-html="project.description"
              class="rich text-gray-800 mb-2"
            ></div>
          </div>
          <div class="text-gray-900 mb-2">
            <span class="font-semibold">Stack:</span>
            <span>{{ project.stack }}</span>
          </div>
          <div>
            <a
              :href="project.liveDemo"
              target="_blank"
              rel="nofoollow noopener"
              class="py-1 px-2 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white text-sm inline-block"
            >
              Live Demo
            </a>
            <a
              :href="project.sourceCode"
              target="_blank"
              rel="nofoollow noopener"
              class="py-1 px-2 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white text-sm inline-block"
            >
              Source Code
            </a>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import projects from '@/projects'
export default {
  head() {
    return {
      title: 'Projects'
    }
  },
  data() {
    return {
      projects
    }
  }
}
</script>
<style></style>
