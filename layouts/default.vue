<template>
  <div class="container px-6 mt-10 md:mt-20 lg:mt-20 mx-auto">
    <Navbar @open="isDrawerOpen = true" />
    <transition name="fade">
      <Drawer v-if="isDrawerOpen" @close="isDrawerOpen = false" />
    </transition>

    <nuxt />
  </div>
</template>

<script>
import Drawer from '../components/Drawer'
import Navbar from '../components/Navbar'

export default {
  components: {
    Drawer,
    Navbar
  },
  data() {
    return {
      isDrawerOpen: false
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
