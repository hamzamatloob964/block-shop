<template>
  <v-container :class="$vuetify.breakpoint.xs && 'no-padding'" class="main-cont">
    <v-app>
      <router-view />
    </v-app>
  </v-container>
</template>

<script>
import '../public/main.css'
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style>
body{
  background: linear-gradient(180deg, rgba(250, 250, 252, 0) 0%, rgba(250, 250, 252, 0) 0.01%, #F0F2F7 100%);
}
.theme--light.v-application {
  background-color: unset !important;
}
@font-face {
  font-family: "Alegreya Sans";
  src: local("Alegreya Sans"),
  url(./fonts/Alegreya_Sans/AlegreyaSans-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Berlin Sans FB Regular";
  src: local("Berlin Sans FB Regular"),
  url(./fonts/Berlin_Sans_FB_Regular/BerlinSansFBRegular.ttf) format("truetype");
}
@font-face {
  font-family: "Josefin Sans";
  src: local("Josefin Sans"),
  url(./fonts/Josefin_Sans/static/JosefinSans-Regular.ttf) format("truetype");
}
.no-padding {
  padding: 0px !important;
}
</style>
