<template>
  <div 
    class="mt-6 d-flex flex-column justify-center align-center" 
    :class="$vuetify.breakpoint.xs? 'work-main' : 'full-width'"
  >
    <div class="mb-2">
      <span 
        :class="$vuetify.breakpoint.xs? 'work-title-mob' : 'work-title'"
      >
        Project Title
      </span>
    </div>

    <div class="d-flex justify-center align-center">
      <span :class="$vuetify.breakpoint.xs? 'work-sub-title-mob' : 'work-sub-title'">
        We provided high-quality coding to create a more intuitive experience.
      </span>
    </div>

    <div class="mt-12" :class="$vuetify.breakpoint.xs? 'work-mask-mob' : 'work-mask'">
      <img src="../assets/WorkMaskGroup .png" class="img-width"/>
    </div>

    <div 
      class="d-flex justify-center align-center" 
      :class="$vuetify.breakpoint.xs? 'main-img-mob' : 'main-img'"
    >
      <div :class="$vuetify.breakpoint.xs? 'work-intersect-mob' : 'work-intersect'">
        <img 
          src="../assets/WorkIntersect.png" 
          :class="$vuetify.breakpoint.xs? 'work-intersect-mob' : 'work-intersect'"
        />
      </div>
      <div 
        class="d-flex flex-column justify-center align-center curve-main"
        :class="$vuetify.breakpoint.xs? 'curve-main-mob' : 'curve-main'"
      >
        <span :class="$vuetify.breakpoint.xs? 'curve-title-mob mb-3' : 'curve-title mb-8'">
          Lorem Ipsum
        </span>
        <span :class="$vuetify.breakpoint.xs? 'curve-text-mob' : 'curve-text'">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
        </span>
      </div>
      <div :class="$vuetify.breakpoint.xs? 'carousel-main-mob' : 'carousel-main'">
        <Carousel3d 
          controlsVisible 
          display="1" 
          border="0"
          :width="$vuetify.breakpoint.xs? 320:600" :height="$vuetify.breakpoint.xs? 190:300"
        >
          <Slide class="caro-slide" :index="0">
              <img 
                src="../assets/workSliderGroup48.png" 
                :class="$vuetify.breakpoint.xs? 'slider-img' : 'slider-img'"
              />
          </Slide>
          <Slide class="caro-slide" :index="1">
              <img 
                src="../assets/workSliderGroup48.png" 
                :class="$vuetify.breakpoint.xs? 'slider-img' : 'slider-img'"
              />
          </Slide>
          <Slide class="caro-slide" :index="2">
              <img 
                src="../assets/workSliderGroup48.png" 
                :class="$vuetify.breakpoint.xs? 'slider-img' : 'slider-img'"
              />
          </Slide>
        </Carousel3d>
      </div>
    </div>
    <div :class="$vuetify.breakpoint.xs? 'caro-space-mob' : 'caro-space'"></div>

    <div 
      class="d-flex justify-center rocket-img mb-2" 
    >
      <img src="../assets/7.png" class="rocket-img"/>
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
  width: 450px;
}
.rocket-img{
  width: 100%;
  max-height: 430px;
}
.work-title{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 67px;
  color: #34304E;
}
.work-title-mob{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #34304E;
}
.work-sub-title{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #34304E;
}
.work-sub-title-mob{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.035em;
  color: #34304E;
}
.work-intersect{
  position: absolute;
  width: 100%;
  height: 650px;
  bottom: 2px;
}
.work-intersect-mob{
  position: absolute;
  width: 100%;
  height: 450px;
  bottom: 2px;
}
.work-intersect-white{
  width: 100%;
  max-height: 500px;
  background-color: gray
}
.work-mask{
  max-width: 800px;
  max-height: 520px;
}
.work-mask-mob{
  width: 300px;
  height: 300px;
}
.main-img{
  position: relative;
  width: 100%;
  background-color: white;
  height: 560px;
}
.main-img-mob{
  position: relative;
  width: 100%;
  background-color: white;
  height: 400px;
}
.curve-title{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 97.25%;
  letter-spacing: 0.01em;
  color: #FFFFFF;
}
.curve-title-mob{
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
}
.curve-main{
  position: absolute;
  width: 800px;
  top: 0px;
}
.curve-main-mob{
  position: absolute;
  width: 400px;
  top: 0px;
}
.curve-text{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 128%;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
.curve-text-mob{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
.carousel-main{
  position: absolute;
  width: 600px;
  height: 320px;
  bottom: -50px;
}
.carousel-main-mob{
  position: absolute;
  width: 320px;
  height: 190px;
  bottom: -1px;
}
.caro-slide{
  border-radius: 35px;
}
.caro-space{
  width: 100%;
  height: 80px;
  background-color:white ;
}
.caro-space-mob{
  width: 100%;
  height: 50px;
  background-color:white ;
}
.slider-img{
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>