<template>
  <div class="layout">
    <my-header />
    <my-content class="content" />
  </div>
    
</template>
<script>
  import Header from '@/components/Header'
  import Content from '@/components/Content'
  export default {
    name: 'Index',
    data () {
      return {
        particlesJsData: 'dsf'
      }
    },
    components: {
      'my-header': Header,
      'my-content': Content
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
