<script setup lang="ts">
import { mapping } from '~/mapping'

defineOptions({
  name: 'IndexPage',
})
const letters = ref('')

function covertToStylizedLetters(str: string, map: { capital: number; small: number }) {
  function plus(codePoint: number, offset: number) {
    // 有一些字符在 Unicode 中为了避免重复编码，需要转换成另一个字符
    // http://www.unicode.org/charts/PDF/U1D400.pdf
    const unicode = codePoint + offset
    const reserved: { original: number; target: number }[] = [
      {
        original: 0x1D455,
        target: 0x210E,
      },
      {
        original: 0x1D49D,
        target: 0x212C,
      },
      {
        original: 0x1D4A0,
        target: 0x2130,
      },
      {
        original: 0x1D4A1,
        target: 0x2131,
      },
      {
        original: 0x1D4A3,
        target: 0x210B,
      },
      {
        original: 0x1D4A4,
        target: 0x2110,
      },
      {
        original: 0x1D4A7,
        target: 0x2112,
      },
      {
        original: 0x1D4A8,
        target: 0x2133,
      },
      {
        original: 0x1D4AD,
        target: 0x211B,
      },
      {
        original: 0x1D4BA,
        target: 0x212F,
      },
      {
        original: 0x1D4BC,
        target: 0x210A,
      },
      {
        original: 0x1D4C4,
        target: 0x2134,
      },
      {
        original: 0x1D506,
        target: 0x212D,
      },
      {
        original: 0x1D50B,
        target: 0x210C,
      },
      {
        original: 0x1D50C,
        target: 0x2111,
      },
      {
        original: 0x1D515,
        target: 0x211C,
      },
      {
        original: 0x1D51D,
        target: 0x2128,
      },
      {
        original: 0x1D53A,
        target: 0x2102,
      },
      {
        original: 0x1D53F,
        target: 0x210D,
      },
      {
        original: 0x1D545,
        target: 0x2115,
      },
      {
        original: 0x1D547,
        target: 0x2119,
      },
      {
        original: 0x1D548,
        target: 0x211A,
      },
      {
        original: 0x1D549,
        target: 0x211D,
      },
      {
        original: 0x1D551,
        target: 0x2124,
      },
    ]
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
