<template>
  <v-app id="app">
    <v-app-bar color="grey darken-4" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Good Story Village"
          class="shrink mr-2"
          contain
          src="./assets/gsvillage-logo-title.png"
          transition="scale-transition"
          width="180"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">VILLA</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">GALLERY</span>
      </v-btn>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">FOR</span>
      </v-btn>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">SURF SCHOOL</span>
      </v-btn>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">CONTACTS</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" icon>
        <v-icon>mdi-facebook-box</v-icon>
      </v-btn>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" icon>
        <v-icon>mdi-telegram</v-icon>
      </v-btn>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" icon>
        <v-icon>mdi-youtube</v-icon>
      </v-btn>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" icon>
        <v-icon>mdi-vk</v-icon>
      </v-btn>

      <!-- <v-app-bar-nav-icon class="hidden-xs-only"></v-app-bar-nav-icon> -->
    </v-app-bar>

    <v-content>
      <VueMainImg />
    </v-content>
  </v-app>
</template>

<script>
import VueMainImg from './components/VueMainImg';

export default {
  name: 'App',

  components: {
    VueMainImg,
  },

  data: () => ({
    //
  }),
};
</script>
