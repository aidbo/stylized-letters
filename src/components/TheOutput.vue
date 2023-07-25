<script setup lang="ts">
const { content } = defineModels<{
  title: string
  content: string
}>()

// function covertToUnicode(str: string) {
//   // 形式如 U+1D401，需要考虑超过4位16进制的情况
//   // 𝐁 会被识别为两个字符，所以需要使用 Array.from
//   const codePoints = Array.from(str).map(char => char.codePointAt(0))
//   const hex = codePoints.map(codePoint => codePoint?.toString(16).toUpperCase())
//   const paddedHex = hex.map(hex => hex?.padStart(4, '0'))
//   const unicode = paddedHex.map(hex => `U+${hex}`).join(' ')
//   return unicode
// }

function copy() {
  navigator.clipboard.writeText(content.value)
}
</script>

<template>
  <div>
    <!--    <div text-sm> -->
    <!--      {{ title }} -->
    <!--    </div> -->
    <div flex="~ row" items-center justify-center gap-2>
      <div
        p="x-4 y-2"
        border="~ rounded gray-200"
        cursor-copy text-2xl hover:border-gray-400
        outline="none active:none"
        @click="copy()"
      >
        {{ content }}
      </div>
    </div>
  </div>
</template>
