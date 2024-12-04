<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <h1>Home</h1>
  <ul id="routerlink-list">
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/login">Login</RouterLink></li>
    <li><RouterLink to="/games">Games</RouterLink></li>
    <li><RouterLink to="/players">Players</RouterLink></li>
    <li><RouterLink to="/coaches">Coaches</RouterLink></li>
    <li><RouterLink to="/employees">Employees</RouterLink></li>
  </ul>
</template>

<style scoped>

</style>