<template>
  <main class="mt-40 md:mt-48 lg:mt-48">
    <img
      src="~assets/imgs/jose.jpeg"
      alt="Profile picture"
      class="h-32 md:h-48 lg:h-56 w-32 md:w-48 lg:w-56 responsive rounded-full mx-auto"
    />
    <div
      class="md:text-center lg:text-center lg:mt-32 md:mt-24 mt-20 text-2xl md:px-20 lg:px-40"
    >
      <h1 class="md:text-3xl lg:text-4xl font-sans font-bang text-gray-900">
        Hi, I'm José Torreblanca &#128075;&#127997;
      </h1>
      <p
        class="text-gray-700 font-sans md:px-6 lg:px-6 mt-4 lg:text-2xl md:text-2xl text-lg leading-loose"
      >
        I am a Frontend Developer living in Hamburg, Germany. Currently enjoying
        working at
        <a
          class="font-semibold border-b hover:border-gray-900"
          href="https://www.spiegel-techlab.de"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="Spiegel Techlab"
          >Spiegel Techlab</a
        >, creating and constantly learning amazing things I can incorporate to
        <nuxt-link
          to="/toolbox"
          title="Toolbox"
          class="font-semibold border-b hover:border-gray-900"
          >my toolbox</nuxt-link
        >
        .
      </p>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
