<template>
  <div>
    <carousel 
      :perPage="$vuetify.breakpoint.xs? 1 : 3" 
      navigationEnabled 
      :paginationEnabled="isPagi" 
      :class="$vuetify.breakpoint.xs? 'caro-size-mob' : 'caro-size'"
    >
      <slide v-for="(item,i) in projImgsArr" :key="i">
        <v-card
          class="mx-auto rounded-xl my-6 on-hover card-main"
          max-width="200"
          min-width="200"
          height="300"
        >
          <v-img
            class="white--text align-end rounded-xl pos-absolute"
            height="170px"
            :src="require(`@/assets/${item.img}`)" 
            alt
          >
          </v-img>

          <img 
            src="../../assets/bg_card.svg" 
            class="card-bg rounded-xl"
          />

          <v-card-subtitle class="card-title pos-absolute card-sub">
            {{item.text}}
          </v-card-subtitle>

          <v-card-actions class="card-btn pos-absolute">
            <v-btn
              color="#69BDD8"
              text
              @click="onClick"
            >
              <span class="see-more">See more</span>
              <img 
                src="../../assets/arrow.png" 
                class="ml-2 mb-1"
                :class="$vuetify.breakpoint.xs? 'img-width' : 'img-width'"
              />
            </v-btn>
          </v-card-actions>
        </v-card>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import '../../../public/main.css'

export default {
  name: 'vue-carousel',
  components: {
    Slide,
    Carousel
  },
  data () {
    return {
      isPagi: false,
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
        
      ]
    }
  },
  methods: {
    onClick () {
      this.$router.push('/work/project')
    }
    
  }

}
</script>

<style scoped>
.caro-size{
  width: 100%;
  height: 100%;
}
.caro-size-mob{
  width: 250px;
  height: 350px;
}
.see-more {
  transition: all 0.25s;
}
.see-more:hover{
  -webkit-transform: scale(1.1);
}
.card-bg{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-main{
  position: relative;
}
.pos-absolute{
  position: absolute;
}
.card-sub{
  top: 170px;
}
.card-btn{
  bottom: 0px;
}
</style>