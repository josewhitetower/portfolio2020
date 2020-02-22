<template>
  <main class="mt-40 md:mt-56 lg:mt-64">
    <div class="lg:flex md:block sm:block">
      <div class="w-2/3 mb-10 text-gray-900 mr-10">
        <h1 class="md:text-3xl lg:text-4xl font-sans font-black text-2xl mb-6">
          Professional Experience
        </h1>

        <a
          role="button"
          href="https://drive.google.com/file/d/19GYfsy1a2vJjK66FExtSc5_fgeI-SP1o/view?usp=sharingnpm run dev"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="border border-blue-600 py-3 px-2 rounded-lg hover:bg-blue-600 hover:text-white"
          >Download my CV 🇩🇪</a
        >
      </div>
      <ul>
        <li
          v-for="(value, key) in experiences"
          :key="key"
          class="mb-12 md:mb-20 lg:mb-20 font-sans"
        >
          <h4 class="text-xl font-semibold text-gray-800 mb-2">
            {{ value.role }}
          </h4>
          <div class="text-gray-600 mb-2">
            <a
              :href="value.company.link"
              :title="value.company.name"
              class="hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>{{ value.company.name }}</span>
            </a>
            |
            <span>{{ value.duration }}</span>
          </div>
          <div v-html="value.tasks" class="rich text-gray-800 mb-2"></div>
          <div class="text-gray-900">
            <span class="font-semibold">Extras:</span>
            <span v-for="(keyword, index) in value.keywords" :key="keyword"
              >{{ keyword
              }}<span v-if="index !== value.keywords.length - 1">, </span></span
            >
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import experiences from '@/experiences'
export default {
  head() {
    return {
      title: 'Experience'
    }
  },
  data() {
    return {
      experiences
    }
  }
}
</script>
<style></style>
