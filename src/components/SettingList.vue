<template>
  <div
    class="w-[240px] border h-[540px] bg-white shadow-lg rounded-md p-6 dark:bg-[#1D232A] space-y-3"
  >
    <h1 class="text-xl text-center">{{ $t('settings.title') }}</h1>
    <div class="flex justify-between h-9 items-center">
      <label>{{ $t('settings.theme') }}</label>
      <ChangTheme />
    </div>
    <div class="flex justify-between h-9 items-center">
      <label>{{ $t('settings.language') }}</label>
      <select v-model="currentLocale" @change="updateBodyClass" class="border rounded-md p-1">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale.toUpperCase() }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import ChangTheme from './buttons/ChangTheme.vue';

const { locale } = useI18n()
const currentLocale = ref(localStorage.getItem('locale') || locale.value)

const updateBodyClass = () => {
  document.body.className = currentLocale.value
  localStorage.setItem('locale', currentLocale.value)
}

onMounted(() => {
  updateBodyClass()
})

watch(currentLocale, (newLocale) => {
  locale.value = newLocale
  updateBodyClass()
})
</script>