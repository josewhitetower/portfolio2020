<template>
  <div
    class="bg-gray-100 bottom-0 flex h-32 py-12 lg:py-0 lg:py-0 justify-between left-0 lg:bg-auto lg:bg-transparent lg:fixed lg:right-auto lg:bg-transparent lg:bottom-0 lg:fixed lg:flex-col lg:h-auto lg:items-end lg:right-auto px-10 right-0 text-gray-900"
    style=""
  >
    <a
      v-for="soc in social"
      :key="soc.link"
      :href="soc.link"
      class="hover:text-blue-600"
      rel="noopener noreferrer nofollow"
    >
      <font-awesome-icon
        :icon="[`${soc.icon.prefix}`, `${soc.icon.name}`]"
        class="cursor-pointer md:text-xl lg:text-2xl mt-1 mr-1 ml-auto mb-4"
      />
    </a>
    <span
      class="lg:block lg:block border border-gray-600 h-20 self-center hidden"
    ></span>
  </div>
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
