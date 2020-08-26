<template>
  <aside class="bg-gray-900 inset-0 fixed text-white z-10 overflow-auto">
    <div
      class="container flex justify-between px-6 mt-10 md:mt-20 lg:mt-20 mx-auto"
    >
      <nuxt-link v-if="$route.path !== '/'" exact to="/">
        <h1 class="font-sans md:text-xl lg:text-2xl ">
          José Torreblanca
        </h1>
      </nuxt-link>
      <font-awesome-icon
        :icon="['fas', 'times']"
        @click="$emit('close')"
        class="cursor-pointer md:text-xl lg:text-2xl mt-1 mr-1 ml-auto"
      />
    </div>
    <nav class="font-sans flex flex-col items-center justify-center mt-10">
      <transition name="slide">
        <ul v-if="visible" class="flex flex-col items-end">
          <li
            v-for="route in routes"
            :key="route.path"
            class="text-xl md:text-2xl lg:text-4xl mb-10 text-gray-600 hover:text-white"
          >
            <nuxt-link
              :to="route.path"
              :exact="route.exact"
              active-class="text-white"
              >{{ route.name }}</nuxt-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </aside>
</template>

<script>
export default {
  props: { routes: { type: Array, default: () => [] } },
  data() {
    return {
      visible: false
    }
  },
  watch: {
    '$route.path'() {
      this.$emit('close')
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeyDown)
    this.visible = true
  },
  destroyed() {
    window.removeEventListener('keydown', this.onKeyDown)
  },
  methods: {
    onKeyDown(e) {
      if (e.key === 'Escape') {
        this.$emit('close')
      }
    }
  }
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-in-out 0.2s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
