<template>
  <div id="popup">
    <p>{{ item.name }}</p>
    <p>{{ item.time_start }}</p>
    <p>by {{ item.initiator }}</p>
    <p>location: <a href="item.stream_or_page_link">{{ item.stream_or_page_link }}</a></p>
    <p><br>{{ item.description }}</p>
    <p><br>donation link: {{ item.patreon_paypal_link }}</p>
    <img :src="item.image"/>
  </div>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue'

export default {
  name: 'Popup',
  props: ['item'],
  components: {
    Footer
  }
}
</script>

<style scoped>
#popup {
  width:100%;
  padding: 5px;
  height: 100vh;
  /* overflow-y: scroll; */
  position:absolute;
  background-color: white;
}

img {
  margin-top:5px;
  width:100%;
  height:auto;
}
</style>