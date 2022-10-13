<template>
  <main class="main">
    <section class="section-login">
      <span
        v-if="error"
        class="error">
        {{ error }}
      </span>

      <form @submit.prevent="userLogin">
        <input
          v-model="form.email"
          type="text"
          placeholder="email" />
        <input
          v-model="form.password"
          type="password"
          placeholder="password" />
        <div>
          <button type="submit">Login</button>
          <button>Login with Google</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
  export default {
    middleware: 'guest',

    data() {
      return {
        form: {
          email: 'user@gmail.com',
          password: '99999999',
          is_remember: 0,
        },
        error: null,
      }
    },

    methods: {
      async userLogin() {
        try {
          await this.$auth.loginWith('local', { data: this.form })
        } catch (e) {
          this.error = e.response.data.message
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .section-login {
    width: 500px;
    margin: 50px auto;
    text-align: center;
    border: 1px solid #d1d1d1;
    padding: 30px;
    .error {
      color: red;
    }
  }
</style>
