<template>
    <div class="full-width">
        <v-container fluid>
            <perfect-scrollbar :style="{ 'height': `${$vuetify.breakpoint.height}px` }">
                <v-row no-gutters>
                        <v-col v-for="(torrent, key) in 20" :key="key" class="d-flex justify-center">
                            <CardComponent class="ma-1" :torrent="{ attributes: { name: torrent } }"/>
                        </v-col>
                </v-row>
            </perfect-scrollbar>
        </v-container>


        <v-card flat width="300px" class="ma-1">

            <v-card-title>
                User Interface
            </v-card-title>

            <v-list class="d-flex justify-center flex-column">
                <v-list-item>
                    <v-btn depressed width="100%" dark class="indigo ma-1" @click="toggleSidebar(true)">
                        Show Sidebar
                    </v-btn>

                </v-list-item>

                <v-list-item>
                    <v-btn depressed width="100%" dark class="indigo ma-1" @click="toggleSidebar(false)">
                        Hide Sidebar
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-card>

        <v-card flat width="300px" class="ma-1">

            <v-card-title>
                Feature Tests
            </v-card-title>

            <v-list class="d-flex justify-center flex-column">
                <v-list-item>
                    <router-link class="full-width ma-1 text-decoration-none" :to="`/movie/QmYN8HXLT7oguXYmVp3qZcVgASh1G8R3dJcUymXuWT2ZwA`">
                        <v-btn depressed width="100%" dark class="indigo ma-1">
                            Movie
                        </v-btn>
                    </router-link>
                </v-list-item>

                <v-list-item>
                    <router-link class="full-width ma-1 text-decoration-none" :to="`/`">
                        <v-btn depressed width="100%" dark class="indigo ma-1">
                            Music
                        </v-btn>
                    </router-link>
                </v-list-item>
            </v-list>
        </v-card>

    </div>
</template>

<script lang="ts">

import UserInterface from "@/store/UserInterface"
import { Component, Vue, Watch } from "vue-property-decorator"
import { getModule } from "vuex-module-decorators"

import CardComponent from "@/components/CardComponent.vue"

@Component({
    components: { CardComponent }
})

export default class TestView extends Vue {

    getHeight = this.$vuetify.breakpoint.height

    userInterface: UserInterface = getModule(UserInterface)

    toggleSidebar(v: boolean) {
        this.userInterface.showSidebar(v);
    }

}

</script>

<style>
/*.ps {
    height: 800px;
}*/
</style>