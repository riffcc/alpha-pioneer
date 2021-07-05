<template>
  <v-card class="transparent ma-0 pa-0"  width="250px" flat tile>

    <v-img :src="getCoverURL(torrent)" width="250px" max-width="250px" height="250px" max-height="250px" class="grey darken-3 pa-2">
        <v-icon v-if="getCoverURL(torrent) == null" size="100px">{{getIconByCategory(torrent.attributes.category)}}</v-icon>
    </v-img>

    <v-card-subtitle class="body-1 text-center white--text">
        {{torrent.attributes.name}}
    </v-card-subtitle>

    </v-card>
</template>

<script lang="ts">
import Torrent from "@/models/Torrent"
import RiffService from "@/services/RiffService"
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({ components: {  } })

export default class CardComponent extends Vue {
    
    @Prop() readonly torrent!: Torrent

    getCoverURL(torrent: Torrent) {
        return RiffService.getCoverURL(torrent)
    }

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

}
</script>

<style>

</style>