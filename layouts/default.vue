<template>
  <div class="container px-6 mt-10 md:mt-20 lg:mt-20 mx-auto">
    <Header @open="isDrawerOpen = true" :routes="routes" />
    <transition name="fade">
      <Drawer
        v-if="isDrawerOpen"
        @close="isDrawerOpen = false"
        :routes="routes"
      />
    </transition>
    <transition name="fade">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import Drawer from '../components/Drawer'
import Header from '../components/Header'
import routes from '../routes'

export default {
  components: {
    Drawer,
    Header
  },

  data() {
    return {
      isDrawerOpen: false,
      routes
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
