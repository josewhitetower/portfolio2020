<template>
  <main class="mt-40 md:mt-56 lg:mt-64">
    <div class="lg:flex md:block sm:block">
      <div class="w-2/3 mb-10 text-gray-900 mr-10">
        <h1 class="md:text-3xl lg:text-4xl font-sans font-black text-2xl mb-6">
          Skills
        </h1>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Front End</h2>
        <div class="flex mb-4 ml-8 justify-around">
          <img src="/icons/html-5.svg" alt="html5" class="h-12 mr-3" />
          <img src="/icons/css-3.svg" alt="css3" class="h-12 mr-3" />
          <img src="/icons/javascript.svg" alt="javascript" class="h-12" />
        </div>
        <p class="mb-4">
          HTML5, CCS3 and Javscript ES6 are newest versions of standard, core
          web development technologies. They are also core skills for every
          Frontend Developer, allowing to make websites works on every browser,
          on every device.
        </p>
        <div class="flex mb-4 ml-8 justify-around">
          <img src="/icons/vue.svg" alt="vue" class="h-12 mr-3" />
          <img src="/icons/react.svg" alt="react" class="h-12 mr-3" />
        </div>
        <p class="mb-4">
          Vue.js and React.js are JavaScript Frameworks. Both, component based,
          facilitate the creation of interactive user interfaces and are
          perfectly capable of create Single Page Applications.
        </p>
        <div class="flex mb-4 ml-8 justify-around">
          <img
            src="/icons/tailwindcss.svg"
            alt="tailwindcss"
            class="h-12 mr-3"
          />
        </div>
        <p class="mb-12">
          TailwindCSS is my favorite CSS Framework to date. It's faster for
          development because the syntax is shorter and is less code to mantain.
          Unlike any other framework, I still need to know CSS.
        </p>
        <h2 class="text-2xl font-semibold mb-2">Backend</h2>
        <div class="flex mb-4 ml-8 justify-around">
          <img src="/icons/nodejs.svg" alt="nodejs" class="h-12 mr-3" />
          <img src="/icons/npm.svg" alt="npm" class="h-12 mr-3" />
        </div>
        <p class="mb-12">
          Node.js is a JavaScript runtime that allows to write server side
          applications, and NPM is a package manager for Node.js, that also
          allows running task in form of scripts.
        </p>
        <h2 class="text-2xl font-semibold mb-2">CI/CD</h2>
        <div class="flex mb-4 ml-8 justify-around">
          <img src="/icons/netlify.svg" alt="netlify" class="h-12 mr-3" />
          <img src="/icons/travis-ci.svg" alt="travis" class="h-12 mr-3" />
          <img src="/icons/docker-icon.svg" alt="docker" class="h-12" />
        </div>
        <p class="mb-12">
          With Netlify, Travis and Docker continuous integration and continuous
          deployment was never easier. I use them regulary on my projects, and
          they are really convenient and with a strong community behid.
        </p>
        <h2 class="text-2xl font-semibold mb-2">Version Control</h2>
        <div class="flex mb-4 ml-8 justify-around">
          <img src="/icons/git.svg" alt="git" class="h-12 mr-3" />
        </div>
        <p>
          Git is a version control system for tracking changes in source code
          during software development - Wikipedia says. Software development is
          much more safe, and much more organized with git. Every changes in
          code can be easily reversed.
        </p>
      </div>
    </div>
  </main>
</template>
<script>
import skills from '@/skills'
export default {
  head() {
    return {
      title: 'Skills'
    }
  },
  data() {
    return {
      skills
    }
  }
}
</script>
<style></style>
