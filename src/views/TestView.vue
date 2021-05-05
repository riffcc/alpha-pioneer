<template>
    <div class="home">
        <v-card width="500px" height="600px">
            <videoPlayer :options="videoOptions"></videoPlayer>
        </v-card>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { videoPlayer } from 'vue-vjs-hls'

@Component({
    components: { videoPlayer }
})

export default class TestView extends Vue {
    bruh = videoPlayer
    videoOptions = {
        source: {
            type: "video/mp4",
            src: 'https://cdn.riff.cc/ipfs/QmYN8HXLT7oguXYmVp3qZcVgASh1G8R3dJcUymXuWT2ZwA',
            // if you need custom player state changed event name, you can config it like this
        }
    }
}

</script>
