<script setup>
import { queryContent } from '#imports';

const { body } = await queryContent('/crew').findOne();
const crew = body;
</script>

<template>
  <h1>02: Meet your crew</h1>

  <div v-for="(person, index) in crew" :key="index">
    <div>{{ person.role }}</div>
    <h2>{{ person.name }}</h2>
    <p>{{ person.bio }}</p>
  </div>
</template>
