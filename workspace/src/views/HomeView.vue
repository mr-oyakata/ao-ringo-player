<template>
  <article class="">
    <div class="flex justify-center">
      <div role="tablist" class="tabs tabs-box">
        <a
          role="tab"
          class="tab"
          :class="{ 'tab-active': !showEnglish }"
          @click="showEnglish = false"
          >日本語</a
        >
        <a role="tab" class="tab" :class="{ 'tab-active': showEnglish }" @click="showEnglish = true"
          >English</a
        >
      </div>
    </div>
    <div>
      <PrivacyPolicyEnglish v-if="showEnglish"></PrivacyPolicyEnglish>
      <PrivacyPolicyJapanese v-else></PrivacyPolicyJapanese>
    </div>
  </article>
</template>

<script lang="ts" setup>
import PrivacyPolicyEnglish from '@/components/PrivacyPolicyEnglish.vue'
import PrivacyPolicyJapanese from '@/components/PrivacyPolicyJapanese.vue'
import { ref } from 'vue'

const showEnglish = ref(!navigator.language.startsWith('ja'))
</script>
