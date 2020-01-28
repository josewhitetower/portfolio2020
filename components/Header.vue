<template>
  <header class="font-sans justify-between flex items-center text-gray-900">
    <nuxt-link exact to="/">
      <h1 class="md:text-xl lg:text-2xl font-light">José Torreblanca</h1>
    </nuxt-link>
    <font-awesome-icon
      :icon="['fas', 'bars']"
      @click="$emit('open')"
      @keydown.enter="$emit('open')"
      tabindex="0"
      class="cursor-pointer md:text-xl lg:text-2xl"
    />
  </header>
</template>

<script>
export default {}
</script>

<style></style>
