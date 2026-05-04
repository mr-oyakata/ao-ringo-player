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
      <PrivacyPolicyEnglish v-if="showEnglish" />
      <PrivacyPolicyJapanese v-else />
    </div>
  </article>
</template>

<script lang="ts" setup>
const showEnglish = ref(false)
onMounted(() => {
  showEnglish.value = !navigator.language.startsWith('ja')
})
</script>
