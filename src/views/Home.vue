<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" class="ma-0 pa-0">
          <div class="ml-10 font-inter-black white--text">
            Torrents
          </div>
        </v-col>

        <v-col cols="12" class="ma-0 pa-0">
          <v-container>
            <v-row>
              <v-col cols="12" class="ma-0 pa-0">
                <div>
                  <!--TorrentSliderComponent title="Torrents" :torrents="torrents" :loading="loading"/-->
                </div>
              </v-col>

              <v-col cols="6" class="info">
                <v-icon color="white">$star</v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DisplayJson from '../components/DisplayJson.vue'
import TorrentSliderComponent from "@/components/TorrentSliderComponent.vue";
import RiffService from '@/services/RiffService'
import Torrent from "@/models/Torrent";
//@ts-ignore
import Star from "../assets/icons/star.svg";

@Component({
  components: { DisplayJson, TorrentSliderComponent, Star }
})

export default class Home extends Vue {

  loading: Boolean = false

  torrents: Torrent[] = []

  created() {
    RiffService.getTorrents(this, this.torrents)
  }
}
</script>
