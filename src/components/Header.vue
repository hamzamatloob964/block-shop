<template>
  <div :class="$vuetify.breakpoint.xs? 
    'header-main-mobile py-6 d-flex flex-column justify-center align-center':
    'header-main d-flex align-center py-6'"
  >
    <div :class="$vuetify.breakpoint.xs? 'logo mb-4' : 'logo'">
      <span><b>BlockShop</b></span>
    </div>
    <div class="menu">
      <v-btn
        v-for="link in C_links" 
        :key="link.text" 
        router 
        :to="link.route" 
        class="menu-btn"
        text
      >
        {{link.text}}
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
  },
  data () {
    return {
      C_links: [
        { text:'Services',route:'/dashboard/services'},
        { text:'About',route:'/dashboard/about'},
        { text:'Work',route:'/dashboard/work'},
        { text:'Blog',route:'/dashboard/blog'},
        { text:'Connect',route:'/dashboard/connect'},
      ],
    }
  }
}
</script>
<style scoped>
.header-main{
  min-height: 60px;
  width: 100%;
  background-color: white;
}
.header-main-mobile{
  min-height: 60px;
  width: 450px;
  background-color: white;
}
.menu{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
  margin-left: auto;
}
.menu-btn{
  border: none !important;
  background-color: white;
}
.logo{
  margin-left: 20px;
}
</style>
