<template>
  <main class="lg:mt-40 md:mt-32 mt-20">
    <div
      class="md:text-center lg:text-center lg:mt-32 md:mt-24 mt-20 text-2xl md:px-20 lg:px-40"
    >
      <h1 class="md:text-3xl lg:text-4xl font-sans font-bang text-gray-900">
        get in touch 📧
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
      >
        <input type="hidden" name="form-name" value="contactme" />
        <div>
          <label for="name">Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea name="message" required></textarea>
        </div>
        <button type="submit" value="Send message">Send</button>
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
