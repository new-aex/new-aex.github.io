<template>
  <div id="add">
      <iframe src="https://dev.oort.network/new-aex/"></iframe>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue'

export default Vue.extend({
  name: 'Add',
});
</script>

<style scoped>
#add {
  width:100%;
  height:100%;
  padding: 8px;
}

#add >>> iframe {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    outline: none;
    border:0;
}

</style>
