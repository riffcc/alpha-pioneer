<template>
    <div class="d-flex justify-center full-width full-height">


        <div v-if="!canPlay" class="full-width full-height">
            <div style="height: 10%" class="font-inter-black ma-3 white--text">
                Loading (Insert Movie Name) <v-icon class="mdi-spin white--text" size="64">mdi-loading</v-icon>
            </div>

            <div style="height: 90%;" class="d-flex flex-column justify-center align-center">
                <div class="success">
                    <v-img class="mx-auto indigo" src="https://origin.riff.cc/covers/1.png" width="600px" height="500px"></v-img>
                </div>
            </div>

        </div>

        <div v-show="canPlay" class="full-width full-height">
            <videoPlayer :options="videoOptions" style="height: 100%;" @player-state-changed="playerStateChanged"></videoPlayer>
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