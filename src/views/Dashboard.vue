<template>
<div>
  <Header/>
  <v-content>
    <router-view></router-view>
  </v-content>
  <Footer/>
</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer
  }
}
</script>
