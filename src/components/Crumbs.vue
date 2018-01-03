<template>
  <div class="crumbs">
    <div class="layout-breadcrumb">
      <IBreadcrumb style="text-align: left;">
        <IBreadcrumbItem href="">燕子梁筑</IBreadcrumbItem>
        <IBreadcrumbItem v-bind:href="crumb.url" v-for="(crumb, key, index) in setCrumbs" v-bind:key="key" v-if="crumb.title">{{crumb.title}}</IBreadcrumbItem>
      </IBreadcrumb>
    </div>
  </div>
</template>
<script>
import { Breadcrumb } from 'iview';
export default {
  name: "Crumbs",
  data: () => ({
    default_open: 'preview',
  }),
  beforeMount: function(){
    
  },
  mounted: function(){
    
  },
  filters: {
    timeFormat: function(value) {
      if(!value) return '';
      return value.substr(0,10);
    }
  },
  computed: {
    setArticle () {
      return this.$store.state.article.title;
    },
    setCrumbs () {
      return this.$store.state.crumbs;
    }
  },
  methods: {
    
  },
  destroyed: function () {

  },
  components: { "IBreadcrumb": Breadcrumb, "IBreadcrumbItem": Breadcrumb.Item }
};
</script>

<style scoped>
  .crumbs {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 10px;
    /* align-items: center; */
    position: fixed;
    top: 62px;
    z-index: 10000;
  }
  .layout-breadcrumb{
    width: 1180px;
    padding: 20px 0 20px 0px;
    background-color: #eff3f5;
    border-radius: 3px; 
  }
</style>
