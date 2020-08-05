<template>
  <v-app class="main">
    <router-view />
  </v-app>
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
  /* @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans&display=swap'); */
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
/* @font-face {
  font-family: "Berlin Sans FB Demi";
  src: local("Berlin Sans FB Demi"),
  url(./fonts/Berlin_Sans_FB_Demi_Bold/BerlinSansFBDemiBold.ttf) format("truetype");
} */
.main{
  /* max-width: 550px !important;
  height: 100%; */
}
</style>
