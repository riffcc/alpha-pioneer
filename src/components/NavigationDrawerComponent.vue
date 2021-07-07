<template>
    <v-navigation-drawer dark app :permanent="$vuetify.breakpoint.width >= 500" :width="getWidthByScreen()" class="grey darken-4">
        <v-layout column fill-height>
            <v-list dense>
                <v-list-item v-for="(icon, key) in sidebarTopIcons" :key="key" class="d-flex justify-center align-center">
                    <v-btn :style="{ 'margin' : `${getMarginByScreen()}` }" icon @click="$router.push(`${icon.target}`).catch((err) => {})">
                        <v-icon :size="getIconSizeByScreen()" class="neon">${{icon.icon}}</v-icon>
                    </v-btn>
                </v-list-item>
            </v-list>

            <v-spacer/>

            <v-list>
                <v-list-item class="d-flex justify-center align-center" v-for="(icon, key) in sidebarBottomIcons" :key="key">
                    <v-btn :style="{ 'margin' : `${getMarginByScreen()}` }" icon class="my-5" @click="$router.push(`${icon.target}`).catch((err) => {})">
                        <v-icon :size="getIconSizeByScreen()" class="neon">${{icon.icon}}</v-icon>
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-layout>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { }
})

export default class NavigationDrawerComponent extends Vue {

    created() {
        console.log(this.$vuetify.breakpoint.smAndUp)
    }

    sidebarTopIcons = [
		{ icon: "star", target: "/" },
		{ icon: "music", target: "/torrents/music" },
		{ icon: "video", target: "/torrents/tv" },
		{ icon: "gamepad", target: "/torrents/games" },
		{ icon: "books", target: "/torrents/books" },
    ]

    sidebarBottomIcons = [
        { icon: "search", target: "" },
        { icon: "info", target: "" },
    ]

    /* Responsive Design Helpers */

    getWidthByScreen() {
        let width: string = "100px"
        switch (this.$vuetify.breakpoint.name) {
            case("xs"): { width = "60px" } break
            case("sm"): { width = "80px" } break
            case("md"): { width = "100px" } break
            case("lg"): { width = "125px" } break
            case("xl"): { width = "150px" } break
        }
        return width
    }

    getIconSizeByScreen() {
        let size: string = "10px"
        switch (this.$vuetify.breakpoint.name) {
            case("xs"): { size = "25px" } break
            case("sm"): { size = "25px" } break
            case("md"): { size = "35px" } break
            case("lg"): { size = "45px" } break
            case("xl"): { size = "60px" } break
        }
        return size
    }

    getMarginByScreen() {
        let size: string = "5px"
        switch (this.$vuetify.breakpoint.name) {
            case("sm"): { size = "2px" } break
            case("md"): { size = "5px" } break
            case("lg"): { size = "10px" } break
            case("xl"): { size = "20px" } break
        }
        return size
    }

}
</script>