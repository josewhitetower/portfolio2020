<template>
  <header class="Header justify-between flex items-center  text-gray-900">
    <h1 class="md:text-xl lg:text-2xl font-light">José Torreblanca</h1>
    <font-awesome-icon
      :icon="['fas', 'bars']"
      @click="$emit('open')"
      class="cursor-pointer md:text-xl lg:text-2xl"
    />
  </header>
</template>

<script>
export default {}
</script>

<style>
.Header {
  font-family: 'Open Sans', sans-serif;
}
</style>
