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
    <div
      class="bottom-0 fixed left-0 h-64 flex-col text-gray-900 px-10 hidden lg:flex"
      style=""
    >
      <a
        v-for="soc in social"
        :key="soc.icon"
        :href="soc.link"
        rel="noopener noreferrer nofollow"
      >
        <font-awesome-icon
          :icon="['fab', `${soc.icon}`]"
          class="cursor-pointer md:text-xl lg:text-2xl mt-1 mr-1 ml-auto mb-4"
        />
      </a>
      <span class="block border border-gray-600 h-64 self-center "></span>
    </div>
  </div>
</template>

<script>
import Drawer from '../components/Drawer'
import Header from '../components/Header'
import routes from '../routes'
import social from '../social'

export default {
  components: {
    Drawer,
    Header
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
</style>
