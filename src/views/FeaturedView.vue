<template>
  <div class="home">
    <v-container>

      <FeaturedTorrentListComponent title="Featured"  :torrents="featuredTorrents" :loading="loading"/>

      <FeaturedTorrentListComponent title="Movies" :torrents="movieTorrents" :loading="loading"/>

      <FeaturedTorrentListComponent title="Tv" :torrents="tvTorrents" :loading="loading"/>

      <FeaturedTorrentListComponent title="Music" :torrents="musicTorrents" :loading="loading"/>

    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DisplayJson from '../components/DisplayJson.vue'
import TorrentSliderComponent from "@/components/TorrentSliderComponent.vue";
import RiffService from '@/services/RiffService'
import FeaturedTorrentListComponent from "@/components/FeaturedTorrentListComponent.vue";
import Torrent from "@/models/Torrent";

@Component({
  components: { DisplayJson, TorrentSliderComponent, FeaturedTorrentListComponent }
})

export default class Home extends Vue {

  loading: Boolean = false

  featuredTorrents: Torrent[] = []
  movieTorrents: Torrent[] = []
  tvTorrents: Torrent[] = []
  musicTorrents: Torrent[] = []

  created() {
    RiffService.getFeaturedTorrents(this, "https://origin.riff.cc/featured/main.json", this.featuredTorrents)
    RiffService.getFeaturedTorrents(this, "https://origin.riff.cc/featured/0.json", this.movieTorrents)
    RiffService.getFeaturedTorrents(this, "https://origin.riff.cc/featured/1.json", this.tvTorrents)
    RiffService.getFeaturedTorrents(this, "https://origin.riff.cc/featured/2.json", this.musicTorrents)
  }

}
</script>
