<script setup lang="ts">
</script>

<template>
  <main
    h-8 min-h-screen flex flex-col items-center justify-center
    text="center gray-700"
  >
    <RouterView />
  </main>
</template>

<style scoped>
main {
 background: radial-gradient(circle,#fff 0%,#96dbf8 100%);
  background-size: cover;
}
</style>
