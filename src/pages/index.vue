<script setup lang="ts">
import { mapping } from '~/mapping'

defineOptions({
  name: 'IndexPage',
})
const letters = ref('')

// function covertToUnicode(str: string) {
//   // 形式如 U+1D401，需要考虑超过4位16进制的情况
//   // 𝐁 会被识别为两个字符，所以需要使用 Array.from
//   const codePoints = Array.from(str).map(char => char.codePointAt(0))
//   const hex = codePoints.map(codePoint => codePoint?.toString(16).toUpperCase())
//   const paddedHex = hex.map(hex => hex?.padStart(4, '0'))
//   const unicode = paddedHex.map(hex => `U+${hex}`).join(' ')
//   return unicode
// }

function covertToStylizedLetters(str: string, map: { capital: number; small: number }) {
  return Array.from(str).map((char) => {
    const codePoint = char.codePointAt(0)
    if (codePoint) {
      if (codePoint >= 0x41 && codePoint <= 0x5A)
        return String.fromCodePoint(codePoint + map.capital)

      if (codePoint >= 0x61 && codePoint <= 0x7A)
        return String.fromCodePoint(codePoint + map.small)

      return char
    }
    return ''
  }).join('')
}
const { t } = useI18n()
</script>

<template>
  <div flex="~ col" items-center justify-start gap-1>
    <div v-if="!letters" class="title-font" pb-8 text-5xl font-bold>
      Stylized Letters
    </div>
    <TheInput
      v-model="letters"
      :placeholder="t('input.placeholder')"
      mb-8
    />
    <div v-if="letters" class="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4">
      <TheOutput
        v-for="map in mapping"
        :key="map.name"
        :title="map.name"
        :content="covertToStylizedLetters(letters, map)"
      />
    </div>
    <div v-if="letters" color-gray-500>
      tap block to copy
    </div>
  </div>
  <div flex="~ col" pt-8 op-10 hover:op-50>
    <div color-gray-500>
      References: <a
        color-blue-500
        href="https://www.compart.com/en/unicode/block/U+1D400" target="_blank"
      >https://www.compart.com/en/unicode/block/U+1D400</a>
    </div>
    <div color-gray-500>
      Copyright © 2023 <a color-blue-500 href="https://aidbodev.com" target="_blank">Aidbo Studio</a>. All rights reserved.
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');
  .title-font {
  font-family: 'Nunito', sans-serif;
  color: #5E6A78;
  }
</style>
