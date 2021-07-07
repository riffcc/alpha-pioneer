<template>
    <div :style="{ 'height': `${getSizeByScreen()}px` }">
        <v-row no-gutters>
            <v-col cols="12">
                <router-link class="text-decoration-none" :to="`torrents/${route}`">
                    <span class="font-inter-black white--text neon">
                        {{title}}
                    </span>
                </router-link>
            </v-col>
        </v-row>

        <v-row no-gutter>
            <perfect-scrollbar class="d-flex flex-nowrap">
                <CardComponent v-for="(torrent, key) in torrents" :key="key" :torrent="torrent" class="mx-1"/>
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

    @Watch("loading")
    onLoadingChanged() {
        console.log("Loading finished")
    }

}

</script>