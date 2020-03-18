<template>
  <div class="data_item" @click="$emit('data-click')">
    <p>{{ event.name }}</p>
    <p>{{ event.time_start }} CET</p>
    <p v-if="event.initiator">by {{ event.initiator }}</p>
    <div id="container" v-if="event.image">
      <img :src="event.image.url"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DataItem',
  props: [ 'event' ],
});
</script>

<style scoped>
p {
  flex: none;
}

#container {
  position:relative;
  flex-grow: 1;
  width:100%;
  height:20%;
  bottom:0;
}

#container img {
  width:100%;
  height:100%;
  object-fit: cover;
  object-position: center center;
}

.data_item {
  box-sizing: border-box;
  display: flex; 
  flex-direction: column;
  /* position:relative; */
  /* display:flex; */
  /* flex-grow: 1; */
  width:25%;
  height:24.9vw;
  border: 1px solid black;
  padding:5px;
  background-color:white;
  border-radius:12px;
}

.data_item:hover {
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .data_item {
      width:50%;
      height:49.9vw;
      font-size:16px;
  }
}

</style>