<template>
  <div 
    class="d-flex flex-column align-center justify-center pa-4 mt-4"
    :class="$vuetify.breakpoint.xs? 'footer-main-mobile' : 'footer-main'"
  >
    <div class="menu">
      <span
        v-for="(link,i) in C_links" 
        :key="link.text" 
        router 
        :to="link.route" 
        :class="$vuetify.breakpoint.xs? 'menu-btn' : 'menu-btn'"
        @click="onClick(link.route,i)"
        :id="i"
      >
        {{link.text}}
      </span>
    </div>

    <v-divider class="my-7 divider" ></v-divider>

    <div class="social-icon-main d-flex align-center justify-center">
      <v-btn outlined fab color="indigo" class="mr-4 btn-hover">
        <img src="../assets/messangerSvg.svg" />
      </v-btn>
      <v-btn outlined fab color="indigo" class="mr-4 btn-hover">
        <img src="../assets/instagram.png" />
      </v-btn>
      <v-btn outlined fab color="indigo" class="mr-4 btn-hover">
        <img src="../assets/fb.png" />
      </v-btn>
      <v-btn outlined fab color="indigo" class="mr-4 btn-hover">
        <img src="../assets/twitter.png" />
      </v-btn>
      <v-btn outlined fab color="indigo" class="mr-4 btn-hover">
        <img src="../assets/youtube.png" />
      </v-btn>
      <!-- <div class="icon">
        <img src="../assets/Group79.png" class="img-width"/>
      </div>
      <div class="icon">
        <img src="../assets/Group80.png" class="img-width"/>
      </div>
      <div class="icon">
        <img src="../assets/Group81.png" class="img-width"/>
      </div>
      <div class="icon">
        <img src="../assets/Group82.png" class="img-width"/>
      </div>
      <div class="icon">
        <img src="../assets/Group83.png" class="img-width"/>
      </div> -->
    </div>
    <div class="terms mb-6"><span class="mr-4">© 2010-2020</span>  Privacy — Terms</div>
  </div>
</template>

<script>
import '../../public/main.css'
export default {
  name: 'Footer',
  components: {
  },
  data () {
    return {
      C_links: [
        { text:'Services',route:'/services'},
        { text:'About',route:'/about'},
        { text:'BlockShop',route:'/blockshop'},
        { text:'Work',route:'/work'},
        { text:'Blog',route:'/blog'},
      ],
    }
  },
  methods: {
    // onClick (url,id) {
    //   console.log("footer navbar.....")
    //   if(this.index >= 0){
    //     let remEle = document.getElementById(this.index);
    //     remEle.classList.remove("navbar");
    //     this.index = id
    //   }
    //   let addEle = document.getElementById(id);
    //   this.index = id
    //   addEle.classList.add("navbar");
    //   //document.getElementById(id).setAttribute("class", "navbar");
    //   this.$router.push(url)
    //   //this.updateIndex(id)
    // },
    onClick (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.footer-main{
  min-height: 240px;
  width: 100%;
  background: linear-gradient(180deg, rgba(250, 250, 252, 0) 0%, #F0F2F7 100%), #FFFFFF;
  /* background-color: blue; */
}
.footer-main-mobile{
  min-height: 240px;
  width: 450px;
  background: linear-gradient(180deg, rgba(250, 250, 252, 0) 0%, #F0F2F7 100%), #FFFFFF;
  /* background-color: blue; */
}
.menu{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  height: 50px;
  width: 50px;
  margin: 0px 10px 0px 10px;
  border-radius: 50px;
  cursor: pointer;
}
.terms{
  font-size: 10px;
  margin-top: 70px;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #34304E;
}
.social-btn{
  background-color: blue;
}
.btn-hover:hover{
  background-color: #817FED;
}
</style>
