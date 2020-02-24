<template>
  <main class="mt-40 md:mt-56 lg:mt-64">
    <div class="lg:flex md:block sm:block">
      <div class="w-2/3 mb-10 text-gray-900 mr-10">
        <h1 class="md:text-3xl lg:text-4xl font-sans font-black text-2xl mb-2">
          About me
        </h1>
      </div>
      <div>
        <p class="mb-8 leading-relaxed">
          <span class="font-semibold">Moin!</span> my name is José Torreblanca.
          I'm a Frontend Software Developer since I graduated from Informatic
          Science (B.Sc.) at
          <a
            href="https://www.uci.cu"
            class="underline italic"
            rel="nofollow noopener"
            target="_blank"
            >UCI</a
          >
          in Havanna, Cuba.
        </p>
        <p class="mb-8 leading-relaxed">
          I was born and raised in the sunny island of
          <span class="font-semibold">Cuba 🏝</span> , where I was living for 26
          years before moving to Germany with my significant other ❤. I can
          speak German and English being pretty fluent in both languages
          additionally to my mother tonge, Spanish.
        </p>
        <p class="mb-8 leading-relaxed">
          I have worked with Perl, JavaScript, HTML, CSS and a bit of PHP during
          my career, but I consider myself a permanent learner. I enjoy watching
          tutorials on Youtube and hacking (enhancing😉) solutions for it. I
          belive in that german phrase that goes by:
          <span class="italic font-semibold">Übung macht den Meister</span>.
        </p>
        <p class="leading-relaxed">
          I believe in <span class="font-semibold">Empathy</span> towards:
        </p>
        <ul class="list-disc list-inside">
          <li>Users, to understand their needs.</li>
          <li>
            Teammates, to understand what issues they face and to treat them how
            I would like to be treated.
          </li>
          <li>Community, to contribuite in meanful ways.</li>
        </ul>
        <p class="mb-8 leading-relaxed">
          Ultimately... Towards anyone. It makes any place a better place.
        </p>
        <p class="mb-8 leading-relaxed">
          I am a proud member of
          <a
            href="https://www.hamburg-pride.de/"
            class="italic underline"
            rel="nofollow noopener"
            target="_blank"
            >Hamburg Pride e.V 🌈</a
          >. I believe in the work they do in order to keep my city Hamburg,
          open, tolerant and welcoming.
        </p>
        <p class="mb-8 leading-relaxed">
          Other than that I enjoy Fitness and Yoga (around 3 times a week 🧘🏾‍♂️),
          and I own a bike to commute to work or go to the lake in the Summer
          days.
        </p>
        <p class="mb-16">
          Drop an
          <a href="mailto:josewhitetower@gmail.com" class="underline italic"
            >email</a
          >
          or contact me on my social channels, I'd be happy to chat 😎.
        </p>
      </div>
    </div>
  </main>
</template>
<script>
import experiences from '@/experiences'
export default {
  head() {
    return {
      title: 'About'
    }
  },
  data() {
    return {
      experiences
    }
  }
}
</script>
<style></style>
