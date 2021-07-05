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