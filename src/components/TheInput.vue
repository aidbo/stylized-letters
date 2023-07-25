<script setup lang="ts">
const { modelValue } = defineModels<{
  modelValue: string
}>()
</script>

<template>
  <input
    id="input"
    v-model="modelValue"
    type="text"
    p="x-4 y-2"
    text="center"
    bg="transparent"
    border="~ rounded gray-200"
    outline="none active:none"
  >
</template>
