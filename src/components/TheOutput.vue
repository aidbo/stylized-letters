<script setup lang="ts">
const { content } = defineModels<{
  title: string
  content: string
}>()

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
