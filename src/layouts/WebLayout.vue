<template>
    <v-app>
        <v-navigation-drawer v-model="sidebar" app dark>
            <v-list nav>
                <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    :to="{ name: item.routeName }"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="primary" dark>
            <span class="hidden-lg-and-up">
                <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
            </span>

            <v-btn
                href="https://github.com/omly97"
                target="_blank"
                text
            >
                <!-- <span class="text-lowercase">omly97</span> -->
                <v-icon>mdi-github</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'WebLayout',
    data: () => ({
        sidebar: true,
        menu: [
            {
                title: 'Accueil',
                routeName: 'welcome',
                icon: 'mdi-soccer'
            },
            {
                title: 'Videos',
                routeName: 'videos-sections',
                icon: 'mdi-youtube'
            },
            {
                title: 'Classement',
                routeName: 'stage',
                icon: 'mdi-table'
            }
        ]
    }),
}
</script>
