<template>
  <v-app>

    <v-main class="grey darken-4">
      <v-layout fill-height>

        <v-flex md1 class="grey-margin-right">
          <LeftSidebarComponent class="grey darken-4"/>
        </v-flex>

        <router-view/>

      </v-layout>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LeftSidebarComponent from "@/components/LeftSidebarComponent.vue";

@Component({
  components: { LeftSidebarComponent }
})

export default class App extends Vue {

}

</script>

<style>
@font-face {
  font-family: "Inter-Black";
  src: url('./assets/fonts/Inter-Black.ttf') format('truetype');
}

.font-inter-black {
    font-family: "Inter-Black";
    font-size: 40px;
    font-weight: 30px;
}

.grey-margin-right{
    border-right: 7px solid #797979;
}
</style>