<script setup lang="ts">
</script>

<template>
  <main
    h-screen flex flex-col items-center justify-center
    text="center gray-700"
    style="overflow-y: scroll;"
  >
    <RouterView />
  </main>
</template>

<style scoped>
main {
   background: radial-gradient(circle, #fff 0%,#96dbf8 100%);
}
</style>
