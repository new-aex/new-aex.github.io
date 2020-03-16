<template>
  <div id="app">
    <Menu>
    </Menu>
    <router-view :selectedData="selected_data" :todayDate="today_date"/>
    <!-- <Footer>
    </Footer> -->
  </div>
</template>

<script lang="ts">
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
      api_data: {},
      selected_data: {},
      today_date: ""
    }
  },
  created() {
    this.getDate();
  },
  mounted() {
    var self = this;
    axios
    // .get('https://ckan.dataplatform.nl/dataset/c7e9cb41-3b2d-47a4-9f1e-60ee7708f561/resource/ed7d5778-c890-4f4e-bfc3-048923761ace/download/vleermuisroutes.json')
    .get('events.json')
    .then(response => {
      self.api_data = response.data.events
      self.selectData(self.api_data);
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    selectData(input: any) {
      this.selected_data = input.filter(function(data_object: any) {return typeof data_object == "object";})
    },
    getDate() {
      this.today_date = moment().format('L');
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
  font-family: Helvetica, Arial, sans-serif;
  font-size:18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  /* color: #2c3e50; */
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */

a:link, a:visited {
  color: black;
  /* font-family: serif; */
}

</style>
