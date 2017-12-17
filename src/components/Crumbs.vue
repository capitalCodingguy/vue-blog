<template>
  <div class="crumbs">
    <div class="layout-breadcrumb">
      <Breadcrumb style="text-align: left;">
        <BreadcrumbItem href="">燕子梁筑</BreadcrumbItem>
        <BreadcrumbItem v-bind:href="crumb.url" v-for="(crumb, key, index) in setCrumbs" v-bind:key="key">{{crumb.title}}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  </div>
</template>
<script>
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
      return this.$store.state.Crumbs;
    }
  },
  methods: {
    
  },
  destroyed: function () {

  },
  components: { }
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
    width: 1120px;
    padding: 20px 0 20px 0px;
    background-color: #eff3f5;
    border-radius: 3px; 
  }
</style>
