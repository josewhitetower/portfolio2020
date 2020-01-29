<template>
  <header class="font-sans justify-between flex items-center text-gray-900">
    <div class="flex items-center">
      <nuxt-link exact to="/">
        <h1 :class="homeFontColor" class="md:text-xl lg:text-2xl font-light">
          José Torreblanca
        </h1>
      </nuxt-link>
      <div v-if="!isHome" class="md:text-xl lg:text-2xl font-light">
        <span :class="homeFontColor" class="ml-4 mr-2">/</span>
        <span>{{ routeName }}</span>
      </div>
    </div>
    <font-awesome-icon
      :icon="['fas', 'bars']"
      @click="$emit('open')"
      @keydown.enter="$emit('open')"
      tabindex="0"
      class="cursor-pointer md:text-xl lg:text-2xl"
    />
  </header>
</template>

<script>
export default {
  props: { routes: { type: Array, default: () => [] } },
  computed: {
    isHome() {
      return this.$route.path === '/'
    },
    homeFontColor() {
      return this.isHome ? 'text-gray-900' : 'text-gray-600'
    },
    routeName() {
      return this.routes.find((route) => route.path === this.$route.path).name
    }
  }
}
</script>

<style></style>
