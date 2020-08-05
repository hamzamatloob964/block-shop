<template>
  <div class="learn-btn d-flex justify-center align-center">
    <span class="btn-text">Learn</span>
  </div>
  <!-- <v-btn class="learn-btn" outlined>
    <span class="black--text">Learn</span>
  </v-btn> -->
</template>

<script>
export default {
  name:"learn-btn"

}
</script>

<style scoped>
.learn-btn{
  cursor: pointer;
  width: 182px;
  height: 48px;
  left: 629px;
  top: 1420px;
  border: 2px solid #69BDD8;
  box-sizing: border-box;
  border-radius: 48px;
}
.btn-text{
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #34304E;
}
/* .learn-btn{
  border-radius: 20px;
  width: 140px;
  font-size: 10px;
  color: #69BDD8;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.02em;
} */
</style>