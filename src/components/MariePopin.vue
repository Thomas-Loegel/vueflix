<template>
  <div class="popin">
    <input type="button" class="close" value="x" title="Fermer" v-on:click="$emit('close')">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'MariePopin',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
