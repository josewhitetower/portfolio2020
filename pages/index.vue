<template>
  <main class="mt-40 lg:mb-12">
    <div
      class="md:text-center lg:text-center lg:mt-32 md:mt-24 mt-20 text-2xl md:px-20 lg:px-40"
    >
      <div class="flex justify-center mb-12">
        <img
          src="/icons/logo.svg"
          alt="logo"
          class="h-64 mr-3"
          style="animation: float 6s ease-in-out infinite;"
        />
      </div>
      <h1 class="md:text-3xl lg:text-4xl font-sans font-black text-gray-900">
        Hi, I'm José Torreblanca &#128075;&#127997;
      </h1>
      <p
        class="text-gray-700 font-sans mt-4 lg:text-2xl md:text-2xl text-lg leading-loose"
      >
        I am a Frontend Developer with some
        <nuxt-link
          to="/experience"
          title="Esperience"
          class="font-semibold border-b hover:border-gray-900"
          >experience</nuxt-link
        >
        living in Hamburg, Germany. Currently enjoying working at
        <a
          class="font-semibold border-b hover:border-gray-900"
          href="https://www.spiegel-techlab.de"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="Spiegel Techlab"
          >Spiegel Techlab</a
        >, and before that at
        <a
          class="font-semibold border-b hover:border-gray-900"
          href="https://www.dvinci.de/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="Spiegel Techlab"
          >d.vinci</a
        >. I am passionate about using technology to solve problems and create
        useful applications and some of my side (fun)
        <nuxt-link
          to="/projects"
          title="Projects"
          class="font-semibold border-b hover:border-gray-900"
          >projects are listed here</nuxt-link
        >
        using some
        <nuxt-link
          to="/skills"
          title="Skills"
          class="font-semibold border-b hover:border-gray-900"
          >skills</nuxt-link
        >
        I've adopted and I enjoy working with.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style>
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
