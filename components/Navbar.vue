<template>
  <nav class="Navbar justify-between flex items-center  text-gray-900">
    <h1 class="md:text-xl lg:text-2xl font-light">José Torreblanca</h1>
    <font-awesome-icon
      :icon="['fas', 'bars']"
      @click="$emit('open')"
      class="cursor-pointer md:text-xl lg:text-2xl"
    />
  </nav>
</template>

<script>
export default {}
</script>

<style>
.Navbar {
  font-family: 'Open Sans', sans-serif;
}
</style>
