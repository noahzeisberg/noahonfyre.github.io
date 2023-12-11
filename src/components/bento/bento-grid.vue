<template>
  <section class="flex justify-center">
    <h2>{{ title }}</h2>
  </section>

  <section class="p-12 grid auto-rows-[calc(100vh/3.5)] grid-cols-3 gap-4">
    <slot></slot>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>