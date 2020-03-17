<template>
  <div id="footer">
    <!-- <router-link to="/about">About</router-link> -->
    <p on:click="!popup" @click="$emit('back-click')">Back</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
  props: {
    // msg: String,
  },
});
</script>

<style scoped>
#footer {
  box-sizing:border-box;
  position:fixed;
  width:100%;
  height:50px;
  bottom:0;
  border: 1px solid black;
  background-color: white;
  z-index:100;
  padding: 5px;
}

p {
  cursor:pointer;
  padding:8px;
  text-align:center;
  }
</style>