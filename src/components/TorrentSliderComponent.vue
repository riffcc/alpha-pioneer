<template>
    <v-slide-group dark show-arrows="always" center-active>
            <v-slide-item v-if="loading">
                <v-skeleton-loader class="ml-1 mr-1 sm-3 indigo d-flex flex-column-reverse" width="250px" height="325px" type="list-item-two-line" tile>
                </v-skeleton-loader>
            </v-slide-item>

            <v-slide-item v-for="(torrent, key) in torrents" :key="key" v-else>
                <v-card flat tile class="ml-1 mr-1 slider-item sm-3">
                    <v-img class="indigo darken-1" width="250px" height="250px"/>
                    <v-card-text class="white--text text--body text-center">
                        <p v-line-clamp:10="2">{{torrent.attributes.name}}</p>
                    </v-card-text>
                </v-card>
            </v-slide-item>
    </v-slide-group>
</template>

<script lang="ts">
import Torrent from "@/models/Torrent";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { }
})

export default class TorrentSliderComponent extends Vue {
    @Prop() readonly loading!: boolean
    @Prop() readonly title!: string
    @Prop() readonly torrents!: Torrent[]

}
</script>

<style>

.slider-item {
    height: 325px;
    width: 250px;
}

</style>