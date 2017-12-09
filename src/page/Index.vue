<template>
  <div class="layout">
    <my-header />
    <router-view></router-view>
    <my-footer />
  </div>
    
</template>
<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  export default {
    name: 'Index',
    data () {
      return {
        particlesJsData: 'dsf'
      }
    },
    components: {
      'my-header': Header,
      'my-footer': Footer
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout {
    width: 100%;
    /* background-color: #fff; */
  }
</style>
