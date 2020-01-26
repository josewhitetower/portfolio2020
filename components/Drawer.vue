<template>
  <div class="bg-gray-900 inset-0 fixed text-white ">
    <div
      class="container flex justify-end px-6 mt-10 md:mt-20 lg:mt-20 mx-auto"
    >
      <font-awesome-icon
        :icon="['fas', 'times']"
        @click="$emit('close')"
        class="cursor-pointer md:text-xl lg:text-2xl mt-1 mr-1"
      />
    </div>
    <nav class="Navigation mt-40 flex flex-col items-center justify-center">
      <ul>
        <li
          v-for="route in routes"
          :key="route.path"
          class="text-4xl mb-10 text-gray-600 hover:text-white"
        >
          <nuxt-link
            :to="route.path"
            :exact="route.exact"
            active-class="text-white"
            >{{ route.name }}</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          path: '/',
          exact: true,
          name: 'Home'
        },
        {
          path: '/work',
          name: 'Work'
        },
        {
          path: '/resume',
          name: 'Resumè'
        }
      ]
    }
  },
  watch: {
    '$route.path'() {
      this.$emit('close')
    }
  }
}
</script>

<style>
.Navigation {
  font-family: 'Open Sans', sans-serif;
}
</style>
