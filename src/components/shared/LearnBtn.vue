<template>
    <v-btn class="learn-btn" outlined>
      <span class="btn-text">{{btnText}}</span>
    </v-btn>
</template>

<script>
export default {
  name:"learn-btn",
  props: ['btnText'],

}
</script>

<style scoped>
.learn-btn{
  border-radius: 48px; 
}
.learn-btn:hover{
  -webkit-transform: scale(1.1);
  border-radius: 48px; 
}
.btn-text{
  color: #34304E;
}
</style>