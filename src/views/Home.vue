<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <MediaGallery />
  </div>
</template>

<script>
// @ is an alias to /src
import MediaGallery from '@/components/MediaGallery.vue'

export default {
  name: 'Home',
  components: {
    MediaGallery
  }
}
</script>
