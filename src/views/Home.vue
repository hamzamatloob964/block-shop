<template>
  <div 
    class="main mt-6 d-flex flex-column justify-center align-center" 
    :class="$vuetify.breakpoint.xs? 'service-main' : 'full-width'"
  >

    <div class="dash-main">

      <div class="home-top d-flex flex-column justify-center align-center">
        <span class="home-heading mb-3 px-2">
          We provided high-quality coding to create a more intuitive experience.
        </span>
        <span :class="$vuetify.breakpoint.xs? 'size-20' : 'title-1'">
          Quality Engineering.
        </span>
        <span :class="$vuetify.breakpoint.xs? 'size-20' : 'title-1'">
          Quality Results.
        </span>
        <div class="d-flex mt-5">
          <LearnBtn 
            :class="$vuetify.breakpoint.xs? 'top-btn-mob' : 'top-btn'" 
            class="btn1-color mr-2 top-btn-univ" 
            btnText="Learn More"
          />
          <LearnBtn 
            class="top-btn-univ btn2-color" 
            :class="$vuetify.breakpoint.xs? 'top-btn-mob' : 'top-btn'"
            btnText="Get Started"
          />
        </div>
      </div>

      <div>
        <div 
          class="pos-relative" 
          :class="$vuetify.breakpoint.xs? 'intersect-space-mob' : 'intersect-space'"
        >
        </div>
        <div 
          class="d-flex flex-column justify-center align-center pos-relative"
          :class="$vuetify.breakpoint.xs? 'intersect-main-mob' : 'intersect-main'"
        >
          <div 
            class="d-flex flex-column justify-center align-center pos-absolute"
            :class="$vuetify.breakpoint.xs? 'intersect-text-mob' : 'intersect-text'"
          >
            <span 
              class="text-style-univ"
              :class="$vuetify.breakpoint.xs? 'text-style-mob' : 'text-style'"
            > 
              Trusted by the 
            </span>
            <span 
              class="text-style-univ"
              :class="$vuetify.breakpoint.xs? 'text-style-mob' : 'text-style'"
            > 
              World's Best Companies 
            </span>
          </div>

          <div 
            class="pos-absolute"
            :class="$vuetify.breakpoint.xs? 'd-flex flex-column justify-center align-center comp-mob' : 'd-flex justify-center align-center comp'"
          >
            <div 
              v-for="(item,i) in compArr" 
              :key="i"
              class="d-flex flex-column justify-center align-center pa-8"
            >
              <div class="mb-4">
                <img 
                  :src="require(`@/assets/${item.img}`)" 
                  alt 
                  class="comp-img-width"
                />    
              </div>
              <span class="comp-text" >{{item.text}}</span>
            </div>
          </div>

          <div 
            class="d-flex justify-center align-center intersect-btn"
            :class="$vuetify.breakpoint.xs? 'intersect-bottom-mob' : 'intersect-bottom'"
          >
            <span class="intersect-btn-text" >Show More</span>
          </div>

          <img src="../assets/home-Intersect .svg" class="img-width"/>
        </div>
      </div>

      <div 
        class="mt-8 px-0 px-sm-6 d-flex justify-center align-center pos-absolute"
        :class="$vuetify.breakpoint.xs? 'dashboard-mob' : 'dashboard'"
      >
        <img src="../assets/dashboard.png" class="img-width"/>
      </div>
    </div>


    <div :class="$vuetify.breakpoint.xs? 'd-flex flex-column pa-10' : 'd-flex pa-10'">
      <div class="parag-text d-flex flex-column mr-4">
        <span :class="$vuetify.breakpoint.xs? 'size-20' : 'size-56'">
          Discovery Consultation
        </span>
        <span 
          class="mt-4 josefin-font size-12" 
        >
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the
          great explorer of the truth, the master-builder of human happiness. 
        </span>
        <div class="d-flex mt-10">
          <div class="dot-point dot-color-1 mr-2"></div>
          <span class="point-text">Because it is pleasure</span>
        </div>

        <div class="d-flex mt-6">
          <div class="dot-point dot-color-2 mr-2"></div>
          <span class="point-text">Because occasionally</span>
        </div>

        <div class="d-flex mt-6">
          <div class="dot-point dot-color-3 mr-2"></div>
          <span class="point-text">Universal speech code</span>
        </div>
      </div>
      <div class="parag-img">
        <img src="../assets/Group43.png" class="img-width"/>
      </div>
    </div>

    <div :class="$vuetify.breakpoint.xs? 'd-flex flex-column pa-10' : 'd-flex pa-10'">
      <div class="parag-img mr-4">
        <img src="../assets/Group46.png" class="img-width"/>
      </div>
      <div class="parag-text d-flex flex-column" :class="$vuetify.breakpoint.xs? 'mt-4' : ''">
        <span :class="$vuetify.breakpoint.xs? 'size-20' : 'size-56'">
          Design Services
        </span>
        <span class="mt-4 josefin-font size-12">
          Whatever throwing we on resolved entrance together graceful. Mirth learn
          it he given. Draw fond rank form nor the day eat. How one dull get busy
          dare far. Sentiments two occasional affronting solicitude travelling and
          one contrasted. Strictly numerous outlived kindness whatever on we no on
          addition. 
        </span>
        <div class="d-flex mt-10">
          <div class="dot-point dot-color-4 mr-2"></div>
          <span class="point-text">Decisively advantages</span>
        </div>

        <div class="d-flex mt-6">
          <div class="dot-point dot-color-3 mr-2"></div>
          <span class="point-text">Agreeable promotion</span>
        </div>

        <div class="d-flex mt-6">
          <div class="dot-point dot-color-1 mr-2"></div>
          <span class="point-text">resources household</span>
        </div>
      </div>
    </div>

    <div :class="$vuetify.breakpoint.xs? 'd-flex flex-column pa-10' : 'd-flex pa-10'">
      <div class="parag-text d-flex flex-column mr-4">
        <span :class="$vuetify.breakpoint.xs? 'size-20' : 'size-56'">
          Coding & Development Services
        </span>
        <span class="mt-4 josefin-font size-12">
          As mr started arrival subject by believe. Dissimilar admiration so
          terminated no in contrasted it. Steepest speaking up attended it as.
          Feel and make two real miss use easy. Ecstatic elegance gay but
          disposed. You high bed wish help call draw side. Made neat an on
          be gave show snug tore.
        </span>
        <div class="d-flex mt-10">
          <div class="dot-point dot-color-3 mr-2"></div>
          <span class="point-text">add entire suffer</span>
        </div>

        <div class="d-flex mt-6">
          <div class="dot-point dot-color-5 mr-2"></div>
          <span class="point-text">Decisively advantages</span>
        </div>

        <div class="d-flex mt-6">
          <div class="dot-point dot-color-2 mr-2"></div>
          <span class="point-text">Universal speech code</span>
        </div>
      </div>
      <div class="parag-img-coding">
        <img src="../assets/Group47.png" class="img-width"/>
      </div>
    </div>

    <div 
      class="pos-relative"
      :class="$vuetify.breakpoint.xs? 'slider-intersect-mob' : 'slider-intersect'"
    >
      <img src="../assets/home-slider-intersect.svg" class="img-width"/>
      <div 
        :class="$vuetify.breakpoint.xs? 'slider-intersect-text-mob' : 'slider-intersect-text'" 
        class="d-flex justify-center align-center pos-absolute"
      >
        <span
          class="text-style-univ"
          :class="$vuetify.breakpoint.xs? 'text-style-mob' : 'text-style'" 
        >
          Our Work Mentioned in Press:
        </span>
      </div>

      <div class="d-flex justify-center carousel-center">
        <div 
          class="caro-slide pos-absolute"
          :class="$vuetify.breakpoint.xs? 'carousel-main-mob' : 'carousel-main'"
        >
          <Carousel3d 
            controlsVisible 
            display="1" 
            border="0"
            :width="$vuetify.breakpoint.xs? 320:750" 
            :height="$vuetify.breakpoint.xs? 190:250"
            class="caro-slide"
          >
            <Slide class="caro-slide" :index="0">
                <img 
                  src="../assets/workSliderGroup48.png" 
                  :class="$vuetify.breakpoint.xs? 'slider-img' : 'comp-img-width'"
                />
            </Slide>
            <Slide class="caro-slide" :index="1">
                <img 
                  src="../assets/workSliderGroup48.png" 
                  :class="$vuetify.breakpoint.xs? 'slider-img' : 'comp-img-width'"
                />
            </Slide>
            <Slide class="caro-slide" :index="2">
                <img 
                  src="../assets/workSliderGroup48.png" 
                  :class="$vuetify.breakpoint.xs? 'slider-img' : 'comp-img-width'"
                />
            </Slide>
          </Carousel3d>
        </div>
      </div>
    </div>

    <div class="slider-space"></div>

    <div class="work-proj d-flex flex-column justify-center align-center">
      <span 
        :class="$vuetify.breakpoint.xs? 'work-text-mob' : 'work-text'" 
        class="mb-5 work-text-univ"
      >
        Recent Work / Projects
      </span>
      <span 
        class="work-text-sub-univ"
        :class="$vuetify.breakpoint.xs? 'work-text-sub-mob' : 'work-text-sub'" 
      >
        “If you don't try this app, you won't become the superhero”
      </span>
      <span 
        class="work-text-sub-univ"
        :class="$vuetify.breakpoint.xs? 'work-text-sub-mob' : 'work-text-sub'" 
      >
        “you were meant to be”
      </span>
    </div>

    <div 
      class="d-flex justify-center align-center"
      :class="$vuetify.breakpoint.xs? 'proj-list-mob my-10' : 'proj-list my-14 px-16'" 
    >
      <CustVueCarousel/>
      
    </div>

    <div 
      :class="$vuetify.breakpoint.xs? 'get-touch-mob' : 'get-touch'" 
      class="d-flex justify-center align-center mb-6 pos-relative"
    >
      <div 
        :class="$vuetify.breakpoint.xs? 'slider-intersect-bottom-mob' : 'slider-intersect-bottom'" 
        class="d-flex justify-center align-center pos-absolute"
      >
        <span 
          class="text-style-univ"
          :class="$vuetify.breakpoint.xs? 'text-style-mob' : 'text-style'" 
        >
          Get in touch form
        </span>
      </div>

      <img 
        src="../assets/home-intersect-img.png" 
        :class="$vuetify.breakpoint.xs? 'absolute-pos-mob' : 'absolute-pos'"
        class="pos-absolute"
      />
      <img 
        src="../assets/home-Intersect .svg" 
        :class="$vuetify.breakpoint.xs? 'home-itersec-mob' : 'comp-img-width'"
      />

      <div 
        :class="$vuetify.breakpoint.xs? 'get-form-mob pa-4' : 'get-form pa-8'"
        class="pos-absolute"
      >
        <v-text-field
          label="Name"
          outlined
          rounded
          dense
        ></v-text-field>
        <v-text-field
          label="E-mail"
          outlined
          rounded
          dense
        ></v-text-field>
        <v-btn 
          rounded 
          :class="$vuetify.breakpoint.xs? 'touch-btn-mob' : 'touch-btn'" 
          color="#817FED"
        >
          <span class="btn-style pa-2">Submit</span>
        </v-btn>
      </div>
    </div>

    

  </div>
