<template>
    <v-navigation-drawer dark app :permanent="$vuetify.breakpoint.mdAndUp" width="100px" class="d-none d-md-flex grey darken-4">
        <v-layout column fill-height>
            <v-list dense>
                <v-list-item v-for="(icon, key) in sidebarTopIcons" :key="key">
                    <router-link class="ma-lg-2 d-flex justify-center full-width" :to="`${icon.target}`">
                        <v-btn icon>
                            <v-icon x-large class="neon-button-icon">${{icon.icon}}</v-icon>
                        </v-btn>
                    </router-link>
                </v-list-item>
            </v-list>
            <v-spacer/>

            <v-list dense>
                <v-list-item class="d-flex justify-center mb-lg-5" v-for="(icon, key) in sidebarBottomIcons" :key="key">
                    <router-link class="ma-lg-2 d-flex justify-center full-width" :to="`/torrents/${icon.target}`">
                        <v-btn icon>
                            <v-icon x-large class="neon-button-icon">${{icon.icon}}</v-icon>
                        </v-btn>
                    </router-link>
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

export default class SidebarComponent extends Vue {

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

}
</script>