<template>
  <div class="bg-gray-900 inset-0 fixed">
    <div
      class="container flex justify-end px-6 mt-10 md:mt-20 lg:mt-20 mx-auto"
    >
      <font-awesome-icon
        :icon="['fas', 'times']"
        @click="$emit('hide')"
        class="cursor-pointer md:text-xl lg:text-2xl text-white mt-1 mr-1"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
