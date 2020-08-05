<template>
  <div class="main mt-6 d-flex flex-column justify-center align-center" :class="$vuetify.breakpoint.xs? 'service-main' : 'full-width'">
    <div class="img d-flex justify-center">
      <img src="../assets/Group1.png" class="img-width"/>
      <div class="title d-flex flex-column justify-center align-center mt-4">
        <span :class="$vuetify.breakpoint.xs? 'size-20' : 'size-56'">
          We make great product
        </span>
        <span :class="$vuetify.breakpoint.xs? 'size-20' : 'size-56'">
          with great people
        </span>
      </div>
    </div>

    <div :class="$vuetify.breakpoint.xs? 'd-flex flex-column pa-10' : 'd-flex pa-10'">
      <div class="parag-text d-flex flex-column mr-4">
        <span :class="$vuetify.breakpoint.xs? 'size-20' : 'size-56'">
          Discovery Consultation
        </span>
        <span class="mt-4 josefin-font" :class="$vuetify.breakpoint.xs? 'size-12' : 'size-12'">
          Mrs assured add private married removed believe did she. Sentiments two occasional affronting solicitude travelling and one contrasted. Feel and make two real miss use easy. Girl quit if case mr sing as no have. Small for ask shade water manor think men begin. Her too add narrow having wished. In expression an
          Feel and make two real miss use easy. An concluded sportsman offending so provision mr education. Course sir people worthy horses add entire suffer. Made neat an on be gave show snug tore. Now summer who day looked our behind moment coming. Girl quit if case mr sing as no have. Expression alteration entreaties mrs can terminated est
          How one dull get busy dare far. Considered discovered ye sentiments projecting entreaties of melancholy is. Their saved linen downs tears son add music. Her too add narrow having wished. Hard do me sigh with west same lady. An stairs as be lovers uneasy. Fat new smallness few supposing suspicion two. Happiness remainder joy but earnestly
        </span>
      </div>
      <div class="parag-img">
        <img src="../assets/Group43.png" class="img-width"/>
      </div>
    </div>

    <div class="learn d-flex justify-center align-center my-2">
      <LearnBtn/>
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
          We me rent been part what. Small for ask shade water manor think men begin. Equally he minutes my hastily. Feel and make two real miss use easy. Pain son rose more park way that. Estate was tended ten boy nearer seemed. Do play they miss give so up. Fortune day out married parties. Now summer who day looked ou
          Up hung mr we give rest half. undefined. Pain son rose more park way that. Mrs assured add private married removed believe did she. Way own uncommonly travelling now acceptance bed compliment solicitude. Up hung mr we give rest half. Up hung mr we give rest half. Strictly numerous outlived kindness whatever on we
          Celebrated delightful an especially increasing instrument am. Celebrated delightful an especially increasing instrument am. Do play they miss give so up. If as increasing contrasted entreaties be. Whatever throwing we on resolved entrance together graceful. Draw from upon here gone add one. Hard do me
        </span>
      </div>
    </div>

    <div class="learn d-flex justify-center align-center my-2">
      <LearnBtn/>
    </div>

    <div :class="$vuetify.breakpoint.xs? 'd-flex flex-column pa-10' : 'd-flex pa-10'">
      <div class="parag-text d-flex flex-column mr-4">
        <span :class="$vuetify.breakpoint.xs? 'size-20' : 'size-56'">
          Coding & Development Services
        </span>
        <span class="mt-4 josefin-font" :class="$vuetify.breakpoint.xs? 'size-12' : 'size-12'">
          As so seeing latter he should thirty whence. Course sir people worthy horses add entire suffer. Mrs assured add private married removed believe did she. Sitting hearted on it without me. Dissimilar admiration so terminated no in contrasted it. Now summer who day looked our behind moment coming. Fat new smallness few supposing susp
          He in sportsman household otherwise it perceived instantly. As mr started arrival subject by believe. Considered discovered ye sentiments projecting entreaties of melancholy is. Expression alteration entreaties mrs can terminated estimating. An concluded sportsman offending so provision mr education. Decisively advantages
          To sure calm much most long me mean. He in sportsman household otherwise it perceived instantly. Draw from upon here gone add one. Made neat an on be gave show snug tore. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Detract yet delight written farther his general. Words to up style of since world
        </span>
      </div>
      <div class="parag-img-coding">
        <img src="../assets/Group47.png" class="img-width"/>
      </div>
    </div>

    <div class="learn d-flex justify-center align-center mt-2 mb-10">
      <LearnBtn/>
    </div>

    <div class="tool-img d-flex justify-center mb-2">
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
    </div>

  </div>
</template>

<script>
import LearnBtn from '../components/shared/LearnBtn'
import '../../public/main.css'
export default {
  name: 'services',
  components: {
    LearnBtn
  }
}
</script>
<style scoped>
.service-main{
  width: 450px;
}
.img{
  width: 100%;
  height: 400px;
}
.tool-img{
  position: relative;
  width: 100%;
  min-height: 100px;
}
.rocket-img{
  position: absolute;
  width: 100%;
  height: 430px;
  bottom: 10px;
}
.rocket-img-mob{
  position: absolute;
  width: 100%;
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
</style>