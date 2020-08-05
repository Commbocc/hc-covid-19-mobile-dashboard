<template>
  <nav>
    <!-- nav button -->
    <v-btn
      fixed
      color="primary"
      fab
      dark
      top
      right
      @click="
        $store.state.showNavigationDrawer = !$store.state.showNavigationDrawer
      "
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <!-- drawer -->
    <v-navigation-drawer
      v-model="$store.state.showNavigationDrawer"
      floating
      temporary
      right
      app
      overflow
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            COVID-19 Dashbaord
          </v-list-item-title>
          <v-list-item-subtitle>
            Hillsborough County
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="page in pages"
          :key="page.name"
          link
          @click="goToPage(page.name)"
        >
          <v-list-item-icon>
            <v-icon>mdi-file-document-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ page.displayName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- back to hcflgov -->
      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            href="http://hcflgov.net"
            target="_blank"
            outlined
            color="#FF6F5B"
            block
            >HCFLGOV.net</v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    pages: (state) => state.pages,
  }),
  methods: mapActions(['goToPage']),
}
</script>
