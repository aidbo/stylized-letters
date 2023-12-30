<script setup lang="ts">
import { mapping } from '~/composables/mapping'
import { reserved } from '~/composables/reserved'

defineOptions({
  name: 'IndexPage',
})
const letters = ref('')

function covertToStylizedLetters(str: string, map: { capital: number, small: number }) {
  function plus(codePoint: number, offset: number) {
    const unicode = codePoint + offset
    const reservedItem = reserved.find(item => item.original === unicode)
    if (reservedItem)
      return String.fromCodePoint(reservedItem.target)

    return String.fromCodePoint(unicode)
  }

  return Array.from(str).map((char) => {
    const codePoint = char.codePointAt(0)
    if (codePoint) {
      if (codePoint >= 0x41 && codePoint <= 0x5A)
        return plus(codePoint, map.capital)

      if (codePoint >= 0x61 && codePoint <= 0x7A)
        return plus(codePoint, map.small)

      return char
    }
    return ''
  }).join('')
}
</script>

<template>
  <div flex="~ col" justify-start gap-1>
    <div v-if="!letters" class="title-font" pb-8 text-5xl font-bold>
      Stylized Letters
    </div>
    <div sticky top-2>
      <TheInput
        v-model="letters"
        placeholder="Please input letters"
      />
    </div>
    <div v-if="letters" class="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
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
      >unicode/block/U+1D400</a>
    </div>
    <div color-gray-500>
      Copyright © 2023 <a color-blue-500 href="https://aidbodev.com" target="_blank">Aidbo Studio</a>. All rights
      reserved.
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
  color: #5e6a78;
}
</style>
