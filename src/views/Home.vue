<template>
  <div class="full-width full-height">
    <v-container>
      <FeedComponent title="Section"/>

      <FeedComponent title="Another Section"/>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DisplayJson from '../components/DisplayJson.vue'
import FeedComponent from "@/components/FeedComponent.vue";
import RiffService from '@/services/RiffService'

@Component({
  components: { DisplayJson, FeedComponent }
})

export default class Home extends Vue {

  created() {
    RiffService.getSomething(this)
  }
}
</script>
