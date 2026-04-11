<template>
  <article class="">
    <!-- 通信中のオーバーレイ -->
    <div
      v-if="isSubmitting"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
    >
      <span class="loading loading-spinner loading-lg text-primary"></span>
    </div>

    <!-- 送信完了アラートのオーバーレイ -->
    <div
      v-if="showSuccess"
      role="alert"
      class="alert alert-success fixed top-4 left-1/2 z-60 w-[90%] -translate-x-1/2 shadow-lg md:max-w-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>お問い合わせありがとうございます。送信が完了しました。</span>
    </div>

    <!-- 送信失敗アラートのオーバーレイ -->
    <div
      v-if="showError"
      role="alert"
      class="alert alert-error fixed top-4 left-1/2 z-60 w-[90%] -translate-x-1/2 shadow-lg md:max-w-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>送信に失敗しました。時間をおいて再度お試しください。</span>
    </div>

    <!-- お問い合わせフォーム -->
    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">お問い合わせ</h2>
    <form
      :key="formKey"
      @submit.prevent="submitForm"
      @reset.prevent="resetForm"
      class="fieldset bg-base-200 rounded-box p-4"
    >
      <fieldset class="fieldset">
        <label class="label">お名前</label>
        <input
          v-model="formData.name"
          type="text"
          class="input validator w-full"
          required
          placeholder="お名前"
          maxlength="30"
        />
        <div class="validator-hint">30文字以下で入力してください</div>
      </fieldset>

      <label class="fieldset">
        <span class="label">メールアドレス</span>
        <input
          v-model="formData.email"
          class="input validator w-full"
          type="email"
          required
          placeholder="mail@example.com"
        />
        <div class="validator-hint">メールアドレスを入力してください</div>
      </label>

      <label class="fieldset">
        <span class="label">お問い合わせ内容</span>
        <textarea
          v-model="formData.message"
          class="textarea validator w-full"
          rows="4"
          required
          placeholder="お問い合わせ内容"
        ></textarea>
        <div class="validator-hint">お問い合わせ内容を入力してください</div>
      </label>

      <div class="flex gap-2">
        <button class="btn btn-neutral" type="submit" :disabled="isSubmitting">
          <span v-if="isSubmitting" class="loading loading-spinner"></span>
          送信
        </button>
        <button class="btn btn-ghost" type="reset" :disabled="isSubmitting">リセット</button>
      </div>
    </form>
  </article>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue'

const initialFormData = {
  name: '',
  email: '',
  message: '',
}

const formData = ref({ ...initialFormData })
const formKey = ref(0)

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  const API_URL = import.meta.env.VITE_API_URL

  const params = new URLSearchParams()
  params.append('name', formData.value.name)
  params.append('email', formData.value.email)
  params.append('message', formData.value.message)

  try {
    const response = await axios.post(API_URL, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    if (response.data.status === 'success') {
      resetForm()
      // アラートを表示して5秒後に消す
      showSuccess.value = true
      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
    }
  } catch (error) {
    // アラートを表示して5秒後に消す
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  formData.value = { ...initialFormData }
  formKey.value++
}
</script>
