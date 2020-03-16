<template>
<div id="menu">
  <ul>
    <img src="aex-01.png"></img>
    <li>
      <router-link to="/">new Airtime Experiment Index</router-link>
    </li>
    <li>
    <router-link to="/about">About</router-link>
    </li>
    <li>
      <a href="http://dev.oort.network/streams/" target="_blank">Submit your event</a>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Menu',
  props: {
    // msg: String,
  },
});
</script>

<style scoped>
img {
  /* position:absolute; */
  left:0;
  height:50px;

}

#menu {
  position: sticky;
  top: 0;
  background-color: white;
  z-index:100;
}

ul {
  box-sizing:border-box;
  width:100%;
  /* height:vh; */
  border: 1px solid black;
  padding: 5px;
}

</style>