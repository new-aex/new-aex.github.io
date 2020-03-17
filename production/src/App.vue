<template>
  <div id="app">
    <Menu></Menu>
    <router-view :eventsPerDate="events_per_date"/>
  </div>
</template>

<script lang="javascript">
import Vue from 'vue'
import Menu from '@/components/Menu.vue'
import axios from 'axios'
import moment from 'moment'

export default Vue.extend({
  name: 'App',
  components: {
    Menu
  },
  data() {
    return {
      api_data: [],
      events_per_date: {}
    }
  },
  mounted() {
    var self = this;
    axios
    .get('https://dev.oort.network/new-aex/wp-json/api/events')
    .then(response => {
      self.api_data = response.data;
      self.sortEvents(self.api_data, self.events_per_date);
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    sortEvents(data, perDate) {
      var self = this;
      let today_date = moment();
      // for all events in API
      for (let i = 0; i < data.length; i++) {
        // create two comparable moment objects
        let event_date = moment(data[i].dates_start, "DD-MM-YYYY");
        var formatted_event_date = event_date.format('DD-MM-YYYY');
        var formatted_key = String(formatted_event_date);

        // if event is today or after today
        if (event_date.isSameOrAfter(today_date)) {
          // if the date is not yet in the date array
          if (!perDate.hasOwnProperty(formatted_event_date)) {
            // make a new object for new date
            perDate[formatted_key] = [];
            // window.console.log("new date");
          } else {
            // date is already in date array, don't make a new entry
            // window.console.log("existing date");
          }
          // in all cases, add event to corresponding day array
          perDate[formatted_key].push(data[i]);
        }
      }
      self.$set(self.events_per_date, perDate);    
    }
  }
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  /* font-family: 'Amiri', serif; */
  width:100%;
  height:100%;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  background-color: lightgrey;
  /* color: #2c3e50; */
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */

a:link,
a:visited {
  color: black;
  /* font-family: serif; */
}
</style>
