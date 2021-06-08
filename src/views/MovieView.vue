<template>
    <div class="d-flex full-width flex-column full-height">
        
        <div class="mx-5 font-inter-black white--text">
            Loading... <v-icon class="mx-2 mdi-spin white--text" size="64">mdi-loading</v-icon>
        </div>

        <div class="d-flex full-height align-center justify-center">
            <div style="width: 40%; height: 80%;">
                <v-img src="../assets/logo.png" width="100%" height="100%"></v-img>
            </div>
        </div>

        <div class="mx-5 d-flex align-self-end font-inter-black white--text">
            Loading now 

            <v-img class="rotating" src="../assets/logo.png" width="50px" height="50px"></v-img>
            <v-icon style="display: fixed; margin-top: -50px;" class="mx-2 mdi-spin white--text" size="94">

            </v-icon>
        </div>
    </div>
</template>

<script lang="ts">
import UserInterface from "@/store/UserInterface"
import { Component, Vue, Watch } from "vue-property-decorator"
// @ts-ignore
import { videoPlayer } from 'vue-vjs-hls'
import { getModule } from "vuex-module-decorators"

@Component({
    components: { videoPlayer }
})

export default class TestView extends Vue {

    userInterface: UserInterface = getModule(UserInterface)

    canPlay: boolean = false

    videoOptions = {
        source: {
            type: "video/mp4",
            src: 'https://cdn.riff.cc/ipfs/QmYN8HXLT7oguXYmVp3qZcVgASh1G8R3dJcUymXuWT2ZwA'
        },
        poster: 'http://cn.vuejs.org/images/logo.png',
        autoplay: false,
        customEventName: 'player-state-changed',
    }

    toggleSidebar(v: boolean) {
        this.userInterface.showSidebar(v);
    }

    playerStateChanged(playerCurrentState: any) {
        console.log(playerCurrentState)
        if ((playerCurrentState.canplay != undefined) && (playerCurrentState.canplay)){
            this.canPlay = true
        }

        if ((playerCurrentState.playing != undefined) && (playerCurrentState.playing)){
            this.toggleSidebar(false)
        }

        if ((playerCurrentState.pause != undefined) && (playerCurrentState.pause)){
            this.toggleSidebar(true)
        }
    }
}

</script>

<style>

.video-js{
    height: 100%;
}

.video-container{
    width: 50%;
    height: 50%;

    transition-delay: 0s;
    transition-duration: 0.5s;
}

.video-container-full{
    width: 100%;
    height: 100%;
}
</style>