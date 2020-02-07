<template>
  <main class="mt-40 md:mt-56 lg:mt-64">
    <div
      class="md:text-center lg:text-center lg:mt-32 md:mt-24 mt-20 md:px-20 lg:px-40"
    >
      <h1
        class="md:text-3xl lg:text-4xl font-sans font-bang text-gray-900 text-2xl"
      >
        get in touch... 📧
      </h1>
      <p
        class="text-gray-700 font-sans md:px-6 lg:px-6 mt-4 lg:text-2xl md:text-2xl text-lg leading-loose"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore eos
        natus sunt velit atque cumque facere repellendus quo suscipit!
      </p>
      <form
        name="contactme"
        action="/thanks"
        method="post"
        netlify
        netlify-honeypot="bot-field"
        class="text-left max-w-xl mx-auto w-full mt-12 md:mt-20 lg:mt-20 text-sm md:text-base lg:text-base"
      >
        <input type="hidden" name="form-name" value="contactme" />
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          class="border-gray-400 w-full p-2 rounded mb-4 focus:border-blue-600 border"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          class="border border-gray-400 w-full p-2 rounded mb-4"
        />
        <textarea
          name="message"
          required
          placeholder="Hey José...."
          class="border border-gray-400 w-full p-2 rounded h-48 mb-4"
        ></textarea>
        <input
          ref="upload"
          type="file"
          name="file"
          class="hidden"
          tabindex="-1"
        />
        <button
          type="submit"
          value="Send message"
          class="bg-blue-600 text-white py-2 px-4 rounded block"
        >
          Send message
        </button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact'
    }
  }
}
</script>

<style></style>
