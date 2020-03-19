<template>
  <RouterLink :to="type == 'archive' ? `/archive/event/${event.id}` : `/event/${event.id}` " :class="{ playing: event.dateUnix_start <= time && event.dateUnix_end > time, ended: event.dateUnix_start < time && event.dateUnix_end < time }" class="data_item">
    <p class="bold">{{ event.name }}</p>
    {{type}}

    <p class="mono">{{ event.time_start }} CET</p>
    <p v-if="event.initiator">by {{ event.initiator }}</p>
    <div id="container" v-if="event.image">
      <img :src="event.image.url"/>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'

export default Vue.extend({
  name: 'DataItem',
  props: [ 'event', 'time', 'type' ],
});
</script>

<style scoped>
p {
  flex: none;
}

.mono {
  font-family: 'Kosugi', sans-serif;
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
  border: 2px solid #eeeeee;
  padding:5px;
  background-color:white;
  border-radius:12px;
  cursor: pointer;
  text-decoration: none;
}

.playing{
  border: 1px solid red; 
  background-color:#eeeeee;
}

.playing p { 
  color: red;
}


.ended{
  color:#A0A0A0;
}

@media only screen and (max-width: 600px) {
  .data_item {
      width:50%;
      height:49.9vw;
      font-size:16px;
      hyphens: auto;
  }
}

</style>