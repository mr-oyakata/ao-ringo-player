<template>
  <header class="navbar bg-base-100 shadow-sm">
    <NuxtLink to="/" class="btn btn-ghost text-xl">AO-ringo Player</NuxtLink>
    <div class="navbar-center flex">
      <ul class="menu menu-horizontal px-1">
        <li><NuxtLink to="/">Privacy Policy</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </div>
  </header>
  <main class="container mx-auto p-6">
    <slot />
  </main>
</template>
