<template>
  <v-app>
    <NavigationDrawerComponent v-if="showSidebar"/>
    <v-main class="grey darken-4">
        <AppBarComponent v-if="$vuetify.breakpoint.width < 500"/>
        <router-view style="transition-duration: 0.5s;"/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import NavigationDrawerComponent from "@/components/NavigationDrawerComponent.vue"
import AppBarComponent from "@/components/AppBarComponent.vue"
import UserInterface from "@/store/UserInterface"
import { getModule } from "vuex-module-decorators"

@Component({
  components: { NavigationDrawerComponent, AppBarComponent }
})

export default class App extends Vue {

  userInterface: UserInterface = getModule(UserInterface)

  get showSidebar() {
    return this.userInterface.sidebar
  }

}

</script>