<script setup>
import { queryContent } from '#imports';

const { body } = await queryContent('/technology').findOne();
const technologyList = body;
</script>

<template>
  <h1>03: Space launch 101</h1>

  <div v-for="(technology, index) in technologyList" :key="index">
    <div>The terminology...</div>
    <h2>{{ technology.name }}</h2>
    <p>{{ technology.description }}</p>
  </div>
</template>
