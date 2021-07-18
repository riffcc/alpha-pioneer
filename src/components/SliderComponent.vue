<template>
  <v-row no-gutters>
    <v-col cols="12">
      <span @click="$router.push(`${route}`).catch((err) => {})" :class="`inter-weight-black ${textSize} white--text neon pointer`">
        {{title}}
      </span>
    </v-col>

    <perfect-scrollbar class="d-flex flex-nowrap">
      <CardComponent v-for="(torrent, key) in torrents" :key="key" :torrent="torrent" class="mx-1"/>
      <div v-if="loading" class="d-flex flex-column-reverse slider-item mx-1">
        <v-skeleton-loader dark class="ma-2 pa-2" type="list-item-two-line" tile></v-skeleton-loader>
      </div>
    </perfect-scrollbar>
  </v-row>

</template>


<script lang="ts">

import { Component, Vue, Prop, Watch } from "vue-property-decorator"
import Torrent from "@/models/Torrent"
import RiffService from '@/services/RiffService'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import CardComponent from "@/components/CardComponent.vue"
import ResponsiveTool from "@/services/tools/ResponsiveTool"

@Component({
    components: { PerfectScrollbar, CardComponent }
})

export default class SliderComponent extends Vue {


  @Prop() readonly link!: string
  @Prop() readonly title!: string
  @Prop() readonly route!: string

	torrents: Torrent[] = []
  loading: boolean = false

	get textSize(): string { return ResponsiveTool.textSize(this) }
	 
	created() {
	  RiffService.getFeaturedTorrents(this, this.link, this.torrents)
  }
   
  getCoverURL(torrent: Torrent) {
      return RiffService.getCoverURL(torrent)
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