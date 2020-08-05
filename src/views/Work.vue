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

    <div class="work-mask mt-12">
      <img src="../assets/WorkMaskGroup .png" class="img-width"/>
    </div>

    <div 
      class="d-flex justify-center rocket-img mb-2" 
    >
      <img src="../assets/7.png" class="img-width"/>
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
.work-mask{
  width: 800px;
  height: 400px;
}
</style>