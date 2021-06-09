<template>
  <v-app>
    <SidebarComponent v-if="showSidebar"/>
    <v-main class="grey darken-4">
        <AppBarComponent/>
        <router-view style="transition-duration: 0.5s;"/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import SidebarComponent from "@/components/SidebarComponent.vue"
import AppBarComponent from "@/components/AppBarComponent.vue"
import UserInterface from "@/store/UserInterface"
import { getModule } from "vuex-module-decorators"

@Component({
  components: { SidebarComponent, AppBarComponent }
})

export default class App extends Vue {

  userInterface: UserInterface = getModule(UserInterface)

  get showSidebar() {
    return this.userInterface.sidebar
  }

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

.neon-button-icon:hover{
  filter: drop-shadow( 0px 0px 5px rgb(255, 255, 255));
  transition-duration: 0.2s;

}


</style>