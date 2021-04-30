<template>
    <div>
        <v-container id="scroll-target" class="overflow-y-auto">
            <v-row no-gutters v-scroll:#scroll-target="onScroll()">
                <v-col v-for="(torrent, key) in torrents" :key="key" sm="4" md="3" xs="12">
                    <v-card flat outlined tile class="grey darken-3 ma-1" dark>
                        <v-img height="250px" class="ma-sm-1 indigo"></v-img>
                        {{ offsetTop }}
                        <v-card-text class="pa-2">
                            <div class="title text-justify text-wrap" v-line-clamp:5="2">{{torrent.attributes.name}}</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import RiffService from '@/services/RiffService'
import Torrent from "@/models/Torrent"

@Component({
  components: { }
})

export default class Home extends Vue {

    loading: Boolean = false
    torrents: Torrent[] = []
    page: number = 0
    offsetTop: number = 0

    onScroll () {
        let e: any = document.getElementById("scroll-target")
        this.offsetTop = e.target.scrollTop
    }

    created() {
        RiffService.getTorrentPage(this, this.page, this.torrents)
    }
}
</script>
