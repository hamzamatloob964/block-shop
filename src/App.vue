<template>
  <v-app class="main">
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.main{
  /* width: 100vw;
  height: 100vh; */
}
</style>
