<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer,
  }
}
</script>

<style lang="scss" >
#app{
  height: 100%;
}
//  .v-enter,
//     .v-leave-to {
//         transform: translateX(100%);
//     }
    
//    .v-leave-active, .v-enter-active {
//         transition: all .3s ease;
//     }
</style>