</template>

<script>
import LearnBtn from '../components/shared/LearnBtn'
import '../../public/main.css'
import {Carousel3d, Slide} from 'vue-carousel-3d'
import CustVueCarousel from '../components/shared/VueCarousel'

export default {
  name: 'home',
  components: {
    LearnBtn,
    Carousel3d,
    Slide,
    CustVueCarousel
  },
  data () {
    return {
      compArr: [
        {img: 'nike.png', text: 'Nike'},
        {img: 'star-bucks.png', text: 'Starbucks'},
        {img: 'kfc.png', text: 'KFC'},
        {img: 'pepsi.png', text: 'Pepsi'},
        {img: 'coca-cola.png', text: 'Coca-Cola'},
      ],
    }
  },
}
</script>
<style scoped>
.main{
  background: linear-gradient(180deg, rgba(250, 250, 252, 0) 0%, rgba(250, 250, 252, 0) 0.01%, #F0F2F7 100%);
}
.service-main{
  width: 100%;
}
.img{
  width: 100%;
  height: 400px;
}
.rocket-img{
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 430px;
  bottom: 10px;
}
.rocket-img-mob{
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 170px;
  bottom: 30px;
}
.size-12{
  font-size: 12px;
}
.size-20{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
}
.size-56{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  line-height: 67px;
  font-size: 56px;
}
.parag-text{
  max-width: 550px;
  min-height: 300px;
  padding: 10px;
}
.parag-img{
  margin-top: 30px;
  max-width: 550px;
  max-height: 350px;
  
}
.parag-img-coding{
  margin-top: 30px;
  max-width: 550px;
  max-height: 420px;
}
.learn{
  width: 100%;
}
.josefin-font{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 128%;
  letter-spacing: -0.02em;
  color: #ABA7BF;
}
.home-top{
  width: 100%;
}
.home-heading{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.035em;
  color: #34304E;
}
.title-1{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 67px;
  color: #34304E;
}
.top-btn{
  width: 130px;
  height: 30px;
}
.top-btn-mob{
  width: 70px;
  height: 10px;
  font-size: 8px;
}
.top-btn-univ{
  color: #918FEF;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
}
.btn1-color{
  color: #918FEF;
}
.btn2-color{
  color: #69BDD8;
}
.dot-point{
  width: 14px;
  height: 14px;
  border-radius: 33px;
}
.dot-color-1{
  background: #FFD18C;
}
.dot-color-2{
  background: #F08484;
}
.dot-color-3{
  background: #817FED;
}
.dot-color-4{
  background: #69BDD8;
}
.dot-color-5{
  background: #A7C9FB;
}
.point-text{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #34304E;
}
.dashboard{
  top: 240px;
  width: 100%;
  height: 700px;
}
@media only screen and ( min-width: 1900px ) {
  .dashboard img {
    object-fit: contain;
  }
}
.dashboard-mob{
  top: 190px;
  width: 100%;
  height: 400px;
}
.intersect-main{
  width: 100%;
  height: 650px;
}
.intersect-main-mob{
  width: 100%;
  height: 1240px;
}
.intersect-space{
  width: 100%;
  height: 700px;
}
.intersect-space-mob{
  width: 100%;
  height: 430px;
}
.intersect-text{
  width: 100%;
  top: 100px;
}
.intersect-text-mob{
  width: 100%;
  top: 60px;
}
.text-style{
  font-size: 56px;
}
.text-style-mob{
  font-size: 26px;
}
.text-style-univ{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  line-height: 97.25%;
  letter-spacing: 0.01em;
  color: #FFFFFF;
}
.comp{
  width: 100%;
  bottom: 180px;
}
.comp-mob{
  width: 100%;
  bottom: 90px;
}
.comp-img-width{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.comp-text{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #FFFFFF;
}
.intersect-btn{
  position: absolute;
  cursor: pointer;
  width: 144px;
  height: 48px;
  background: #78A9F0;
  border-radius: 48px;
}
.intersect-bottom{
  bottom: 80px;
}
.intersect-bottom-mob{
  bottom: 30px;
}
.intersect-btn-text{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
.intersect-btn:hover{
  -webkit-transform: scale(1.2);
}
.dash-main{
  position: relative;
}
.slider-intersect{
  width: 100%;
  height: 500px;
}
.slider-intersect-mob{
  width: 100%;
  height: 300px;
}
.slider-intersect-text{
  top: 130px;
  width: 100%;
}
.slider-intersect-text-mob{
  top: 60px;
  width: 100%;
}
.slider-intersect-bottom{
  top: 60px;
  width: 100%;
}
.slider-intersect-bottom-mob{
  top: 40px;
  width: 100%;
}
.carousel-main{
  width: 750px;
  height: 270px;
  bottom: -30px;
}
.carousel-main-mob{
  width: 320px;
  height: 190px;
  bottom: -1px;
}
.carousel-center{
  width: 100%;
}
.slider-space{
  width: 100%;
  height: 100px;
}
.work-proj{
  width: 100%;
}
.work-text{
  font-size: 56px;
}
.work-text-mob{
  font-size: 24px;
}
.work-text-univ{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  line-height: 67px;
  color: #34304E;
}
.work-text-sub{
  font-size: 16px;
}
.work-text-sub-mob{
  font-size: 13px;
}
.work-text-sub-univ{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: normal;
  line-height: 140%;
  letter-spacing: -0.035em;
  color: #34304E;
}
.proj-list{
  width: 100%;
  height: 370px;
}
.proj-list-mob{
  width: 400px;
}
.get-touch{
  width: 100%;
  height: 600px;
}
.get-touch-mob{
  width: 100%;
  height: 400px;
}
.home-itersec-mob{
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.absolute-pos{
  width: 650px;
  height: 330px;
  bottom: 100px;
}
.absolute-pos-mob{
  width: 290px;
  height: 280px;
  bottom: 40px;
}
.get-form{
  width: 400px;
  background-color: white;
  border-radius: 35px;
  bottom: 160px;
}
.get-form-mob{
  width: 220px;
  background-color: white;
  border-radius: 35px;
  bottom: 90px;
}
.touch-btn{
  width: 335px;
}
.touch-btn-mob{
  width: 190px;
}
.btn-style{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.03em;
  color: #FFFFFF;
}
/* .pos-relative{
  position: relative;
}
.pos-absolute{
  position: absolute;
} */
</style>