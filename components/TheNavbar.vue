<template>
  <nav class="header-nav">
    <ul>
      <li class="active">
        <NuxtLink
          v-slot="{ navigate }"
          to="/"
          custom>
          <a
            href="#"
            @click="navigate">
            Home
          </a>
        </NuxtLink>
      </li>
      <li>
        <a href="#">Category</a>
      </li>
      <li>
        <a href="#">Receipt</a>
      </li>
      <li>
        <a href="#">Feature</a>
      </li>
      <li>
        <a href="#">Refer</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .header-nav {
    ul {
      text-align: center;
      li {
        list-style: none;
        display: inline-block;
        padding: 5px 15px;
      }
      li.active {
        a {
          color: #333333;
        }
      }
    }
  }
</style>
