<template>
  <div id="timetable">
    <div class="scheduleWrap" v-for="(item, key) in events.slice().reverse()" :item="item" :key="key">
      <div class="schedule" v-if="item.key < todayDateKey">
        <div class="date">{{todayDate === item.date ? 'Today' : tomorrowDate === item.date ? 'Tomorrow' : item.date  }}</div>
        <DataItem v-for="event in item.posts" :key="event.id" :event="event" :type="type"></DataItem>
      </div>
    </div>
    <router-view :event="currentItem" :type="type"></router-view>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue'
import DataItem from '@/components/DataItem.vue'
import moment from 'moment'

export default Vue.extend({
  name: 'Timetable',
  data() {
    return {
      type: 'archive',
      currentItem: {},
      todayDateKey: moment().format('YYYYMMDD'),
      todayDate: moment().format('DD-MM-YYYY'),
      tomorrowDate: moment().add(1, 'days').format('DD-MM-YYYY')
    }
  },
  components: {
    DataItem,
  },
  props: ['events', 'time'],
  mounted() {
    this.checkCurrentItem();
  },
  beforeUpdate() {
    this.checkCurrentItem();
  },
  methods: {
    checkCurrentItem() {
      let events = this.events;
      for (let index = 0; index < events.length; index++) {
        const element = events[index];
        for (let indexEvent = 0; indexEvent < element.posts.length; indexEvent++) {
          const event = element.posts[indexEvent];
          if(event.id === parseInt(this.$route.params.id)){
            this.currentItem = event;
          }
        }
      }
    },
  }
});
</script>

<style scoped>
#timetable {
  width: 100%;
  /* background-image: url("/aex-02.png");;
  background-attachment: fixed;
  background-position: center; /* Center the image */
}

.date {
  font-family: 'Kosugi', sans-serif;
  position:relative;
  line-height: 30px;
  height:35px;
  width:100%;
  padding:5px;
}

.scheduleWrap{
  width: 100%;
  position: relative;
}

.schedule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
