<template>
  <main class="mt-40 md:mt-56 lg:mt-64">
    <div class="lg:flex md:block sm:block">
      <div class="w-2/3 mb-10 text-gray-900 mr-10">
        <h1 class="md:text-3xl lg:text-4xl font-sans font-black text-2xl mb-6">
          Professional Experience
        </h1>

        <a
          role="button"
          href="https://drive.google.com/file/d/11TQXda3NBoKfJWYfbrKlc0x6aEv67emL/view?usp=sharing"
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
            {{ value.title }}
          </h4>
          <div class="text-gray-600 mb-2">
            <a
              :href="value.link"
              :title="value.company"
              class="hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>{{ value.company }}</span>
            </a>
            |
            <span
              >{{ formatDate(value.from_date) }} -
              {{ value.to_date ? formatDate(value.to_date) : 'Today' }}
            </span>
          </div>
          <article
            v-html="$md.render(value.task)"
            class="rich text-gray-800 mb-2"
          ></article>
          <div class="text-gray-900">
            <span class="font-semibold">Extras:</span>
            <span>{{ value.keywords }}</span>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: 'Experience'
    }
  },
  async asyncData({ $content }) {
    const experiences = await $content('experience')
      .sortBy('from_date', 'desc')
      .fetch()
    return {
      experiences
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
<style></style>
