<template>
  <div 
    class="d-flex flex-column align-center justify-center pa-4"
    :class="$vuetify.breakpoint.xs? 'footer-main-mobile' : 'footer-main'"
  >
    <div class="menu">
      <v-btn
        v-for="link in C_links" 
        :key="link.text" 
        router 
        :to="link.route" 
        :class="$vuetify.breakpoint.xs? 'menu-btn-mobile' : 'menu-btn'"
        text
      >
        {{link.text}}
      </v-btn>
    </div>
    <v-divider class="my-7 divider" ></v-divider>
    <div class="social-icon-main d-flex align-center justify-center">
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
    </div>
    <div class="terms">2020 privacy:terms</div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {
  },
  data () {
    return {
      C_links: [
        { text:'Services',route:'/dashboard/services'},
        { text:'About',route:'/dashboard/about'},
        { text:'BlockShop',route:'/dashboard/blockshop'},
        { text:'Work',route:'/dashboard/work'},
        { text:'Blog',route:'/dashboard/blog'},
      ],
    }
  }
}
</script>

<style scoped>
.footer-main{
  min-height: 240px;
  width: 100%;
  /* background-color: blue; */
}
.footer-main-mobile{
  min-height: 240px;
  width: 450px;
  /* background-color: blue; */
}
.menu{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
}
.menu-btn{
  border: none !important;
  background-color: white;
}
.menu-btn-mobile{
  border: none !important;
  background-color: white;
  
  font-size: 12px;
}
.logo{
  margin-left: 20px;
}
.divider{
  height: 10px;
  width: 80%;
}
.social-icon-main{
  height: 70px;
  width: 100%;
}
.icon{
  background-color: lightgray;
  height: 50px;
  width: 50px;
  margin: 0px 10px 0px 10px;
  border-radius: 50px;
}
.terms{
  font-size: 10px;
  margin-top: 10px;
}
</style>
