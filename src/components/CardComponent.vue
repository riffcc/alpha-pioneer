<template>
  <v-card class="transparent pointer" :width="getSizeByScreen()" :max-width="getSizeByScreen()" flat tile>

    <v-img :src="getCoverURL(torrent)" :width="getSizeByScreen()" :max-width="getSizeByScreen()" :height="getSizeByScreen()" :max-height="getSizeByScreen()" class="grey darken-3 pa-2 d-flex align-center text-center">
        <v-icon v-if="getCoverURL(torrent) == null" size="100px">{{getIconByCategory(torrent.attributes.category)}}</v-icon>
    </v-img>

    <v-card-subtitle :class="`inter-weight-medium ${subtitleTextSize} text-center white--text neon`">
        {{torrent.attributes.name}}
    </v-card-subtitle>

    </v-card>
</template>

<script lang="ts">
import Torrent from "@/models/Torrent"
import RiffService from "@/services/RiffService"
import ResponsiveTool from "@/services/tools/ResponsiveTool"
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component

export default class CardComponent extends Vue {

	@Prop() readonly torrent!: Torrent
	
	getCoverURL(torrent: Torrent) { return RiffService.getCoverURL(torrent) }

	get subtitleTextSize(): string { return ResponsiveTool.subtitleTextSize(this) }
	
  getIconByCategory(actualCategory: string) {
    switch(actualCategory) {
      case "Music": return "mdi-music"
      case "Audiobooks": return "mdi-file-music-outline"
      case "Podcasts": return "mdi-microphone"
      case "Books": return "mdi-book-outline"
      case "Movies": return "mdi-movie-outline"
      case "Games": return "mdi-gamepad-variant-outline"
      case "Scientific": return "mdi-test-tube"
      case "Application": return "mdi-apps"
      default: return null
    }
	}
	
  getSizeByScreen() {
    switch (this.$vuetify.breakpoint.name) {
      case("xs"): return "180px"
      case("sm"): return "180px"
      case("md"): return "250px"
      case("lg"): return "300px"
      case("xl"): return "380px"
    }
  }
}
</script>

<style>

</style>