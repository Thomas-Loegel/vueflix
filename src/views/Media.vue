<template>
  <div class="serie" v-if="media.tube">
    <iframe :src="'https://www.youtube.com/embed/' + media.tube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'Media',
  computed: {
    media () {
      return this.$store.getters.medias.find((m) => {
        return m.id === Number(this.$route.params.id)
      })
    }
  }
}
</script>
