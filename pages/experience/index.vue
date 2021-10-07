<template>
  <main class="mt-40">
    <div class="lg:flex md:block sm:block">
      <div class="w-2/3 mb-10 text-gray-900 mr-10">
        <h1 class="md:text-3xl lg:text-4xl font-sans font-black text-2xl mb-6">
          Professional Experience
        </h1>

       

     
      
          



      </div>
      <ul>
        <li
          v-for="value in experiences"
          :key="value._id"
          class="mb-12 md:mb-20 lg:mb-20 font-sans"
        >
          <h4
            class="text-xl font-semibold text-gray-800 py-2 bg-white sticky top-84"
          >
            {{ value.name }}
          </h4>
          <div class="text-gray-600 mb-2">
            <a
              :href="value.company_url"
              :title="value.company_name"
              class="hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>{{ value.company_name }}</span>
            </a>
            |
            <span
              >{{ formatDate(value.from_date) }} -
              {{ formatDate(value.to_date) }}
            </span>
          </div>
          <article class="rich text-gray-800 mb-2">
            <PortableText
              :blocks="value.description"
              :serializers="serializers"
            />
          </article>
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
import { groq } from '@nuxtjs/sanity'
import PortableText from 'sanity-blocks-vue-component'

const query = groq`*[_type == "experience"] | order(from_date desc) {name,company_name,company_url,description,from_date,to_date,_id,keywords}`
export default {
  head() {
    return {
      title: 'Experience'
    }
  },
  components: { PortableText },
  data: () => ({
    experiences: []
  }),
  computed: {
    serializers() {
      return {
        marks: {
          link: ({ children, mark }) => {
            // Read https://css-tricks.com/use-target_blank/
            const { blank, href } = mark
            return blank ? (
              <a href={href} target="_blank" rel="noopener" title={children}>
                {children}
              </a>
            ) : (
              <a href={href} title={children}>
                {children}
              </a>
            )
          }
        }
      }
    }
  },
  async fetch() {
    // eslint-disable-next-line nuxt/no-this-in-fetch-data
    this.experiences = await this.$sanity.fetch(query)
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short' }
      return date ? new Date(date).toLocaleDateString('en', options) : 'Today'
    }
  }
}
</script>
<style></style>
