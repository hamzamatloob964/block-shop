<template>
  <div>
    <div v-if="$vuetify.breakpoint.xs" class="d-flex align-center my-4 px-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="top-logo" @click="onLogoCLick">
        <span class="berlin-font">blockShop</span>
      </div>
      <v-navigation-drawer
        v-model="drawer"
        temporary
        app
      >
        <v-list
          nav
          dense
        >
          <div class="pa-2" @click="onLogoCLick">
            <span class="berlin-font">blockShop</span>
          </div>
          <v-divider class="my-2 divider" ></v-divider>
          <v-list-item-group
            v-model="group"
          >
            <v-list-item
              v-for="(link,i) in C_links" 
              :key="link.text" 
              @click="onClick(link.route,i)"
            >
              <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div v-else :class="$vuetify.breakpoint.xs? 
      'header-main-mobile py-6 d-flex flex-column justify-center align-center':
      'header-main d-flex align-center py-6'"
    >
      <div :class="$vuetify.breakpoint.xs? 'mb-4' : 'logo'" @click="onLogoCLick">
        <span class="berlin-font">blockShop</span>
      </div>
      <div :class="$vuetify.breakpoint.xs? 'd-flex justify-center align-center':'menu'">
        <span
          v-for="(link,i) in C_links" 
          :key="link.text" 
          router 
          :to="link.route" 
          class="menu-btn"
          @click="onClick(link.route,i)"
          :id="i"
        >
          {{link.text}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import '../../public/main.css'
export default {
  name: 'Header',
  components: {
  },
  data () {
    return {
      drawer: false,
      group: null,
      C_links: [
        { text:'Services',route:'/services'},
        { text:'About',route:'/about'},
        { text:'Work',route:'/work'},
        { text:'Blog',route:'/blog'},
        { text:'Connect',route:'/connect'},
      ],
      index: -1
    }
  },
  computed: {
    ...mapState([
      'navIndex'
    ])
  },
  methods: {
    ...mapActions([
      'updateIndex',
    ]),
    onClick (url,id) {
      if(this.index >= 0){
        let remEle = document.getElementById(this.index);
        remEle.classList.remove("navbar");
        this.index = id
      }
      let addEle = document.getElementById(id);
      this.index = id
      addEle.classList.add("navbar");
      //document.getElementById(id).setAttribute("class", "navbar");
      this.$router.push(url)
      this.updateIndex(id)
    },
    onLogoCLick () {
      this.$router.push('/')
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>
<style scoped>
.top-logo{
  margin: 0 auto;
  padding-right: 36px;
}
.header-main{
  min-height: 60px;
  width: 100%;
  background-color: white;
}
.header-main-mobile{
  min-height: 60px;
  /* width: 450px; */
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
  cursor: pointer;
  font-family: "Berlin Sans FB Regular";
  color: #34304E;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 24px;
}
/* .navbar{
  -webkit-transform: scale(1.2);
   font-weight: bold;
   padding: 5px;
} */
.navbar::after {
  background-color: #69BDD8;
  content: "";
  width: 0;
  height: 3px;
  left: 0;
  bottom: 0;
  transition: width 0.35s ease 0s;
  position: absolute;
}
.navbar:hover::after {
  width: 100%;
}
.divider{
  width: 100%;
  height: 10px;
}
</style>
