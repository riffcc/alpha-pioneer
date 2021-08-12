<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <div ref="videoContainer" class="info video-container d-flex flex-row justify-center align-center">
          <video
            ref="player"
            class="video-windowed"
            controls
          ></video>      
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import UserInterface from "@/store/UserInterface"
import { Component, Vue, Watch } from "vue-property-decorator"
import Hls from 'hls.js'
import { getModule } from "vuex-module-decorators"

@Component({components:{ }})

export default class MovieView extends Vue {

  userInterface: UserInterface = getModule(UserInterface)
  
  mounted() {
    if (Hls.isSupported()) {
      let hls = new Hls()
      console.log(hls)
      hls.loadSource("https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8") //@ts-ignore
      hls.attachMedia(this.$refs.player)
    }
  }
}

</script>

<style>
.video-container {
  height: 500px;
}

.video-windowed {
  width: 100%;
  height: auto;
}
</style>