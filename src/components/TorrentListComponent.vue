<template>
    <v-row no-gutters>
        <v-col v-for="(torrent, key) in torrents" :key="key" cols="12" md="3" xl="2">
            <div flat tile  class="d-flex justify-center flex-column" dark>
                <div class="d-flex justify-center">
                    <v-img class="ma-1 black preview-torrent-img"></v-img>
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

import { Component, Vue, Watch, Prop } from "vue-property-decorator"
import Torrent from "@/models/Torrent"

@Component({
    components: { }
})

export default class TorrentListComponent extends Vue {
    @Prop() readonly torrents!: Torrent[]
}

</script>
