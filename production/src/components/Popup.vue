<template>
  <div id="popup">
    <p>{{ event.name }}</p>
    <p>{{ event.time_start }} UTC</p>
    <p v-if="event.initiator">by {{ event.initiator }}</p>
    <p>location: <a target="_blank" href="event.streaming">{{ event.streaming }}</a></p>
    <div v-if="event.description"><br><div v-html="event.description"></div></div>
    <p v-if="event.donate"><br>donation link: <a target="_blank" href="event.donate">{{ event.donate }}</a></p>
    <img v-if="event.image" :src="event.image.url"/>
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
  position:fixed;
  overflow-wrap: normal;
  top:0;
  left:0;
  height:100%;
  width:100%;
  padding: 60px 5px 5px 5px;
  background-color: white;
  overflow-x:hidden;
}

img {
  margin-top:5px;
  width:100%;
  height:auto;
}
</style>