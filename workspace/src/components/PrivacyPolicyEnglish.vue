<template>
  <article class="text-base-content py-10">
    <h1 class="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold">
      AO-ringo Player Privacy Policy
    </h1>
    <p class="mb-4 text-sm opacity-70">Last Updated: April 1, 2026</p>
    <p class="mb-6 leading-relaxed">
      This Privacy Policy (hereinafter referred to as "this Policy") sets forth the handling of user
      information in the iOS application "AO-ringo Player" (hereinafter referred to as "this App")
      provided by [Mr.Oyakata] (hereinafter referred to as "the Developer"). Please read this Policy
      carefully and agree to its terms before using this App.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">1. Introduction</h2>
    <p class="mb-4 leading-relaxed">
      This App specializes in providing a unique music experience through the continuous playback of
      albums from your Apple Music library. The Developer respects your privacy and pays the utmost
      attention to protecting your personal information. This Policy explains what information this
      App acquires, how it is used, and how it is protected.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      2. Information Acquired
    </h2>
    <p class="mb-4 leading-relaxed">
      This App does not collect personal information (such as name, email address, address, or phone
      number). To provide the App's features, the following information is acquired and used on your
      device, but this information is never transmitted to servers managed by the Developer.
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.1. Apple Music Library Information</h3>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>
        <strong>Metadata</strong>: Information such as album, artist, playlist, song titles,
        artwork, and playback duration.
      </li>
      <li>
        <strong>Persistent IDs</strong>: Unique identifiers for each item within the Apple Music
        library.
      </li>
      <li>
        <strong>Authorization Status</strong>: Whether access to the Apple Music library is
        permitted (used to display warnings if access is denied or restricted).
      </li>
    </ul>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.2. App Usage Information</h3>
    <p class="mb-2">
      The following information is saved <strong>only on your device</strong> (using UserDefaults
      and SwiftData):
    </p>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>
        <strong>Playback State</strong>: To resume playback, information such as the playback queue,
        index, persistent IDs, playback position, and the source of playback is saved.
      </li>
      <li>
        <strong>Favorite Information</strong>: Information regarding artists and playlists you have
        registered as favorites (name, date added, play counts) is saved.
      </li>
      <li>
        <strong>Settings Information</strong>: Settings such as appearance (theme), shuffle/repeat,
        sort order, communication settings, and background refresh are saved.
      </li>
    </ul>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.3. Cached Data</h3>
    <p class="bg-base-200 mb-4 rounded-lg p-3 text-sm leading-relaxed">
      To speed up the application and provide a comfortable user experience, a cache of library
      information is created on your device using <code>SwiftData</code> technology.
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.4. Notifications</h3>
    <p class="mb-4 leading-relaxed">
      Used for local notifications to inform you of network status changes. No data is transmitted
      externally.
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.5. In-App Purchase Information</h3>
    <p class="mb-4 leading-relaxed">
      This App uses StoreKit 2 provided by Apple. Only a flag indicating the purchase status is kept
      on the device; all payment information is managed by Apple, and the Developer has no access to
      it.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">3. Purpose of Use</h2>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>
        To provide and improve the core features of the App (album continuous playback, queue
        management, etc.).
      </li>
      <li>To provide playback state restoration and favorites functionality.</li>
      <li>To optimize the display and behavior of the App according to user settings.</li>
      <li>To manage development support (In-App Purchase) status and provide related perks.</li>
    </ul>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      4. Information Sharing
    </h2>
    <p class="mb-4 leading-relaxed">
      All information is stored locally on your device. Except as required by law or with your
      consent, no information is shared with or provided to third parties. Handling of information
      related to the use of Apple's services is governed by Apple's privacy policy.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">5. Your Rights</h2>
    <p class="mb-4 leading-relaxed">
      You can change your library access permissions at any time through the iOS "Settings" app. You
      can also delete cached data from the App's settings.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">6. Security</h2>
    <p class="mb-4 leading-relaxed">
      The Developer takes reasonable security measures to protect your information. All information
      is stored on your device under your control, and the Developer strives to prevent unauthorized
      access or leakage.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      7. Changes to the Policy
    </h2>
    <p class="mb-4 leading-relaxed">
      This Policy may be revised due to legal changes or functional changes to the App. If
      significant changes are made, we will notify you through in-app notifications or other means.
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
