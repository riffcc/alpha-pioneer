<template>
    <div>
        <v-container>
            <v-row no-gutters>
                <v-col cols="12" id="header" class="header">
                    <div class="white--text font-inter-black">
                        {{ categoryTitle }}  
                        <v-icon v-if="loading" class="mx-2 mdi-spin white--text" size="32">mdi-loading</v-icon>
                    </div>
                </v-col>
            </v-row>
                <perfect-scrollbar v-if="categoryExists" @ps-y-reach-end="updateList" @ps-scroll-down="showHeader(false)" @ps-scroll-up="showHeader(true)" ref="scrollbar">
                    <TorrentListComponent :torrents="torrents"/>
                </perfect-scrollbar>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import RiffService from '@/services/RiffService'
import Torrent from "@/models/Torrent"
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import TorrentListComponent from '@/components/TorrentListComponent.vue'

import CategoriesModule from "@/store/CategoriesModule";
import {getModule} from "vuex-module-decorators";


@Component({
    components: { PerfectScrollbar, TorrentListComponent }
})

export default class TorrentsView extends Vue {
    
    categoriesModule: CategoriesModule = getModule(CategoriesModule)
    actualCategory: string = this.$route.params.category

    categoryExists: Boolean = new Boolean

    categoryTitle: string = "1"
    loading: Boolean = false
    torrents: Torrent[] = []
    page: number = 216
    headerContainer = document.getElementById("header")

    get categories() {
        return this.categoriesModule.categories
    }

    created() {
        console.log("CHANGE")
        this.categoryExists = this.existByCategory(this.actualCategory)
        RiffService.getTorrentPage(this, this.page, this.torrents)
    }

    updateList() {
        if (!this.loading) {
            RiffService.getTorrentPage(this, this.page, this.torrents)
        }
    }

    showHeader(h: boolean) {
        if (h) {
            document.getElementById("header")?.classList.remove("header-hidden")
        } else {
            document.getElementById("header")?.classList.add("header-hidden")
        }
    }

    existByCategory(category: string) {

        let exist: Boolean = false

        for (let i of this.categories) {
            if (i.toLowerCase() == category.toLowerCase()) {
                console.log(i)
                this.categoryTitle = i
                console.log(this.categoryTitle)
                exist = true
            }
        }

        if (!exist) {
            this.categoryTitle = "This category does not exists."
        }

        return exist

    }

    @Watch('$route')
    onRouteChange() {
        this.categoryExists = this.existByCategory(this.$route.params.category)
        this.torrents.splice(0, this.torrents.length)
        this.page = 0
        RiffService.getTorrentPage(this, this.page, this.torrents)
        this.$forceUpdate()
    }

}
</script>

<style>
.ps {
    height: 800px;
}

.header{
    transition-delay: 0s;
    transition-duration: 0.5s;
}

.header-hidden{
    margin-top: -150px;
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