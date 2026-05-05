<template>
  <header class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost text-xl">AO-ringo Player</NuxtLink>
    </div>
    <div class="hidden flex-none md:block">
      <ul class="menu menu-horizontal px-1">
        <li v-for="menu in menus" :key="menu.to">
          <NuxtLink :to="menu.to">{{ menu.text }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="block flex-none md:hidden">
      <details class="dropdown dropdown-hover dropdown-end">
        <summary class="btn btn-square btn-ghost m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </summary>
        <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-max p-2 shadow-sm">
          <li v-for="menu in menus" :key="menu.to">
            <NuxtLink :to="menu.to">{{ menu.text }}</NuxtLink>
          </li>
        </ul>
      </details>
    </div>
  </header>
</template>

<script setup lang="ts">
const menus = [
  {
    to: '/',
    text: 'Privacy Policy',
  },
  {
    to: '/contact',
    text: 'Contact',
  },
]
</script>
