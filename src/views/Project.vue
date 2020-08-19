<template>
  <div 
    class="mt-6 d-flex flex-column justify-center align-center" 
    :class="$vuetify.breakpoint.xs? 'work-main' : 'full-width'"
  >
    <div class="mb-2">
      <span 
        :class="$vuetify.breakpoint.xs? 'work-title-mob' : 'work-title'"
        class="work-title-univ"
      >
        Project Title
      </span>
    </div>

    <div class="d-flex justify-center align-center">
      <span 
        :class="$vuetify.breakpoint.xs? 'work-sub-title-mob pa-2' : 'work-sub-title'"
        class="work-sub-title-univ"
      >
        We provided high-quality coding to create a more intuitive experience.
      </span>
    </div>

    <div class="mt-12" :class="$vuetify.breakpoint.xs? 'work-mask-mob' : 'work-mask'">
      <img src="../assets/WorkMaskGroup .png" class="work-mast-width"/>
    </div>

    <div 
      class="d-flex justify-center align-center pos-relative" 
      :class="$vuetify.breakpoint.xs? 'main-img-mob' : 'main-img'"
    >
      <div 
        :class="$vuetify.breakpoint.xs? 'work-intersect-mob' : 'work-intersect'"
        class="pos-absolute"
      >
        <img 
          src="../assets/WorkIntersect.png" 
          :class="$vuetify.breakpoint.xs? 'work-intersect-mob' : 'work-intersect'"
          class="pos-absolute"
        />
      </div>
      <div 
        class="d-flex flex-column justify-center align-center pos-absolute"
        :class="$vuetify.breakpoint.xs? 'curve-main-mob' : 'curve-main'"
      >
        <span 
          :class="$vuetify.breakpoint.xs? 'curve-title-mob mb-3' : 'curve-title mb-8'"
          class="curve-title-univ"
        >
          Lorem Ipsum
        </span>
        <span 
          :class="$vuetify.breakpoint.xs? 'curve-text-mob px-2' : 'curve-text'"
          class="curve-text-univ"
        >
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
        </span>
      </div>
      <div 
        :class="$vuetify.breakpoint.xs? 'carousel-main-mob' : 'carousel-main'"
        class="pos-absolute"
      >
        <Carousel3d 
          controlsVisible 
          display="1" 
          border="0"
          class="caro-slide"
          :width="$vuetify.breakpoint.xs? 320:600" :height="$vuetify.breakpoint.xs? 190:300"
        >
          <Slide class="caro-slide" :index="0">
              <img 
                src="../assets/workSliderGroup48.png" 
                class="slider-img"
              />
          </Slide>
          <Slide class="caro-slide" :index="1">
              <img 
                src="../assets/workSliderGroup48.png" 
                class="slider-img"
              />
          </Slide>
          <Slide class="caro-slide" :index="2">
              <img 
                src="../assets/workSliderGroup48.png" 
                class="slider-img"
              />
          </Slide>
        </Carousel3d>
      </div>
    </div>

    <div :class="$vuetify.breakpoint.xs? 'caro-space-mob' : 'caro-space'"></div>

    <div 
      class="d-flex justify-center mb-2 pos-relative" 
      :class="$vuetify.breakpoint.xs? 'rocket-img-mob' : 'rocket-img'"
    >
      <img src="../assets/rocket.svg" class="img-width"/>
      <span 
        :class="$vuetify.breakpoint.xs? 'rocket-text-mob' : 'rocket-text'"
        class="rocket-text-univ pos-absolute"
      >
        Want to build with us?
      </span>
      <div 
        class="d-flex justify-center align-center on-hover pos-absolute"
        :class="$vuetify.breakpoint.xs? 'rocket-btn-mob' : 'rocket-btn'"
      >
        <span 
          :class="$vuetify.breakpoint.xs? 'rocket-btn-text-mob' : 'tool-btn-text'"
        >
          Connect
        </span>
      </div>
    </div>

  </div>
</template>

<script>
import '../../public/main.css'
import {Carousel3d, Slide} from 'vue-carousel-3d'
export default {
  name: 'project',
  components: {
    Carousel3d,
    Slide
  }
}
</script>
<style scoped>
.work-main{
  width: 100%;
}
.rocket-img{
  width: 100%;
  height: 450px;
}
.rocket-img-mob{
  width: 100%;
  height: 170px;
}
.work-title{
  font-size: 56px;
  line-height: 67px;
}
.work-title-mob{
  font-size: 20px;
}
.work-title-univ{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  color: #34304E;
}
.work-sub-title{
  font-size: 16px;
  line-height: 16px;
}
.work-sub-title-mob{
  font-size: 14px;
}
.work-sub-title-univ{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.035em;
  color: #34304E;
}
.work-intersect{
  width: 100%;
  height: 650px;
  bottom: 2px;
}
.work-intersect-mob{
  width: 100%;
  height: 450px;
  bottom: 2px;
}
.work-mask{
  width: 100%;
  height: 520px;
}
.work-mask-mob{
  width: 100%;
  height: 300px;
}
.main-img{
  width: 100%;
  height: 560px;
}
.main-img-mob{
  width: 100%;
  height: 400px;
}
.curve-title{
  font-size: 56px;
  line-height: 97.25%;
}
.curve-title-mob{
  font-size: 20px;
}
.curve-title-univ{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.01em;
  color: #FFFFFF;
}
.curve-main{
  width: 800px;
  top: 0px;
}
.curve-main-mob{
  width: 100%;
  top: 0px;
}
.curve-text{
  font-size: 16px;
  line-height: 128%;
}
.curve-text-mob{
  font-size: 10px;
}
.curve-text-univ{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
.carousel-main{
  width: 600px;
  height: 320px;
  bottom: -50px;
}
.carousel-main-mob{
  width: 320px;
  height: 190px;
  bottom: -1px;
}
.caro-space{
  width: 100%;
  height: 80px;
}
.caro-space-mob{
  width: 100%;
  height: 50px;
}
.slider-img{
  width: 100%;
  height: 100%;
}
.rocket-text{
  top: 155px;
  font-size: 56px;
}
.rocket-text-mob{
  top: 40px;
  font-size: 20px;
}
.rocket-text-univ{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  line-height: 61px;
  letter-spacing: 0.01em;
  color: #34304E;
}
.rocket-btn{
  width: 120px;
  height: 38px;
  bottom: 145px;
  background: #817FED;
  border-radius: 48px;
  cursor: pointer;
}
.rocket-btn-mob{
  width: 50px;
  height: 20px;
  bottom: 50px;
  background: #817FED;
  border-radius: 48px;
  cursor: pointer;
}
.work-mast-width{
  width: 100%;
  height: 100%;
}
</style>