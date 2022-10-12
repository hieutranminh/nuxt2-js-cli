<template>
  <header class="header">
    <!--TOP-->
    <div class="header-top">
      <!--Logo-->
      <div class="logo">
        <NuxtLink to="/">LOGO</NuxtLink>
      </div>

      <!--Search-->
      <div class="search">Search</div>

      <!--Button login & register-->
      <div class="btn-group">
        <NuxtLink
          to="/login"
          tag="button">
          Login
        </NuxtLink>

        <NuxtLink
          to="/register"
          tag="button">
          Register
        </NuxtLink>
      </div>
    </div>

    <!--NAV-->
    <nav class="header-nav">
      <ul>
        <li class="active">
          <a href="#">Home</a>
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
  </header>
</template>

<style lang="scss" scoped>
  .header {
    border: 1px solid #333333;
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #d1d1d1;
    }
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
  }
</style>
