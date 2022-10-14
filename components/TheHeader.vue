<template>
  <header class="header">
    <!--TOP-->
    <div class="header-top">
      <!--Logo-->
      <div class="logo">
        <NuxtLink to="/">LOGO</NuxtLink>
      </div>

      <!--Search-->
      <div class="search">
        Search |
        <span
          v-if="loggedInUser && loggedInUser.nickname"
          v-text="loggedInUser.nickname" />
      </div>

      <!--Button login & register-->
      <div
        v-if="!isAuthenticated"
        class="btn-group">
        <NuxtLink
          v-slot="{ navigate }"
          to="/login"
          custom>
          <button @click="navigate">Login</button>
        </NuxtLink>

        <NuxtLink
          v-slot="{ navigate }"
          to="/register"
          custom>
          <button @click="navigate">Register</button>
        </NuxtLink>
      </div>

      <div
        v-else
        class="btn-group">
        <button @click.prevent="userLogout">Logout</button>

        <NuxtLink
          v-slot="{ navigate }"
          to="/profile"
          custom>
          <a
            href="#"
            @click="navigate">
            Profile
          </a>
        </NuxtLink>
      </div>
    </div>

    <!--NAV-->
    <TheNavbar />
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },

    methods: {
      async userLogout() {
        await this.$auth.logout()
      },
    },
  }
</script>

<style lang="scss" scoped>
  .header {
    border: 1px solid #333333;
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #d1d1d1;
    }
  }
</style>
