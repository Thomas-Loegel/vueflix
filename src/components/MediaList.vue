<template>
  <div class="medialist">
    <h3>{{ type }}</h3>

    <template v-if="mediasFiltered.length > 0">
      <ul :style="'transform: translate(' + pos + 'px);'">
        <li v-for="media in mediasFiltered" :key="media.id">
          <!-- {{ media.title }} -->
          <router-link :to="'/media/' + media.id">
            <img :src=" 'medias/' + media.img " :alt="media.title">
          </router-link>
        </li>
      </ul>

      <input v-show="mediasFiltered.length > 4" type="button" class="next" title="Suivant" value="▶" v-on:click="next">
      <input v-show="mediasFiltered.length > 4" type="button" class="prev" title="Précédent" value="◀" v-on:click="prev">
    </template>

    <p v-else> Oops, c'est vide !</p>
  </div>
</template>

<script>
export default {
  name: 'MediaList',
  data () {
    return {
      pos: 0
    }
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    titleSearch: {
      type: String,
      default: ''
    }
  },
  methods: {
    next () {
      this.pos -= 300
    },
    prev () {
      this.pos += 300
    }
  },
  computed: {
    mediasFiltered () {
      return this.medias.filter((m) => {
        return m.type === this.type
      }).filter((m) => {
        if (this.titleSearch.length > 0) {
          return m.title.toLowerCase().includes(this.titleSearch.toLowerCase())
        }
        return true
      })
    },
    medias () {
      return this.$store.getters.medias
    }
  }
}
</script>

<style scoped lang="scss">

</style>
