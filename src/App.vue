<template>
  <v-app>
    <!-- status overlay -->
    <v-overlay absolute :opacity="0.75" :value="$store.state.error">
      <v-container fluid="">
        <v-alert type="warning">
          An error has occured, please try again later.
        </v-alert>
      </v-container>
    </v-overlay>

    <!-- nav -->
    <Navigation />

    <v-main>
      <!-- report -->
      <Report v-if="$store.state.accessToken" class="fill-height" />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
import Report from '@/components/Report'

export default {
  components: {
    Navigation,
    Report,
  },

  created() {
    this.$store.dispatch('authenticate')
  },
}
</script>
