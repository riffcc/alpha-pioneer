<template>
  <div>
    <DisplayJson/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import DisplayJson from '../components/DisplayJson.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      DisplayJson,
    },
  })
</script>
