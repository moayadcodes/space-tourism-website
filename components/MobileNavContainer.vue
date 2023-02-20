<script setup lang="ts">
import { onMounted, onUnmounted, useRoute, watch } from '#imports';
import debounce from 'lodash.debounce';
import { defineEmits } from 'vue';

const emit = defineEmits<{
  (e: 'mobileNavClose'): void
}>();

// Event handlers

const closeButtonClick = () => {
  emit('mobileNavClose');
};

const windowResize = debounce(() => {
  if (window.innerWidth >= 768) {
    emit('mobileNavClose');
  }
}, 125);

// Watch for route change

const route = useRoute();

watch(route, () => {
  emit('mobileNavClose');
});

// Lifecycle hooks

onMounted(() => {
  document.body.classList.add('overflow-hidden');
  window.addEventListener('resize', windowResize);
});

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
  window.removeEventListener('resize', windowResize);
});
</script>

<template>
  <div class="fixed top-0 right-0 bottom-0 w-64 bg-white/[0.04] backdrop-blur-2xl">
    <div class="py-5 pl-5 pr-3 flex justify-end">
      <button type="button" class="flex justify-center items-center w-12 h-12" @click="closeButtonClick">
        <img src="~/assets/icons/icon-close.svg" alt="Close website navigation" />
      </button>
    </div>
    <slot />
  </div>
</template>
