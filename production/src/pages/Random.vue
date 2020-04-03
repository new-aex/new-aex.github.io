<template>
  <div>
    <div class="scheduleWrap" v-for="(event, key) in events" :key="key"></div>
    <DataItem v-if="randomEvent" :event="randomEvent" :time="time"></DataItem>
    <p>from the same initiator:</p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue'
import DataItem from '@/components/DataItem.vue'

export default Vue.extend({
  name: 'Random',
  props: [ 'events'],
  components: {
    DataItem,
  },
  
  data() {
    return {
      randomEvent: false,
    }
  },
  mounted() {
    this.getRandomEvent();
  },
  beforeUpdate() {
    this.getRandomEvent();
  },
  methods: {
    getRandomEvent() {
      if(!this.events.length) return false;

      let randomData = this.events[Math.floor(Math.random()*this.events.length)];
      let randomEvent = randomData.posts[Math.floor(Math.random()*randomData.posts.length)];
      this.randomEvent = randomEvent;
    },
  }
});
</script>
