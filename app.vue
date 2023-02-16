<script setup lang="ts">
import { useHead } from '#imports';
import NavItem from './components/NavItem.vue';

useHead({
  bodyAttrs: {
    class: 'bg-blue-900 text-blue-100',
  },
});
</script>

<template>
  <header class="p-6 md:py-0 md:pr-0 flex justify-between items-center">
    <NuxtLink to="/" class="block">
      <img src="~/assets/images/logo.svg" class="w-10 h-10 md:w-12 md:h-12" />
    </NuxtLink>

    <button type="button" class="md:hidden">
      <img src="~/assets/icons/icon-hamburger.svg" />
    </button>

    <nav class="hidden md:flex items-center gap-x-10 lg:gap-x-12 bg-white/[0.04] backdrop-blur-2xl px-12 lg:px-32">
      <NavItem href="/" number="00">Home</NavItem>
      <NavItem href="/destination" number="01">Destination</NavItem>
      <NavItem href="/crew" number="02">Crew</NavItem>
      <NavItem href="/technology" number="03">Technology</NavItem>
    </nav>
  </header>

  <main id="content">
    <NuxtPage />
  </main>
</template>
