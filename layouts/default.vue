<template>
  <div class="flex flex-col h-full h-screen justify-between">
    <div
      class="container px-6 mt-10 md:mt-20 lg:mt-20 mx-auto mb-12 md:mb-20 lg:mb-2"
    >
      <Header @open="isDrawerOpen = true" :routes="routes" />
      <transition name="fade">
        <Drawer
          v-if="isDrawerOpen"
          @close="isDrawerOpen = false"
          :routes="routes"
        />
      </transition>
      <transition name="slideup">
        <nuxt />
      </transition>
    </div>
    <Footer :social="social" />
  </div>
</template>

<script>
import Drawer from '../components/Drawer'
import Header from '../components/Header'
import Footer from '../components/Footer'
import routes from '../routes'
import social from '../social'

export default {
  components: {
    Drawer,
    Header,
    Footer
  },

  head: {
    bodyAttrs: {
      class: 'antialiased'
    }
  },

  data() {
    return {
      isDrawerOpen: false,
      routes,
      social
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
.slideup-enter-active,
.slideup-leave-active {
  transition: all 0.2s ease-in-out 0.2s;
}
.slideup-enter, .slideup-leave-to /* .slide-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(40px);
}
</style>
