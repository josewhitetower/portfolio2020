<template>
  <header
    :class="isScrolled"
    class="bg-white container fixed left-0 mx-auto pb-5 px-6 right-0 text-gray-900 top-0 z-10 pt-10 md:pt-20 lg:pt-20"
  >
    <div class="flex font-sans items-center justify-between">
      <div class="flex items-center">
        <nuxt-link exact to="/">
          <span :class="homeFontColor" class="md:text-xl lg:text-2xl ">
            José Torreblanca
          </span>
        </nuxt-link>
        <div v-if="!isHome" class="md:text-xl lg:text-2xl ">
          <span :class="homeFontColor" class="ml-4 mr-2">/</span>
          <span v-if="routeName">{{ routeName }}</span>
        </div>
      </div>
      <span tabindex="0" class="cursor-pointer md:text-xl lg:text-2xl">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          @click="$emit('open')"
          @keydown.enter="$emit('open')"
        />
      </span>
    </div>
  </header>
</template>

<script>
export default {
  props: { routes: { type: Array, default: () => [] } },
  data() {
    return {
      view: {
        isAtTopOfPage: true
      }
    }
  },
  computed: {
    isHome() {
      return this.$route.path === '/'
    },
    homeFontColor() {
      return this.isHome ? 'text-gray-900' : 'text-gray-600'
    },
    routeName() {
      const route = this.routes.find(
        (route) => route.path === this.$route.matched[0].path
      )
      return (route && route.name) || ''
    },
    isScrolled() {
      return !this.view.isAtTopOfPage && 'border-b'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.isAtTopOfPage) this.view.isAtTopOfPage = false
      } else if (!this.view.isAtTopOfPage) this.view.isAtTopOfPage = true
      // user is at top of page
    }
  }
}
</script>

<style></style>
