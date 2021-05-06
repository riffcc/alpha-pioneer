<template>
    <div class="d-flex justify-center info">

            <div class="video-container" id="XD">
                <videoPlayer :options="videoOptions"></videoPlayer>
            </div>

            <v-btn @click="bruh">
                XD
            </v-btn>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
// @ts-ignore
import { videoPlayer } from 'vue-vjs-hls'

@Component({
    components: { videoPlayer }
})

export default class TestView extends Vue {

    bruh() {
        document.getElementById("XD")!.classList.toggle("video-container-full")
    }

    videoOptions = {
        source: {
            type: "video/mp4",
            src: 'https://cdn.riff.cc/ipfs/QmYN8HXLT7oguXYmVp3qZcVgASh1G8R3dJcUymXuWT2ZwA',
        },
        poster: 'http://cn.vuejs.org/images/logo.png',
        autoplay: false
    }
}

</script>

<style>
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