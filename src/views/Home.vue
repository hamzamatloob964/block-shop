<template>
  <div class="main mt-6 d-flex flex-column justify-center align-center" :class="$vuetify.breakpoint.xs? 'service-main' : 'full-width'">

    <div class="home-top d-flex flex-column justify-center align-center">
      <span class="home-heading mb-3">We provided high-quality coding to create a more intuitive experience.</span>
      <span :class="$vuetify.breakpoint.xs? 'size-20' : 'title-1'">Quality Engineering.</span>
      <span :class="$vuetify.breakpoint.xs? 'size-20' : 'title-1'">Quality Results.</span>
      <div class="d-flex mt-5">
        <LearnBtn 
          :class="$vuetify.breakpoint.xs? 'top-btn-mob' : 'top-btn'" 
          class="btn1-color mr-2" 
          btnText="Learn More"
        />
        <LearnBtn 
          class="top-btn btn2-color" 
          :class="$vuetify.breakpoint.xs? 'top-btn-mob' : 'top-btn'"
          btnText="Get Started"
        />
      </div>
    </div>

    <div :class="$vuetify.breakpoint.xs? 'd-flex flex-column pa-10' : 'd-flex pa-10'">
      <div class="parag-text d-flex flex-column mr-4">
        <span :class="$vuetify.breakpoint.xs? 'size-20' : 'size-56'">
          Discovery Consultation
        </span>
        <span class="mt-4 josefin-font" :class="$vuetify.breakpoint.xs? 'size-12' : 'size-12'">
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
        <span class="mt-4 josefin-font" :class="$vuetify.breakpoint.xs? 'size-12' : 'size-12'">
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
        <span class="mt-4 josefin-font" :class="$vuetify.breakpoint.xs? 'size-12' : 'size-12'">
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

    <!-- <div class="tool-img d-flex justify-center mb-2">
      <img src="../assets/MaskGroup.png" class="img-width"/>
        <div 
          class="d-flex justify-center align-center"
          :class="$vuetify.breakpoint.xs? 'tool-btn-mob' : 'tool-btn'"
        >
          <span 
            :class="$vuetify.breakpoint.xs? 'tool-btn-text-mob' : 'tool-btn-text'"
          >
            See Our Work
          </span>
        </div>
    </div>

    <div 
      class="d-flex justify-center" 
      :class="$vuetify.breakpoint.xs? 'rocket-img-cont-mob' : 'rocket-img-cont mb-2'"
    >
      <div 
        class="d-flex justify-center" 
        :class="$vuetify.breakpoint.xs? 'rocket-img-mob' : 'rocket-img mb-2'"
      >
        <img src="../assets/7.png" class="img-width"/>
      </div>
    </div> -->

  </div>
</template>

<script>
import LearnBtn from '../components/shared/LearnBtn'
import '../../public/main.css'
export default {
  name: 'home',
  components: {
    LearnBtn
  }
}
</script>
<style scoped>
.service-main{
  /* width: 450px; */
  width: 100%;
}
.img{
  width: 100%;
  height: 400px;
}
.tool-img{
  position: relative;
  width: 100%;
  object-fit: cover;
  min-height: 100px;
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
.rocket-img-cont{
  position: relative;
  width: 100%;
  height: 400px;
  background-color: white;
}
.rocket-img-cont-mob{
  position: relative;
  width: 100%;
  height: 170px;
  background-color: white;
}
.title{
  position: absolute;
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
.tool-btn{
  position: absolute;
  width: 161px;
  height: 48px;
  bottom: 50px;
  background: #78A9F0;
  border-radius: 48px;
  cursor: pointer;
}
.tool-btn-mob{
  position: absolute;
  width: 100px;
  height: 30px;
  bottom: 25px;
  background: #78A9F0;
  border-radius: 48px;
  cursor: pointer;
}
.tool-btn-text{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
.tool-btn-text-mob{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
.home-top{
  width: 100%;
  /* height: 300px; */
  /* background-color: gray; */
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
  color: #918FEF;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
}
.top-btn-mob{
  width: 70px;
  height: 10px;
  color: #918FEF;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
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
</style>