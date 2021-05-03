<template>
    <v-row no-gutters>
        <v-icon>mdi-audiobook</v-icon>
        <v-col v-for="(torrent, key) in torrents" :key="key" cols="12" md="3" xl="2">
            <div flat tile  class="d-flex justify-center flex-column" dark>
                <div class="d-flex justify-center">
                    <v-img v-if="getCoverURL(torrent) != null" :src="getCoverURL(torrent)" class="ma-1 grey darken-3 preview-torrent-img"></v-img>
                    <v-sheet elevation="0" v-else class="ma-1 preview-torrent-img grey darken-3 d-flex justify-center align-center">
                        <v-icon size="100px">{{getIconByCategory(torrent.attributes.category)}}</v-icon>
                    </v-sheet>
                </div>
                <div class="torrent-text text-center pa-2 body-1 title white--text">
                    <p v-line-clamp:5="2">{{torrent.attributes.name}}</p>
                </div>
            </div>
        </v-col>
        <v-col cols="12" md="3" xl="2" class="d-flex flex-column-reverse">
            <v-skeleton-loader dark class="ma-2 pa-2" type="list-item-two-line" tile></v-skeleton-loader>
        </v-col>
    </v-row>
</template>


<script lang="ts">

import { Component, Vue, Prop } from "vue-property-decorator"
import RiffService from '@/services/RiffService'
import Torrent from "@/models/Torrent"
import CategoriesModule from "@/store/CategoriesModule";
import {getModule} from "vuex-module-decorators"

@Component({
    components: { }
})

export default class TorrentListComponent extends Vue {

    categoriesModule: CategoriesModule = getModule(CategoriesModule)
    @Prop() readonly torrents!: Torrent[]

    get categories() {
        return this.categoriesModule.categories
    }

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
