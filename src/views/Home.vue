<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="ml-10 font-inter-black white--text">
            Torrents
          </div>
        </v-col>

        <v-col cols="12">
          <v-container>
            <v-row>
              <v-col class="info" cols="12">
                <div>
                  <FeedComponent title="Torrents" :torrents="torrents"/>
                </div>
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
import FeedComponent from "@/components/FeedComponent.vue";
import RiffService from '@/services/RiffService'
import Torrent from "@/models/Torrent";

@Component({
  components: { DisplayJson, FeedComponent }
})

export default class Home extends Vue {

  torrents: Torrent[] = []

  created() {
    RiffService.getTorrents(this, this.torrents)
  }
}
</script>
