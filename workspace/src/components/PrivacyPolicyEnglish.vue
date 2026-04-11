<template>
  <article class="text-base-content py-10">
    <h1 class="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold">
      AO-ringo Player Privacy Policy
    </h1>
    <p class="mb-4 text-sm opacity-70">Last Updated: April 1, 2026</p>
    <p class="mb-6 leading-relaxed">
      This Privacy Policy sets forth the handling of user information in the iOS application
      "AO-ringo Player" provided by the Developer.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">1. Introduction</h2>
    <p class="mb-4 leading-relaxed">
      This App specializes in continuous playback of your Apple Music library. The Developer
      respects your privacy and pays utmost attention to information protection.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      2. Information Acquired
    </h2>
    <p class="mb-4 leading-relaxed">
      This App does not collect personal information. Data is used only on your device and never
      transmitted to external servers.
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.1. Apple Music Library Information</h3>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li><strong>Metadata</strong>: Album, artist, song titles, artwork, etc.</li>
      <li><strong>Persistent IDs</strong>: Unique identifiers for library items.</li>
      <li><strong>Subscription Status</strong>: To determine playback eligibility.</li>
    </ul>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.2. App Usage Information</h3>
    <p class="mb-2">The following is saved <strong>only on your device</strong>:</p>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>Playback State (queue, index, position, etc.)</li>
      <li>Favorite Information (artists, playlists, play counts)</li>
      <li>Appearance and Display Settings (theme, sort order, etc.)</li>
    </ul>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.3. Cached Data</h3>
    <p class="bg-base-200 mb-4 rounded-lg p-3 text-sm leading-relaxed">
      Caches library info locally using <code>SwiftData</code> for performance.
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.4. Notifications</h3>
    <p class="mb-4 leading-relaxed">Used for local notifications about network status changes.</p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.5. In-App Purchase Information</h3>
    <p class="mb-4 leading-relaxed">
      Uses StoreKit 2. Payment info is managed by Apple; the Developer has no access.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">3. Purpose of Use</h2>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>Core functionality and improvements</li>
      <li>Playback state restoration</li>
      <li>Favorite functionality</li>
      <li>UI optimization</li>
    </ul>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      4. Information Sharing
    </h2>
    <p class="mb-4 leading-relaxed">
      Stored locally. No third-party sharing except as required by law.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">5. Your Rights</h2>
    <p class="mb-4 leading-relaxed">
      You can manage library access in iOS Settings and delete cached data in the App settings.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">6. Security</h2>
    <p class="mb-4 leading-relaxed">
      Information is stored on your device under your control with reasonable security measures.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      7. Changes to the Policy
    </h2>
    <p class="mb-4 leading-relaxed">
      May be revised due to legal or functional changes. The latest version is always available
      here.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">8. Contact Us</h2>
    <p class="mb-4">
      <RouterLink
        to="/contact"
        class="link link-primary font-medium text-emerald-500 hover:text-emerald-600"
        >https://mr-oyakata.github.io/ao-ringo-player/contact</RouterLink
      >
    </p>
  </article>
</template>
