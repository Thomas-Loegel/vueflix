<template>
  <div class="">
    <form class="login" v-on:submit.prevent="authenticate">
      <p><img src="logo.svg"></p>
      <h3>S'identifier</h3>
      <p>
        <label for="login">Identifiant</label>
        <input type="text" id="login" autocomplete="off" v-model="login">
      </p>
      <p>
        <label for="password">Mot de passe</label>
        <input type="password" id="password" autocomplete="off" v-model="password">
      </p>
      <!-- <p class="error">Veuillez entrer vos identifiants</p> -->
      <input type="submit" value="Valider">
    </form>
  </div>
</template>

<script>

export default {
  name: 'LoginForm',
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    authenticate () {
      this.$store.dispatch('auth', { login: this.login, password: this.password })
      this.$parent.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
