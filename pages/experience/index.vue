<template>
  <div class="flex">
    <div>
      <h1>experience</h1>
    </div>
    <ul>
      <li v-for="(value, key) in experiences" :key="key">
        <h4>{{ value.role }}</h4>
        <div>
          <a
            :href="value.company.link"
            :title="value.company.name"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <span>{{ value.company.name }}</span>
          </a>
          |
          <span>{{ value.duration }}</span>
        </div>
        <div v-html="value.tasks" class="tasks"></div>
      </li>
    </ul>
  </div>
</template>
<script>
import experiences from '@/experiences'
export default {
  head() {
    return {
      title: 'Experience'
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
