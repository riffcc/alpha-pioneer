<template>
  <v-container fluid>
    <SliderComponent v-for="(torrent, key) in torrentFeatures" :key="key" :title="torrent.title" :link="torrent.link"/>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import RiffService from '@/services/RiffService'
import SliderComponent from "@/components/SliderComponent.vue"
import Torrent from "@/models/Torrent";
import CardComponent from "@/components/CardComponent.vue"

@Component({
  components: { SliderComponent, CardComponent }
})

export default class Home extends Vue {
  
  torrentFeatures = [
    { title: "Featured", route: undefined, link: "https://origin.riff.cc/featured/main.json" },
    { title: "Movies", route: "movies", link: "https://origin.riff.cc/featured/0.json" },
    { title: "Tv", route: "tv", link: "https://origin.riff.cc/featured/1.json" },
    { title: "Music", route: "music", link: "https://origin.riff.cc/featured/2.json" }

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

}
</script>