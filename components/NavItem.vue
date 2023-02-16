<script setup lang="ts">
defineProps<{
  href: string,
  number: string,
}>();

const cssClasses = {
  'py-9 uppercase text-xs lg:text-base tracking-[0.16875em] text-white relative': true,
  "after:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[0.1875rem]": true,
  'hover:after:bg-white/50': true,
};
</script>

<template>
  <NuxtLink :to="href" :class="cssClasses">
    <span class="hidden lg:inline font-bold mr-2">
      {{ number }}
      <span class="sr-only">:</span>
    </span>
    <slot />
  </NuxtLink>
</template>

<style scoped>
.router-link-active::after {
  background-color: rgb(var(--color-white));
}
</style>
