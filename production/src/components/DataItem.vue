<template>
  <div class="data_item" @click="$emit('data-click')">
    <p>{{ item.name }}</p>
    <p>{{ item.time_start }}</p>
    <p v-if="item.initiator">by {{ item.initiator }}</p>
    <div id="container">
    <img v-if="item.image.url" :src="item.image.url"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DataItem',
  props: ['item']
}
</script>

<style scoped>
p {
  flex: none;
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
  object-fit: contain;
  object-position: left top;
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
  border: 1px solid black;
  padding:5px;
  background-color:white;
  border-radius:12px;
}

.data_item:hover {
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .data_item {
      width:50%;
      height:49.9vw;
      font-size:16px;
  }
}

</style>