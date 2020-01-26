<template>
  <div class="container px-6 mt-10 md:mt-20 lg:mt-20 mx-auto">
    <Navbar @show="isDrawerVisible = true" />
    <Drawer v-if="isDrawerVisible" @hide="isDrawerVisible = false" />
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
      isDrawerVisible: false
    }
  }
}
</script>

<style></style>
