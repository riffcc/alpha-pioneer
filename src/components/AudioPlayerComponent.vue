<template>
  <div>
    <v-card flat width="500px" height="200px">
      <v-flex class="info d-flex justify-center">
        <v-btn icon large @click="togglePlayback">
          <v-icon>
            {{ playing ? 'mdi-pause' : 'mdi-play' }}
          </v-icon>
        </v-btn>

        <v-btn large icon @click="stop">
          <v-icon>
            mdi-stop
          </v-icon>
        </v-btn>

      </v-flex>

      <span>Total duration: {{ duration }} seconds</span>
      <span>Progress: {{setProgressValue(progress)}} {{ (progress * 100) }}%</span>


      <v-flex class="info d-flex justify-center">
      {{progressValue}}

        <v-slider v-model="progressValue" min="0" max="100">
          
        </v-slider>

      </v-flex>


    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch} from "vue-property-decorator"
// @ts-ignore
import VueHowler from 'vue-howler'

@Component({
  mixins: [VueHowler]
})


export default class AudioPlayerComponent extends Vue {

  //@ts-ignore
  progressValue: number = 0


  setProgressValue(n: number){
    this.progressValue = Math.round(n * 100)
  }

  @Watch('progressValue')
  onProgressValueChanged() {
    //console.log(progress)
  }

}

</script>

