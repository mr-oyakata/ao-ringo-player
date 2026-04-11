<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar bg-base-100 shadow-sm">
    <RouterLink to="/" class="btn btn-ghost text-xl">AO-ringo Player</RouterLink>
    <div class="navbar-center flex">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/">Privacy Policy</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </div>
  </header>
  <main class="container mx-auto p-6">
    <RouterView />
  </main>
</template>
