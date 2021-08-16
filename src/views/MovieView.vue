<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="info d-flex justify-center align-center">

        <div ref="videoContainer" class="info video-container d-flex flex-row justify-center align-end">
          <video
            ref="player"
            :class="`${ fullscreen ? 'video-fullscreen' : 'video-windowed'}`"
            @playing="playing = true"
            @pause="playing = false"
            @loadedmetadata="mountPlayer()"
            @timeupdate="timeUpdate()"
            @click="play()"
          ></video>

          <div :class="`d-flex justify-space-around align-center pa-3 overlay-container ${ hidedControlbar ? 'hided' : '' }`" style="background:rgba(0, 0, 0, 0.521);">

            <v-btn large icon @click="play()">
              <v-icon color="white" large> far {{ playing ? "fa-pause-circle" : "fa-play-circle" }} </v-icon>
            </v-btn>

            <input 
              class="mx-3 styled-slider slider-progress"
              type="range" 
              ref="timebar" 
              style="width: 100%;"
              value="0"
              min="0" 
              max="100"
              @click="v => setCurrentTime(v.target.value)"
              @input="v => setCurrentTime(v.target.value)"
            >

            <v-btn large icon @click="switchMute()">
              <v-icon color="white" large>{{ muted ? "mdi-volume-mute" : "mdi-volume-high" }}</v-icon>
            </v-btn>
            <v-btn large icon @click="switchFullscreen()">
              <v-icon color="white" large> mdi-fullscreen </v-icon>
            </v-btn>

          </div>  
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import UserInterface from "@/store/UserInterface"
import { Component, Vue, Watch } from "vue-property-decorator"
import Hls from 'hls.js'
import '@/assets/custom-styles/PlayerStyles.css'
import { getModule } from "vuex-module-decorators"

@Component({components:{ }})

export default class MovieView extends Vue {

  userInterface: UserInterface = getModule(UserInterface)

  playing: boolean = false
  muted: boolean = false
  mountedPlayer: boolean = false
  currentTime: number = NaN
  fullscreen: boolean = false
  hidedControlbar: boolean = false
  debounceTimeoutId: any


  player(): HTMLMediaElement { //@ts-ignore
    return this.$refs.player
  }

  log(v: any) {
    console.log(v)
  }

  switchFullscreen() { // @ts-ignore
    if (this.$refs.videoContainer.requestFullscreen) { // @ts-ignore
      if (!this.fullscreen) { this.$refs.videoContainer.requestFullscreen() } // @ts-ignore
      else { document.exitFullscreen() }
    }
  }

  switchMute() {
    this.muted = !this.player().muted
    this.player().muted = !this.player().muted
  }

  percentage(partialValue: number, totalValue: number) {
   return (100 * partialValue) / totalValue;
  }



  created() {
    window.addEventListener("resize", (e) => { this.fullscreen = (window.innerHeight == screen.height) })
  }

  mounted() {
    if (Hls.isSupported()) {
      let hls = new Hls()
      console.log(hls)
      hls.loadSource("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8") //@ts-ignore
      hls.attachMedia(this.$refs.player)
    }
  }

  updated() { //@ts-ignore
    for (let i of document.querySelectorAll('input[type="range"].slider-progress')) {
      i.style.setProperty('--value', i.value)
      i.style.setProperty('--min', i.min == '' ? '0' : i.min)
      i.style.setProperty('--max', i.max == '' ? '100' : i.max)
      i.addEventListener('input', () => { i.style.setProperty('--value', i.value) })
    }
  }

  play() { //@ts-ignore
    if (this.playing) {
      this.player().pause()
      this.hidedControlbar = false
    }
    else {
      this.player().play()
      this.mouseDebounce()
    }
  }

  mouseDebounce() {
    clearTimeout(this.debounceTimeoutId)
    this.hidedControlbar = false

    this.debounceTimeoutId = setTimeout(() => {
      if (this.playing == true) {
        console.log("Playing!")
        this.hidedControlbar = true
      }
    }, 1000)
  }
  
  timeUpdate() {
    this.currentTime = this.player().currentTime //@ts-ignore
    this.$refs.timebar.value = this.percentage(this.currentTime, this.player().duration)
    this.$forceUpdate()
  }

  setCurrentTime(v: number) {
    this.log((v * this.player().duration) / 100)
    this.player().currentTime = ((v * this.player().duration) / 100)
  }

  mountPlayer() {
    this.currentTime = this.player().currentTime
    this.mountedPlayer = true
  }

  @Watch("$vuetify.breakpoint.name")
  onBreakpointChanged() {
    console.log(this.$vuetify.breakpoint.name)
  }
}

</script>

<style>
.video-container {
  position: relative;
  max-width: 80%;
}

.video-windowed {
  width: 100%    !important;
  height: auto   !important;
}

.video-fullscreen {
  width: 100%;
  height: 100%;
}

.overlay-container {
  position:absolute;
  width: 100%;

  opacity: 1;
  transition: opacity 0.1s ease-in;
  -webkit-transition: opacity 0.1s ease-in;
  -moz-transition: opacity 0.1s ease-in;
  -o-transition: opacity 0.1s ease-in;
}

.overlay-content {
  pointer-events: all;
}

.pointer {
  cursor: pointer;
}

.hided {
  -webkit-transition: opacity 0.2s ease-in;
  -moz-transition: opacity 0.2s ease-in;
  -o-transition: opacity 0.2s ease-in;
  opacity: 0;
}

</style>