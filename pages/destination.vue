<script setup>
import { queryContent } from '#imports';

const { body } = await queryContent('/destinations').findOne();
const destinations = body;
</script>

<template>
  <h1>01: Pick your destination</h1>

  <div v-for="(destination, index) in destinations" :key="index">
    <h2>{{ destination.name }}</h2>
    <p>{{ destination.description }}</p>

    <h3>Avg. distance</h3>
    <div>{{ destination.distance }}</div>

    <h3>Est. travel time</h3>
    <div>{{ destination.travel }}</div>
  </div>
</template>
