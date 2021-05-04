<template>
    <v-navigation-drawer dark permanent stateless app width="115px" class="grey darken-4">
        <v-layout column fill-height>
            <v-list dense>
                <v-list-item v-for="(icon, key) in sidebarTopIcons" :key="key">
                    <router-link class="ma-lg-2 d-flex justify-center full-width" :to="`/torrents/${icon.target}`">
                        <v-btn icon>
                            <v-icon size="40%">${{icon.icon}}</v-icon>
                        </v-btn>
                    </router-link>
                </v-list-item>
            </v-list>
            <v-spacer/>

            <v-list dense>
                <v-list-item class="d-flex justify-center mb-lg-5" v-for="(icon, key) in sidebarBottomIcons" :key="key">
                    <router-link class="ma-lg-2 d-flex justify-center full-width" :to="`/torrents/${icon.target}`">
                        <v-btn icon class="full-width full-height">
                            <v-icon size="40%">${{icon.icon}}</v-icon>
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

export default class LeftSidebarComponent extends Vue {

    sidebarTopIcons = [
		{ icon: "star", target: "featured" },
		{ icon: "music", target: "music" },
		{ icon: "video", target: "tv" },
		{ icon: "gamepad", target: "games" },
		{ icon: "books", target: "books" },
    ]
    
    sidebarBottomIcons = [
        { icon: "search", target: "/" },
        { icon: "info", target: "/" },
    ]

}
</script>