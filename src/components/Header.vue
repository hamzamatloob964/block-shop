<template>
  <div :class="$vuetify.breakpoint.xs? 
    'header-main-mobile py-6 d-flex flex-column justify-center align-center':
    'header-main d-flex align-center py-6'"
  >
    <div :class="$vuetify.breakpoint.xs? 'mb-4' : 'logo'">
      <span class="berlin-font">blockShop</span>
    </div>
    <div :class="$vuetify.breakpoint.xs? 'd-flex justify-center align-center':'menu'">
      <span
        v-for="link in C_links" 
        :key="link.text" 
        router 
        :to="link.route" 
        class="menu-btn"
        @click="onClick(link.route)"
      >
        {{link.text}}
      </span>
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
        { text:'Services',route:'/services'},
        { text:'About',route:'/about'},
        { text:'Work',route:'/work'},
        { text:'Blog',route:'/blog'},
        { text:'Connect',route:'/connect'},
      ],
    }
  },
  methods: {
    onClick (url) {
      this.$router.push(url)
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
  margin-right: 80px;
}
.menu-btn{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #34304E;
  padding: 10px;
  cursor: pointer;
}
.menu-btn:hover {
   -webkit-transform: scale(1.2);
   font-weight: bolder;
}
span::after {
  background-color: #69BDD8;
  content: "";
  width: 0;
  height: 3px;
  left: 0;
  bottom: 0;
  transition: width 0.35s ease 0s;
  position: absolute;
}
span:hover::after {
  width: 100%;
}
.logo{
  margin-left: 140px;
}
.berlin-font{
  font-family: "Berlin Sans FB Regular";
  color: #34304E;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 24px;
}
</style>
