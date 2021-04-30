<template>
    <div>
        <v-flex class="d-flex ma-5 flex-justify">
            <v-card v-for="(currentPrice, key) in bpiCurrentPrice.bpi" :key="key" width="350px" class="ma-2">
                <v-card-title class="font-inter-black">
                    {{currentPrice.description}}
                </v-card-title>

                <v-list>
                    <v-list-item>
                        {{currentPrice.rate}}
                        <v-spacer/>
                        <span class="font-inter-black" v-html="currentPrice.symbol"></span>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-flex>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import CoindeskService from "@/services/CoindeskService"
import RiffTestbedService from "@/services/RiffTestbedService"
import BPICurrentPrice from "@/models/BPICurrentPrice"
import RiffTorrents from "@/models/RiffTorrents";

@Component({
  components: {  },
})

export default class DisplayJson extends Vue{

    riffTorrents: RiffTorrents = new RiffTorrents()

    created() {
        RiffTestbedService.getRiffTorrents(this).then(v => {
            console.log(this.riffTorrents)
        })
    }

 }

</script>