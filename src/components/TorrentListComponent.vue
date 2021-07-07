<template>
    <v-row no-gutters class="my-2">
        <v-col v-for="(torrent, key) in torrents" :key="key" class="d-flex justify-center">
            <CardComponent :torrent="torrent"/>
        </v-col>
    </v-row>
</template>


<script lang="ts">

import { Component, Vue, Prop } from "vue-property-decorator"
import RiffService from '@/services/RiffService'
import Torrent from "@/models/Torrent"
import CategoriesModule from "@/store/CategoriesModule"
import CardComponent from "@/components/CardComponent.vue"
import { getModule } from "vuex-module-decorators"

@Component({
    components: { CardComponent }
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
