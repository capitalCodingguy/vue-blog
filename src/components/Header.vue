<template>
  <div class="header">
    <Row type="flex" justify="start" class="layout">
      <Col span="5" style="text-align: left;">
        <div class="layout-logo">
          <img class="layout-img" src="http://ozynkcxdv.bkt.clouddn.com/%E9%A3%9E%E9%B1%BC%E6%9C%8D.png" alt="帝都燕子梁">
        </div>
        <h1 class="layout-title">燕子梁筑</h1>
      </Col>
      <Col span="4">
        <div class="layout-input">
          <Input placeholder="搜索"></Input>
        </div>
      </Col>
      <Col span="12">
        <Menu mode="horizontal" theme="light" active-name="1">
          <div class="layout-nav">
            <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                写作
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                博客
            </MenuItem>
            <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                共享
            </MenuItem>
            <MenuItem name="4">
                <Icon type="ios-paper"></Icon>
                个人
            </MenuItem>
          </div>
        </Menu>
      </Col>
      <Col span="3" style="text-align: right;">
        <div class="demo-avatar">
          <Avatar icon="person" size="large" />
          <span style="margin-left: 5px;">帝都燕子梁</span>
        </div>
      </Col>
    </Row>
  </div>
</template>
<style>
/* .layout-logo{

  } */
</style>

<script>
//import { Row, Col } from 'iview';
export default {
  name: "Header",
  data: () => ({})
  //components: { "Row": Row, "Col": Col}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: Mini-webfont;
  src: url("../assets/font/Mini.ttf");
}
.header {
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 10000;
}
.layout {
  margin: 0 auto;
  max-width: 1200px;
}
.layout-logo {
  width: 100px;
  height: 40px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 10px;
  left: 20px;
}
.layout-img {
  height: 100%;
  width: 40%;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
}
.layout-assistant {
  width: 300px;
  margin: 0 auto;
  height: inherit;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-title {
  height: 60px;
  line-height: 60px;
  color: #495060;
  font-weight: 500;
  font-family: Mini-webfont;
}
.layout-input {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px 0;
}
.demo-avatar {
  height: 60px;
  line-height: 60px;
}
.ivu-menu-horizontal.ivu-menu-light:after {
  width: 0;
}
</style>
