<template>
    <div>
        <v-row no-gutters>
            <v-col cols="12">
                <router-link class="text-decoration-none" :to="`torrents/${route}`">
                    <span class="font-inter-black white--text neon-button-icon">
                        {{title}}
                    </span>
                </router-link>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <!--perfect-scrollbar class="d-flex flex-nowrap">
                <div v-for="(torrent, key) in torrents" :key="key" class="d-flex flex-column slider-item mx-1">
                    <div class="d-flex justify-center">
                        <v-img v-if="getCoverURL(torrent) != null" width="250px" height="250px" :src="getCoverURL(torrent)" class="grey darken-3 preview-torrent-img"></v-img>
                        <v-sheet elevation="0" v-else class="preview-torrent-img grey darken-3 d-flex justify-center align-center">
                            <v-icon size="100px">{{getIconByCategory(torrent.attributes.category)}}</v-icon>
                        </v-sheet>
                    </div>
                    <div class="torrent-text text-center mx-1 body-1 title white--text">
                        <p v-line-clamp:5="2">{{torrent.attributes.name}}</p>
                    </div>
                </div>
                

            </perfect-scrollbar-->

                <perfect-scrollbar class="d-flex flex-nowrap">

                    <CardComponent v-for="(torrent, key) in torrents" :key="key" :torrent="torrent" class="mx-1 slider-item"/>
                    
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
import CardComponent from "@/components/CardComponent.vue"

@Component({
    components: { PerfectScrollbar, CardComponent }
})

export default class TorrentListComponent extends Vue {

    @Prop() readonly torrents!: Torrent[]
    @Prop() readonly loading!: boolean
    @Prop() readonly title!: string
    @Prop() readonly route!: string

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