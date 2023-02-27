<script setup lang="ts">
const props = defineProps<{
  context: 'desktop' | 'mobile',
  href: string,
  number: string,
}>();

const cssClasses = {
  // Base
  'block font-sans-condensed uppercase tracking-[0.16875em] text-white relative': true,
  "after:block after:content-[''] after:absolute": true,
  'hover:after:bg-white/50': true,
  // Mobile
  'flex py-1 pl-8 mt-[1.125rem] first:mt-0': props.context === 'mobile',
  'after:top-0 after:right-0 after:w-1 after:h-full': props.context === 'mobile',
  // Desktop
  'py-9 text-xs 2xl:text-base leading-6 2xl:leading-6': props.context === 'desktop',
  'after:left-0 after:bottom-0 after:w-full after:h-[0.1875rem]': props.context === 'desktop',
};
</script>

<template>
  <NuxtLink :to="href" :class="cssClasses">
    <span class="basis-6 md:hidden 2xl:inline font-bold mr-2">
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
