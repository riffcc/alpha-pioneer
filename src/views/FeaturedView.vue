<template>
  <div>
    <v-container fluid>
      <FeaturedTorrentListComponent title="Featured" :torrents="featuredTorrents" :loading="loading"/>
      <FeaturedTorrentListComponent title="Movies" route="movies" :torrents="movieTorrents" :loading="loading"/>
      <FeaturedTorrentListComponent title="Tv" route="tv" :torrents="tvTorrents" :loading="loading"/>
      <FeaturedTorrentListComponent title="Music" route="music" :torrents="musicTorrents" :loading="loading"/>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import TorrentSliderComponent from "@/components/TorrentSliderComponent.vue"
import RiffService from '@/services/RiffService'
import FeaturedTorrentListComponent from "@/components/FeaturedTorrentListComponent.vue"
import Torrent from "@/models/Torrent";
import CardComponent from "@/components/CardComponent.vue"

@Component({
  components: { TorrentSliderComponent, FeaturedTorrentListComponent, CardComponent }
})

export default class Home extends Vue {

  loading: Boolean = false

  featuredTorrents: Torrent[] = []
  movieTorrents: Torrent[] = []
  tvTorrents: Torrent[] = []
  musicTorrents: Torrent[] = []

  featuredTypes: any = [
    { title: "Movies", route: "movies" },
    { title: "Tv", route: "tv" },
    { title: "Music", route: "music" }


  ]

  getSizeByScreen() {
    let size: string = "250px"
    switch (this.$vuetify.breakpoint.name) {
        case("xs"): { size = "90px" } break
        case("sm"): { size = "180px" } break
        case("md"): { size = "250px" } break
        case("lg"): { size = "300px" } break
        case("xl"): { size = "380px" } break
    }
    return size
  }
  created() { 
    //Spaghetti
    
    RiffService.getFeaturedTorrents(this, "https://origin.riff.cc/featured/main.json", this.featuredTorrents)
    RiffService.getFeaturedTorrents(this, "https://origin.riff.cc/featured/0.json", this.movieTorrents)
    RiffService.getFeaturedTorrents(this, "https://origin.riff.cc/featured/1.json", this.tvTorrents)
    RiffService.getFeaturedTorrents(this, "https://origin.riff.cc/featured/2.json", this.musicTorrents)
  }

}
</script>