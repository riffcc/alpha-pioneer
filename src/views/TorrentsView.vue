<template>
    <div>
        <v-container>
            <v-row no-gutters>
                <v-col cols="12" id="header" class="header">
                    <div class="white--text font-inter-black">
                        Torrents
                    </div>
                </v-col>
            </v-row>
                <perfect-scrollbar @ps-y-reach-end="onScroll" @ps-scroll-down="showHeader(false)" @ps-scroll-up="showHeader(true)" ref="scrollbar">
                    <v-row no-gutters>
                            <v-col v-for="(torrent, key) in torrents" :key="key" cols="12" sm="4" md="3">
                                <div flat tile  class="d-flex justify-center flex-column" dark>
                                    <div class="d-flex justify-center">
                                        <v-img class="ma-1 black preview-torrent-img" src="https://picsum.photos/250/250"></v-img>
                                    </div>
                                    <div class="torrent-text text-center pa-2 body-1 title white--text">
                                        <p v-line-clamp:5="2">{{torrent.attributes.name}}</p>
                                    </div>
                                </div>
                            </v-col>

                            <v-col md="3" class="d-flex flex-column-reverse">
                                <v-skeleton-loader dark class="ma-2 pa-2" type="list-item-two-line" tile></v-skeleton-loader>
                            </v-col>
                    </v-row>
                </perfect-scrollbar>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import RiffService from '@/services/RiffService'
import Torrent from "@/models/Torrent"
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

@Component({
    components: { PerfectScrollbar }
})

export default class Home extends Vue {
    
    loading: Boolean = false
    torrents: Torrent[] = []
    page: number = 0
    header: boolean = true
    headerContainer = document.getElementById("header")
    
    onScroll(event: any) {
        this.updateList()
    }

    created() {
        RiffService.getTorrentPage(this, this.page, this.torrents)
    }

    updateList() {
        RiffService.getTorrentPage(this, this.page, this.torrents)
    }

    showHeader(h: boolean) {
        if (h) {
            document.getElementById("header")?.classList.remove("header-hidden")
        } else {
            document.getElementById("header")?.classList.add("header-hidden")
        }
        this.header = h
    }

}
</script>

<style>
.header{
    transition-delay: 0s;
    transition-duration: 0.5s;
}

.header-hidden{
    margin-top: -150px;
}

.ps {
    width: 100%;
    height: 650px;
}

#container {
    position: relative;
    width: 600px;
    height: 400px;
}

.preview-torrent-img {
    width: 250px;
    height: 250px;
}

.torrent-text{
    width: 100%;
    height: 70px;
}

</style>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>