<template>
  <div class="footer">
   <IRow type="flex" justify="center" align="middle" style="height: 60px;alian-item: center;">
    <ICol span="24" class="footer-title">
      <p>Copyright © | 京ICP备16008148号-2 | Powered by swallowfly |  Feed</p>
    </ICol>
   </IRow>
  </div>
</template>
<script>
//引入markdown编辑文件
import { Row, Col } from 'iview/src/components/grid';
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "Footer",
  data: () => ({
    
  }),
  mounted: function() {
    
  },
  methods: {
    
  },
  components: { "IRow": Row, "ICol": Col }
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 60px;
  background-color: #9caebf;
  margin-top: 20px;
}
.footer-title {
    color: #fff;
    font-size: 14px;
}

</style>
