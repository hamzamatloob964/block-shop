<template>
  <div 
    class="main mt-6 d-flex flex-column justify-center align-center" 
    :class="$vuetify.breakpoint.xs? 'work-main' : 'full-width'"
  >
    <div class="mb-2">
      <span class="work-title">Project Title</span>
    </div>

    <div class="d-flex justify-center align-center">
      <span class="work-sub-title">We provided high-quality coding to create a more intuitive experience.</span>
    </div>

    <div class="mt-12" :class="$vuetify.breakpoint.xs? 'work-mask-mob' : 'work-mask'">
      <img src="../assets/WorkMaskGroup .png" class="img-width"/>
    </div>

    <!-- <div class="main-img">
      <div :class="$vuetify.breakpoint.xs? 'work-intersect-mob' : 'work-intersect'">
        <img src="../assets/WorkIntersect.png" class="work-intersect"/>
      </div>
    </div> -->

    <div 
      class="d-flex justify-center rocket-img mb-2" 
    >
      <img src="../assets/7.png" class="rocket-img"/>
    </div>

  </div>
</template>

<script>
import '../../public/main.css'
export default {
  name: 'services',
  components: {
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
.work-sub-title{
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #34304E;
}
.work-intersect{
  position: absolute;
  width: 100%;
  max-height: 500px;
  /* top: 235px; */
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
  max-height: 500px;
}
</style>