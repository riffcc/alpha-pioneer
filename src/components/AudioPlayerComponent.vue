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


      <v-flex class="info d-flex justify-center">
      
        <v-slider :value="Math.round(progress * 100)" min="0" max="100" @click="bruh" @change="v => setProgress(v)">
        </v-slider>
        
      </v-flex>
      {{Math.round(progress * 100)}}

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
  bruh() {
    console.log("CLICK")
  }
}

</script>

