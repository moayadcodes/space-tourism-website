<script setup lang="ts">
import { Ref, useHead, ref } from '#imports';
import MobileNavContainer from './components/MobileNavContainer.vue';
import NavItem from './components/NavItem.vue';
import { FocusTrap } from 'focus-trap-vue';

const mobileNavOpen = ref(false) as Ref<boolean>;

const openMobileNav = () => {
  mobileNavOpen.value = true;
};

const closeMobileNav = () => {
  mobileNavOpen.value = false;
};

useHead({
  bodyAttrs: {
    class: 'bg-blue-900 text-blue-100 min-h-screen',
  },
});
</script>

<template>
  <header class="py-5 md:py-0 2xl:pt-10 flex items-center">
    <NuxtLink to="/" class="block p-1 md:p-0 absolute top-5 left-5 md:top-6 md:left-10 2xl:top-16 2xl:left-14">
      <img src="~/assets/images/logo.svg" class="w-10 h-10 md:w-12 md:h-12" />
    </NuxtLink>

    <LayoutContainer class="grow z-10">
      <div class="flex justify-end">
        <button type="button" class="flex justify-center items-center md:hidden w-12 h-12 -mr-3" @click="openMobileNav">
          <img src="~/assets/icons/icon-hamburger.svg" alt="Open website navigation" />
        </button>

        <nav class="hidden md:flex items-center gap-x-10 lg:gap-x-12 bg-white/[0.04] lg:bg-transparent backdrop-blur-2xl lg:backdrop-blur-none px-12 lg:px-20 xl:px-32 2xl:pr-0">
          <NavItem context="desktop" href="/" number="00">Home</NavItem>
          <NavItem context="desktop" href="/destination" number="01">Destination</NavItem>
          <NavItem context="desktop" href="/crew" number="02">Crew</NavItem>
          <NavItem context="desktop" href="/technology" number="03">Technology</NavItem>
        </nav>
      </div>
    </LayoutContainer>

    <div
      class="hidden md:block h-24 bg-white/[0.04] backdrop-blur-2xl absolute top-0 right-0 w-6 lg:w-[58.12%] 2xl:mt-10 nav-bg"
    ></div><!-- Desktop nav background -->

    <FocusTrap v-if="mobileNavOpen" :active="true" :click-outside-deactivates="true" @deactivate="closeMobileNav">
      <MobileNavContainer @mobile-nav-close="closeMobileNav">
        <nav class="pt-6">
          <NavItem context="mobile" href="/" number="00">Home</NavItem>
          <NavItem context="mobile" href="/destination" number="01">Destination</NavItem>
          <NavItem context="mobile" href="/crew" number="02">Crew</NavItem>
          <NavItem context="mobile" href="/technology" number="03">Technology</NavItem>
        </nav>
      </MobileNavContainer>
    </FocusTrap>
  </header>

  <main id="content" class="text-center 2xl:text-left">
    <NuxtPage />
  </main>
</template>
