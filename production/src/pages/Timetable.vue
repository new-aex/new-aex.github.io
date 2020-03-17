<template>
  <div id="home">
      <div class="schedule" v-for="(item, key) in eventsPerDate" :item="item" :key="key">
        <div class="date">{{key}}</div>
        <DataItem v-for="event in item" :key="event.id" :event="event" @data-click="showDetails(item)"></DataItem>
      </div>
      <!-- <Popup v-show="popup" :item="this.currentItem"></Popup> -->
    <Footer v-show="popup" @back-click="hideDetails()">
    </Footer>
  </div>
</template>

<script lang="javascript">
// @ is an alias to /src
import Vue from 'vue'
import DataItem from '@/components/DataItem.vue'
import Popup from '@/components/Popup.vue'
import Footer from '@/components/Footer.vue'
// import Dictionary from 'vue-router/types/router'


export default Vue.extend({
  name: 'Timetable',
  data() {
    return {
      currentItem: {},
      popup: false,
    }
  },
  components: {
    DataItem, Popup, Footer
  },
  props: ['eventsPerDate'],
  methods: {
    showDetails(item) {
      this.currentItem = item
      this.popup = true
    },
    hideDetails() {
      this.currentItem = {}
      this.popup = false
    },
  }
});
</script>

<style scoped>
#home {
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
