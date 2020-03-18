<template>
  <div id="timetable">
      <div class="schedule" v-for="(item, key) in events" :item="item" :key="key">
        <div class="date">{{todayDate === item.date ? 'Today' : tomorrowDate === item.date ? 'Tomorrow' : item.date  }}</div>
        <DataItem v-for="event in item.posts" :key="event.id" :event="event" @data-click="showDetails(event)"></DataItem>
      </div>
      <Popup v-show="popup" :event="this.currentItem"></Popup>
    <Footer v-show="popup" @back-click="hideDetails()">
    </Footer>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue'
import DataItem from '@/components/DataItem.vue'
import Popup from '@/components/Popup.vue'
import Footer from '@/components/Footer.vue'
import moment from 'moment'

export default Vue.extend({
  name: 'Timetable',
  data() {
    return {
      currentItem: {},
      popup: false,
      todayDate: moment().format('DD-MM-YYYY'),
      tomorrowDate: moment().add(1, 'days').format('DD-MM-YYYY')
    }
  },
  components: {
    DataItem, Popup, Footer
  },
  props: ['events'],
  methods: {
    showDetails(event : Object) {
      this.currentItem = event;
      this.popup = true;
    },
    hideDetails() {
      this.currentItem = {}
      this.popup = false
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

.schedule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
