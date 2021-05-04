<template>
    <div>
        <v-row no-gutters>
            <v-col cols="12">
                <div class="font-inter-black white--text">
                    {{title}}
                </div>
            </v-col>
        </v-row>

        <v-row>
            <perfect-scrollbar class="d-flex flex-nowrap">
                <div v-for="(torrent, key) in torrents" :key="key" class="d-flex flex-column slider-item mx-1">
                    <div class="d-flex justify-center">
                        <v-img v-if="getCoverURL(torrent) != null" width="250px" height="250px" :src="getCoverURL(torrent)" class="grey darken-3 preview-torrent-img"></v-img>
                        <v-sheet elevation="0" v-else class="ma-1 preview-torrent-img grey darken-3 d-flex justify-center align-center">
                            <v-icon size="100px">{{getIconByCategory(torrent.attributes.category)}}</v-icon>
                        </v-sheet>
                    </div>
                    <div class="torrent-text text-center mx-1 body-1 title white--text">
                        <p v-line-clamp:5="2">{{torrent.attributes.name}}</p>
                    </div>
                </div>

                <div v-if="loading" class="d-flex flex-column-reverse slider-item mx-1">
                    <v-skeleton-loader dark class="ma-2 pa-2" type="list-item-two-line" tile></v-skeleton-loader>
                </div>
            </perfect-scrollbar>
        </v-row>
    </div>
</template>


<script lang="ts">

import { Component, Vue, Prop, Watch } from "vue-property-decorator"
import Torrent from "@/models/Torrent"
import RiffService from '@/services/RiffService'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

@Component({
    components: { PerfectScrollbar }
})

export default class TorrentListComponent extends Vue {

    @Prop() readonly torrents!: Torrent[]
    @Prop() readonly loading!: boolean
    @Prop() readonly title!: string

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

    @Watch("loading")
    onLoadingChanged() {
        console.log("Loading finished")
    }

}

</script>

<style>
.ps {
    height: 330px;
}

.slider-item {
    height: 325px;
    width: 250px;
}
</style>