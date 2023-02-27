<script setup lang="ts">
import { useHead } from '#imports';
import LayoutContainer from '../components/LayoutContainer.vue';

useHead({
  bodyAttrs: {
    class: 'bg-home bg-cover bg-center',
  },
});
</script>

<template>
  <section class="pt-6 pb-12 md:pt-[6.625rem] md:pb-[5.625rem] 2xl:pt-64">
    <LayoutContainer>
      <div class="mx-auto max-w-[49ch] 2xl:max-w-none 2xl:flex 2xl:items-end 2xl:justify-between">
        <div class="2xl:basis-[28rem]">
          <h1 class="uppercase">
            <div class="font-sans-condensed tracking-[0.16875em] md:text-xl 2xl:text-3xl">So, you want to travel to</div>
            <div class="font-serif text-7xl md:text-9xl 2xl:leading-[1.125] text-white mt-4 md:mt-6 2xl:-ml-3">space</div>
          </h1>
          <p class="mt-4 md:mt-6 text-sm md:text-base 2xl:text-lg">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
        </div>
        <div>
          <NuxtLink to="/destination" class="mt-20 md:mt-40 2xl:mt-0 inline-flex justify-center items-center bg-white font-serif text-xl md:text-4xl text-blue-900 uppercase tracking-wider rounded-full w-[9.375rem] md:w-[15.125rem] h-[9.375rem] md:h-[15.125rem] 2xl:w-[17.125rem] 2xl:h-[17.125rem] hover:ring-[3rem] md:hover:ring-[4.875rem] 2xl:hover:ring-[5.5rem] hover:ring-white/10">Explore</NuxtLink>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>
