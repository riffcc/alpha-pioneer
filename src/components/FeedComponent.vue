<template>
    <v-row no-gutters>
        <v-col cols="12">
          <v-container>
            <v-row align="center">
              <v-col cols>
                <div class="font-inter-black white--text">
                  {{title}}
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>

        <v-col cols="12">
            <v-slide-group dark>
                <v-slide-item v-for="n in 15" :key="n">
                    <div class="ma-2" style="width: 200px; height: 200px;">
                        <v-img src="" width="100%" height="150px">
                        </v-img>
                        <div class="ma-3 text-center white--text">
                            Some title here 
                        </div>
                    </div>
                </v-slide-item>
            </v-slide-group>
        </v-col>
      </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { }
})

export default class FeedComponent extends Vue {

    @Prop() readonly title!: string

    model = null

}
</script>