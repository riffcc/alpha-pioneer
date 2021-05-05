<template>
    <div class="home">
        <v-card width="500px" height="600px">
            <video-player ref="videoPlayer"
                class="vjs-custom-skin"
                :options="playerOptions"
                @play="onPlayerPlay($event)"
                @ready="onPlayerReady($event)">
            </video-player>
        </v-card>

    </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayerComponent.vue'

export default {
  name: 'home',
  components: {
    VideoPlayer
  },
  data () {
    return {
      playerOptions: {
        autoplay: true,
        controls: true,
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        }
        // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg'
      }
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerReady (player) {
      console.log('player ready!', player)
      this.player.play()
    },
    playVideo: function (source) {
      const video = {
        withCredentials: false,
        type: 'application/x-mpegurl',
        src: source
      }
      this.player.reset() // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,
      this.player.src(video)
      // this.player.load()
      this.player.play()
    }
  },
  mounted () {
    const src = 'https://cdn.riff.cc/ipfs/QmYN8HXLT7oguXYmVp3qZcVgASh1G8R3dJcUymXuWT2ZwA'
    this.playVideo(src)
  }
}
</script>

<style scoped>
  .player {
    /*position: absolute !important;*/
    width: 100%;
    height: 60%;
  }
  .vjs-custom-skin {
    height: 60% !important;
  }

  .vjs-custom-skin /deep/ .video-js {
    height: 60%;
  }
</style>
