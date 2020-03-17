<template>
  <div id="popup">
    <p>{{ event.name }}</p>
    <p>{{ event.time_start }} UTC</p>
    <p>by {{ event.initiator }}</p>
    <p>location: <a href="event.streaming">{{ event.streaming }}</a></p>
    <p><br>{{ event.description }}</p>
    <p><br>donation link: <a href="event.donate">{{ event.donate }}</a></p>
    <img :src="event.image.url"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  name: 'Popup',
  props: ['item', 'event'],
  components: {
    Footer
  }
});
</script>

<style scoped>
#popup {
  position:absolute;
  top:0;
  height:100%;
  width:100%;
  padding: 60px 5px 5px 5px;
  background-color: white;
}

img {
  margin-top:5px;
  width:100%;
  height:auto;
}
</style>