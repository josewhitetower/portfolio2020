<template>
  <footer
    class="bg-gray-100 bottom-0 flex lg:py-0 lg:py-0 justify-between left-0 lg:bg-transparent lg:fixed lg:right-auto lg:bg-transparent lg:bottom-0 lg:fixed lg:flex-col lg:items-end lg:right-auto px-10 flex-shrink-0 py-10 right-0 text-gray-900"
    style=""
  >
    <a
      v-for="soc in social"
      :key="soc.link"
      :href="soc.link"
      :target="soc.icon.target ? soc.icon.target : '_blank'"
      class="hover:text-blue-600"
      rel="noopener noreferrer nofollow"
    >
      <font-awesome-icon
        :icon="[`${soc.icon.prefix}`, `${soc.icon.name}`]"
        class="cursor-pointer md:text-xl lg:text-2xl mt-1 mr-1 ml-auto lg:mb-4"
      />
    </a>
    <span
      class="lg:block lg:block border border-gray-600 h-20 self-center hidden"
    ></span>
  </footer>
</template>

<script>
export default {
  props: {
    social: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
