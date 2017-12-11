<template>
  <div class="layout">
    <my-header />
    <my-crumbs />
    <router-view></router-view>
    <my-footer />
  </div>
    
</template>
<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import Crumbs from '@/components/Crumbs'
  export default {
    name: 'Index',
    data () {
      return {
        particlesJsData: 'dsf'
      }
    },
    components: {
      'my-header': Header,
      'my-footer': Footer,
      'my-crumbs': Crumbs,
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    min-height: 100vh;
    flex-direction: column;
  }
</style>
