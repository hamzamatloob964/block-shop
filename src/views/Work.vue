<template>
  <div 
    class="mt-6 d-flex flex-column justify-center align-center" 
    :class="$vuetify.breakpoint.xs? 'work-main' : 'full-width'"
  >
    <div class="mb-2">
      <span 
        :class="$vuetify.breakpoint.xs? 'work-title-mob' : 'work-title'"
      >
        Case Studies
      </span>
    </div>

    <div class="d-flex justify-center align-center">
      <span :class="$vuetify.breakpoint.xs? 'work-sub-title-mob' : 'work-sub-title'">
        Subheader here lorem ipsum
      </span>
    </div>

    <div class="projects d-flex justify-center align-center flex-wrap my-10">
      <v-card
        class="mx-auto rounded-xl ma-5 on-hover"
        max-width="200"
        min-width="200"
        height="300"
        v-for="(item,i) in projImgsArr" :key="i"
      >
        <v-img
          class="white--text align-end rounded-xl"
          height="150px"
          :src="require(`@/assets/${item.img}`)" 
          alt
        >
        </v-img>

        <v-card-subtitle class="card-title">{{item.text}}</v-card-subtitle>

        <!-- <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text> -->

        <v-card-actions class="card-btn">
          <v-btn
            color="#69BDD8"
            text
            @click="onClick"
          >
            <span class="see-more">See more</span>
            <img 
              src="../assets/arrow.png" 
              class="ml-2 mb-1"
              :class="$vuetify.breakpoint.xs? 'img-width' : 'img-width'"
            />
          </v-btn>
        </v-card-actions>
      </v-card>
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
        <span :class="$vuetify.breakpoint.xs? 'curve-title-mob mb-3' : 'curve-title mb-3'">
          Project Highlights
        </span>
        <!-- <span :class="$vuetify.breakpoint.xs? 'curve-text-mob' : 'curve-text'">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
        </span> -->
      </div>
      <div :class="$vuetify.breakpoint.xs? 'carousel-main-mob' : 'carousel-main'">
        <Carousel3d 
          controlsVisible 
          :width="$vuetify.breakpoint.xs? 180:390"
          :height="$vuetify.breakpoint.xs? 120:230"
          :space="$vuetify.breakpoint.xs? 50:140"
          perspective="5"
          border="0"
          scaling="350"
        >
          <Slide class="caro-slide" v-for="(item,i) in [1,2,3,4,5,6]" :key="i" :index="i">
            <img 
              src="../assets/workCarouselImg.png" 
              :class="$vuetify.breakpoint.xs? 'slider-img' : 'slider-img'"
            />
          </Slide>
        </Carousel3d>
      </div>
    </div>

    <!-- <div 
      class="d-flex justify-center rocket-img mb-2" 
    >
      <img src="../assets/7.png" class="rocket-img"/>
    </div>

    <div :class="$vuetify.breakpoint.xs? 'caro-space-mob' : 'caro-space'"></div> -->

    <div 
      class="d-flex justify-center" 
      :class="$vuetify.breakpoint.xs? 'rocket-img-cont-mob' : 'rocket-img-cont mb-2'"
    >
      <div 
        class="d-flex justify-center" 
        :class="$vuetify.breakpoint.xs? 'rocket-img-mob' : 'rocket-img mb-2'"
      >
        <img src="../assets/rocket.svg" class="img-width"/>

        <span :class="$vuetify.breakpoint.xs? 'rocket-text-mob' : 'rocket-text'">Want to build with us?</span>
        <div 
          class="d-flex justify-center align-center on-hover"
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

  </div>
</template>

<script>
import '../../public/main.css'
import {Carousel3d, Slide} from 'vue-carousel-3d'
export default {
  name: 'services',
  components: {
    Carousel3d,
    Slide
  },
  data () {
    return {
      projImgsArr: [
        {
          img: 'project-img-1.png',
          text: 'Project 1'
        },
        {
          img: 'project-img-3.png',
          text: 'Pain son rose more park way that'
        },
        {
          img: 'project-img-4.png',
          text: 'Project 4'
        },
        {
          img: 'project-img-5.png',
          text: 'Project 5'
        },
        {
          img: 'project-img-2.png',
          text: 'Project 1'
        },
        {
          img: 'project-img-6.png',
          text: 'Pain son rose more park way that'
        },
        {
          img: 'project-img-7.png',
          text: 'Project 4'
        },
        {
          img: 'project-img-8.png',
          text: 'Project 5'
        },
      ]
    }
  },
  methods: {
    onClick () {
      this.$router.push('work/project')
    }
  }
}
</script>
<style scoped>
.work-main{
  /* width: 450px; */
  width: 100%;
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
  width: 100%;
  height: 600px;
}
.work-intersect-mob{
  width: 100%;
  height: 300px;
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
  width: 100%;
  height: 300px;
}
.main-img{
  position: relative;
  width: 100%;
}
.main-img-mob{
  position: relative;
  width: 100%;
  height: 320px;
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
  top: 80px;
}
.curve-main-mob{
  position: absolute;
  width: 400px;
  top: 50px;
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
  width: 800px;
  height: 320px;
  bottom: 95px;
}
.carousel-main-mob{
  position: absolute;
  width: 320px;
  height: 190px;
  bottom: 40px;
}
.caro-slide{
  border-radius: 25px;
}
.caro-space{
  width: 100%;
  height: 350px;
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
.rocket-img-cont{
  position: relative;
  width: 100%;
  height: 340px;
}
.rocket-img-cont-mob{
  position: relative;
  width: 100%;
  height: 120px;
  background-color: white;
}
.rocket-img{
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 430px;
  bottom: 0px;
}
.rocket-img-mob{
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 170px;
  bottom: 0px;
}
.projects{
  width: 100%;
  padding: 0px 120px 0px 120px;
}
/* .card-title{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #34304E;
  padding: 20px 16px 0px 16px !important;
} */
/* .see-more{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.035em;
  color: #69BDD8;
} */
/* .card-btn{
  position: absolute;
  bottom: 10px;
} */
.card-btn:hover{
  -webkit-transform: scale(1.1);
}
.rocket-text{
  position: absolute;
  top: 147px;
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 61px;
  letter-spacing: 0.01em;
  color: #34304E;
}
.rocket-text-mob{
  position: absolute;
  top: 42px;
  font-family: "Alegreya Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 61px;
  letter-spacing: 0.01em;
  color: #34304E;
}
.rocket-btn{
  position: absolute;
  width: 120px;
  height: 38px;
  bottom: 137px;
  background: #817FED;
  border-radius: 48px;
  cursor: pointer;
}
.rocket-btn-mob{
  position: absolute;
  width: 50px;
  height: 20px;
  bottom: 50px;
  background: #817FED;
  border-radius: 48px;
  cursor: pointer;
}
</style>