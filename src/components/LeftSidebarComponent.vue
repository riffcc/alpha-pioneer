<template>
    <v-card tile flat height="100%" dark>
        <v-navigation-drawer permanent absolute class="grey darken-4">
            <v-layout column fill-height>
                <v-list dense>
                    <v-list-item class="d-flex justify-center" v-for="(icon, key) in sidebarTopIcons" :key="key">
                        <p>{{icon.icon}}</p>
                    </v-list-item>
                </v-list>

                <v-spacer/>

                <v-list dense>
                    <v-list-item class="d-flex justify-center" v-for="(icon, key) in sidebarBottomIcons" :key="key">
                        <p>{{icon.icon}}</p>
                    </v-list-item>
                </v-list>
            </v-layout>
        </v-navigation-drawer>
        
    </v-card>
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
		{ icon: "game", target: "/home" },
		{ icon: "book", target: "/home" },
    ]
    
    sidebarBottomIcons = [
        { icon: "info", target: "/home" },
        { icon: "config", target: "/home" },
        { icon: "search", target: "/home" },
        { icon: "menu", target: "/home" },
    ]

}
</script>