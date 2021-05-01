<template>
    <v-navigation-drawer dark permanent stateless app width="115px" class="grey darken-4">
        <v-layout column fill-height>
            <v-list dense>
                <v-list-item class="d-flex justify-center mb-lg-5" v-for="(icon, key) in sidebarTopIcons" :key="key">
                    <v-icon color="white" size="90%">${{icon.icon}}</v-icon>
                </v-list-item>
            </v-list>
            <v-spacer/>
            <v-list dense>
                <v-list-item class="d-flex justify-center mb-lg-5" v-for="(icon, key) in sidebarBottomIcons" :key="key">
                    <v-icon color="white" size="90%">${{icon.icon}}</v-icon>
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
		{ icon: "star", target: "/home" },
		{ icon: "music", target: "/home" },
		{ icon: "video", target: "/home" },
		{ icon: "gamepad", target: "/home" },
		{ icon: "books", target: "/home" },
    ]
    
    sidebarBottomIcons = [
        { icon: "search", target: "/home" },
        { icon: "info", target: "/home" },
    ]

}
</script>