<template>
  <article class="text-base-content py-10">
    <h1 class="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold">
      AO-ringo Player Privacy Policy
    </h1>
    <p class="mb-4 text-sm opacity-70">Last Updated: April 25, 2026</p>
    <p class="mb-6 leading-relaxed">
      This Privacy Policy (hereinafter referred to as "this Policy") sets forth the handling of user
      information by Mr.Oyakata (hereinafter referred to as "the Developer") in the iOS application
      "AO-ringo Player" (hereinafter referred to as "this App"). Please read this Policy carefully
      and agree to its contents before using this App.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">1. Introduction</h2>
    <p class="mb-4 leading-relaxed">
      This App specializes in providing a unique music experience of continuous playback of your
      Apple Music library on an album-by-album basis. The Developer respects your privacy and pays
      utmost attention to the protection of personal information. This Policy transparently explains
      what information this App acquires, how it uses it, and how it protects it.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      2. Information Acquired
    </h2>
    <p class="mb-4 leading-relaxed">
      This App does not collect your personal information (such as name, email address, physical
      address, or phone number). This App acquires and uses the following information on your device
      to provide its functions, but this information is never transmitted to servers managed by the
      Developer.
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.1. Your Apple Music Library Information</h3>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>
        <strong>Metadata</strong>: Information such as album, artist, playlist, song titles,
        artwork, and playback duration.
      </li>
      <li>
        <strong>Persistent IDs</strong>: Unique IDs to identify each item in your Apple Music
        library.
      </li>
      <li>
        <strong>Authorization Status</strong>: Whether access to the Apple Music library has been
        granted (used to display warnings when access is denied or restricted).
      </li>
    </ul>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.2. App Usage Information</h3>
    <p class="mb-2">
      The following information is saved <strong>only on your device</strong> (using UserDefaults
      and SwiftData):
    </p>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>
        <strong>Playback State</strong>: To resume playback when you restart the App, the playback
        queue (list of albums), the index of the currently playing album and song, the persistent
        ID, the playback position (in seconds), the offline mode state at the time of saving, and
        details about the playback source (e.g., artist, playlist, or genre name and internal
        identifier) are saved.
      </li>
      <li>
        <strong>Favorite Information</strong>: Information about artists, playlists, and genres you
        have registered as "favorites" (name, registration date, play count) is saved. The play
        count is used to optimize the sorting order of the favorites list.
      </li>
      <li>
        <strong>Appearance and Display Settings</strong>: Appearance mode (theme color) is saved.
      </li>
      <li>
        <strong>Configuration Settings</strong>: Shuffle, repeat, offline mode, sorting order on
        each screen, permission to use mobile data, automatic recovery settings upon network
        reconnection, and background refresh settings are saved.
      </li>
    </ul>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.3. Cached Data</h3>
    <p class="bg-base-200 mb-4 rounded-lg p-3 text-sm leading-relaxed">
      To speed up App operation and provide a comfortable user experience, a cache of the library
      information acquired in 2.1 is created on your device using Apple's <code>SwiftData</code>
      technology.
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.4. Notifications</h3>
    <p class="mb-4 leading-relaxed">
      This App may request permission for notifications upon its first launch. This is used to send
      local notifications to inform you about changes in network status (e.g., automatic switching
      to or recovery from offline mode). All notifications are completed within your device, and no
      data is transmitted to external servers. Notification permissions can be changed at any time
      from the iOS "Settings" app. Even if permission is revoked, the main functions of this App
      will remain available.
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.5. In-App Purchase Information</h3>
    <p class="mb-4 leading-relaxed">
      This App uses StoreKit 2 provided by Apple to offer in-app purchases (development support).
      Only a flag indicating whether you have purchased support is retained on your device. All
      payment information, such as credit card numbers and account details, is managed entirely by
      Apple, and the Developer does not have access to this information.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      3. Purpose of Information Use
    </h2>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>
        To provide and improve the core functions of this App (album continuous playback, queue
        management, etc.).
      </li>
      <li>To provide playback state restoration functionality.</li>
      <li>To provide favorite functionality.</li>
      <li>To optimize the App's display and operation according to user settings.</li>
      <li>
        To manage the status of development support (in-app purchases) and provide benefits (e.g.,
        appearance changes).
      </li>
    </ul>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      4. Information Sharing and Third-Party Provision
    </h2>
    <p class="mb-4 leading-relaxed">
      All information acquired under this Policy is stored on your device. The Developer will not
      provide or share your information with any third party, except as required by law or with your
      consent. This App uses Apple's services (MusicKit, StoreKit) to provide its functions. The
      handling of information associated with the use of these services is subject to Apple's
      privacy policy.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">5. Your Rights</h2>
    <p class="mb-4 leading-relaxed">
      You can disable this App's access permission to your Apple Music library at any time from the
      iOS "Settings" app. However, in that case, the main functions of this App will become
      unavailable. You can also voluntarily delete cached library data stored on your device from
      the App's settings screen. This may resolve display issues and other problems.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">6. Security</h2>
    <p class="mb-4 leading-relaxed">
      The Developer implements reasonable technical and organizational security measures to protect
      your information. All information is stored on your device under your control, and efforts are
      made to prevent unauthorized access, loss, leakage, or alteration.
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      7. Changes to the Privacy Policy
    </h2>
    <p class="mb-4 leading-relaxed">
      The Developer may revise this Policy due to changes in laws and regulations or changes in the
      functions of this App. Significant changes will be announced through in-app notifications or
      App Store update information. The latest version of this Policy can always be found on this
      page.
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
