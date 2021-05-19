<template>
  <v-app>

    <v-main class="grey darken-4">
        
        <LeftSidebarComponent  v-if="showSidebar"/>
        
        <!--AudioPlayerComponent :sources="audioSources" :loop="false"></AudioPlayerComponent-->

        <router-view style="transition-duration: 0.5s;"/>


    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LeftSidebarComponent from "@/components/LeftSidebarComponent.vue"
import AudioPlayerComponent from "@/components/AudioPlayerComponent.vue"
import UserInterface from "@/store/UserInterface"
import { getModule } from "vuex-module-decorators"

@Component({
  components: { LeftSidebarComponent, AudioPlayerComponent }
})

export default class App extends Vue {

  userInterface: UserInterface = getModule(UserInterface)

  get showSidebar() {
    return this.userInterface.sidebar
  }

  audioSources = [
    "http://starmen.net/mother2/music/170-%20Earthbound%20-%20OK%20_Ssuka_.mp3",
    /**"assets/audio/fallback.mp3",
    "assets/audio/fallback2.wav"*/
  ]

}

</script>

<style>
@font-face {
  font-family: "Inter-Black";
  src: url('./assets/fonts/Inter-Black.ttf') format('truetype');
}

.font-inter-black {
    font-family: "Inter-Black";
    font-size: 40px;
    font-weight: 30px;
}

.full-width {
  width: 100%;
}

.full-height {
  height: 100%;
}

.rotating {
  transition: transform 1s ease-in-out;
}

.rotating:hover {
  transform: rotateZ(360deg);
}

.grey-margin-right{
    border-right: 50px solid #797979;
}
</style>