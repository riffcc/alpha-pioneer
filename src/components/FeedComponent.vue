<template>
  <v-slide-group dark>
      <v-slide-item v-for="(torrent, key) in torrents" :key="key">
          <v-card flat tile width="250px">
              <v-img class="white" width="250px" height="250px"/>
              <p v-line-clamp:10="2" class=" ma-3 white--text text--body text-center text-wrap">
                  {{torrent.attributes.name}}
              </p>
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

export default class FeedComponent extends Vue {

    @Prop() readonly title!: string
    @Prop() readonly torrents!: Torrent[]

}
</script>