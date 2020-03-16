<template>
  <div id="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ul>
      <!-- <li v-for="item in items" :key="item.message">
      {{ item.message }}
      </li> -->
      <!-- make a for loop per date? -->
      <div class="date">today</div>
      <DataItem v-for="item in selectedData" :key="item.name" :item="item" @data-click="showDetails(item)"></DataItem>
      <div class="date">{{ todayDate }}</div>
      <Popup v-show="popup" :item="this.currentItem"></Popup>
    </ul>
    <Footer v-show="popup" @back-click="hideDetails()">
    </Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import DataItem from '@/components/DataItem.vue'
import Popup from '@/components/Popup.vue'
import Footer from '@/components/Footer.vue'


export default Vue.extend({
  name: 'Home',
  data() {
    return {
      currentItem: {},
      popup: false
    }
  },
  components: {
    DataItem, Popup, Footer
  },
  props: 
    ['selectedData', 'todayDate'],
  methods: {
    showDetails(item) {
      this.currentItem = item
      this.popup = true

    },
    hideDetails() {
      this.currentItem = {}
      this.popup = false
    }
  }
});
</script>

<style scoped>
#home {
  width: 100%;
  /* background-color; */
}

.date {
  font-family: 'Kosugi', sans-serif;
  position:relative;
  line-height: 30px;
  height:35px;
  width:100%;
  padding:5px;
}

ul {
  /* position: relative; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* box-sizing: border-box; */
}
</style>
