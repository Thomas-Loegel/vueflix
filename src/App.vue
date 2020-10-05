<template>
  <div id="app">
    <div id="nav">
      <img src="logo.svg" class="logo" alt="Vueflix">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div id="profile">
        <span class="notifications"><span>{{ $store.getters.user.notification }}</span></span>

        <template v-if="!$store.getters.user.token">
          <a href="#" class="register" >S'inscrire</a>
          <a href="#" class="auth" v-on:click="showLogin = true">Connexion</a>
        </template>
      </div>
    </div>

    <router-view/>

    <p id="footer">© Vueflix {{new Date().getFullYear()}} - Mentions légales - À Propos</p>

    <MariePopin v-show="showLogin" v-on:close="showLogin = false">
      <LoginForm />
    </MariePopin>
  </div>
</template>

<script>
import MariePopin from '@/components/MariePopin.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    MariePopin,
    LoginForm
  },
  data () {
    return {
      showLogin: true
    }
  },
  mounted () {

  }
}

</script>

<style lang="scss">
  @import 'assets/styles.scss';
</style>
