<template>
  <main class="main">
    Sidebar
    <NuxtChild />
  </main>
</template>

<script>
  export default {
    middleware: 'auth',
  }
</script>

<style lang="scss" scoped></style>
