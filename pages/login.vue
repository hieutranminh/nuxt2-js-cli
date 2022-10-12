<template>
  <main class="main">
    <section class="section-login">
      <input
        type="text"
        placeholder="email" />
      <input
        type="password"
        placeholder="password" />
      <div>
        <button>Login</button>
        <button>Login with Google</button>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  .section-login {
    width: 500px;
    margin: 50px auto;
    text-align: center;
    border: 1px solid #d1d1d1;
    padding: 30px;
  }
</style>
