<template>
  <main class="lg:mt-40 md:mt-32 mt-20">
    <div class="lg:flex md:block sm:block">
      <div class="w-2/3 mb-10 text-gray-900 mr-10">
        <h1 class="md:text-3xl lg:text-4xl font-sans font-bang text-2xl mb-2">
          experience
        </h1>
        <p class="font-sans tracking-tight mb-6">
          Download a copy of my CV below.
        </p>
        <div class="flex text-gray-600">
          <a href="" class="mr-4 hover:text-gray-900">Download 🇩🇪</a>
          <a href="" class="hover:text-gray-900">Download 🇬🇧</a>
        </div>
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
          <div v-html="value.tasks" class="tasks text-gray-800 mb-2"></div>
          <div class="text-gray-900">
            <span class="font-semibold">Keywords:</span>
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
