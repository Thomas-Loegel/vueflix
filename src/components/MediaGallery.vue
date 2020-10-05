<template>
  <div class="mediagallery">

    <p class="search">
      <label for="searchtxt">Recherche</label>
      <input id="searchtxt" type="search" v-model="titleSearch" ref="search">
    </p>

    <MediaList type="serie" :titleSearch="titleSearch"/>
    <MediaList type="movie" :titleSearch="titleSearch"/>
  </div>
</template>

<script>
import MediaList from '@/components/MediaList.vue'

export default {
  name: 'MediaGallery',
  components: {
    MediaList
  },
  data () {
    return {
      titleSearch: ''
    }
  },
  mounted () {
    this.$refs.search.focus()
  }
}
</script>

<style scoped lang="scss">

</style>
