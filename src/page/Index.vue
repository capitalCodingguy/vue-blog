<template>
  <div class="layout">
    <my-header />
    <router-view></router-view>
  </div>
    
</template>
<script>
  import Header from '@/components/Header'
  export default {
    name: 'Index',
    data () {
      return {
        particlesJsData: 'dsf'
      }
    },
    components: {
      'my-header': Header
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
