<template>
  <v-app>

    <v-main class="grey darken-4">
        
        <LeftSidebarComponent/>
        
        <router-view/>


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

.full-width {
  width: 100%;
}

.full-height {
  height: 100%;
}

.grey-margin-right{
    border-right: 50px solid #797979;
}
</style>