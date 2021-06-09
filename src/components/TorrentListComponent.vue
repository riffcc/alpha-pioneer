<template>
    <v-row no-gutters>
        <v-col v-for="(torrent, key) in torrents" :key="key" md="2" xl="2">
            <div class="ma-1 d-flex justify-center flex-column">

                <v-img v-if="getCoverURL(torrent) != null" width="100%" height="200px" :src="getCoverURL(torrent)" class="grey darken-3"></v-img>

                <v-sheet elevation="0" width="100%" height="200px" v-else class="grey darken-3 d-flex justify-center">
                    <v-icon size="100px">{{getIconByCategory(torrent.attributes.category)}}</v-icon>
                </v-sheet>

                <div class="d-flex justify-center text-center pa-2 body-1 title white--text">
                    <span v-line-clamp:5="2">{{torrent.attributes.name}}</span>
                </div>

            </div>
        </v-col>

        <v-col cols="12" md="2" xl="2" class="ma-1 d-flex flex-column-reverse">
            <v-skeleton-loader dark class="ma-1" width="200px" type="list-item-two-line" tile></v-skeleton-loader>
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
