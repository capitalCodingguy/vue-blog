<template>
  <div class="header">
    <IRow type="flex" justify="start" class="layout">
      <ICol span="5" style="text-align: left;">
        <div class="layout-logo">
          <img class="layout-img" src="http://ozynkcxdv.bkt.clouddn.com/%E9%A3%9E%E9%B1%BC%E6%9C%8D.png" alt="帝都燕子梁">
        </div>
        <h1 class="layout-title">燕子梁筑</h1>
      </ICol> 
      <ICol span="4">
        <div class="layout-input">
          <IInput placeholder="搜索"></IInput>
        </div>
      </ICol>
      <ICol span="12">
        <IMenu mode="horizontal" theme="light" :active-name="name" v-on:on-select="selectChange">
          <div class="layout-nav">
            <IMenuItem name="blog">
                <IIcon type="ios-keypad"></IIcon>
                博客
            </IMenuItem>
            <IMenuItem name="works">
                <IIcon type="compose"></IIcon>
                作品
            </IMenuItem>
            <IMenuItem name="resume">
                <IIcon type="clipboard"></IIcon>
                简历
            </IMenuItem>
            <IMenuItem name="me">
                <IIcon type="happy-outline"></IIcon>
                关于我
            </IMenuItem>
          </div>
        </IMenu>
      </ICol> 
      <ICol span="3" style="text-align: right;">
        <div class="demo-avatar">
          <IAvatar :src="avatar" size="large" />
          <Dropdown v-if="auth" placement="bottom-end" @on-click="exitLogin">
            <a class="login-text" href="javascript:void(0)">
              {{userName}}
              <IIcon class="login-text" type="arrow-down-b"></IIcon>
            </a>
            <Dropdown-menu @click="exitLogin" slot="list">
                <Dropdown-item name="1">个人中心</Dropdown-item>
                <Dropdown-item name="2" on-click="exitLogin">退出登录</Dropdown-item>
              </Dropdown-menu> 
          </Dropdown>
          <span class="login-text" v-if="!auth" @click="goToLogin">登录</span>
          <span class="login-text" v-if="!auth" @click="goToRegister">注册</span>
        </div>
      </ICol>
    </IRow>
  </div>
</template>
<style>
/* .layout-logo{

  } */
</style>

<script>
import { Avatar, Icon, Input, Dropdown } from 'iview';
import { Row, Col } from 'iview/src/components/grid';
import IviewMenu from 'iview/src/components/menu';
export default {
  name: "Header",
  data: () => ({
    name: 'blog',
    userName: '',
    auth: false,
    avatar: 'http://ozynkcxdv.bkt.clouddn.com/wy.png'
  }),
  methods: { 
    selectChange: function(name){
      switch (name) {
        case 'blog':
          this.$router.push({name: 'articlelist'}) 
          this.$store.commit('setCrumbs', [{url: '/', title: '博客'}])
          this.$store.commit('setBlogListUrl', 'blog_list')
        break;
        case 'works':
          this.$router.push({name: 'works'})
          this.$store.commit('setCrumbs', [{url: '/works/', title: '作品列表'}])
        break;
        case 'resume':
          this.$router.push({name: 'resume'})
          this.$store.commit('setCrumbs', [{url: '/resume/', title: '个人简历'}])
        break;
        case 'me':
          this.$router.push({name: 'me'})
          this.$store.commit('setCrumbs', [{url: '/me/', title: '关于我'}]);
      }
    },
    goToLogin: function() {
      this.$router.push({name: 'login'})
      this.$store.commit('setCrumbs', [{url: '/login/', title: '登录'}])
    },
    goToRegister: function() {
      this.$router.push({name: 'register'})
      this.$store.commit('setCrumbs', [{url: '/register/', title: '注册'}])
    },
    getCurrentUserInfo: function() {
      let token = localStorage.getItem('token');
      if(token){
        this.$store.dispatch('logined', token)
      }else{
        this.$router.push({name: 'login'})
      }
    },
    exitLogin: function(val) {
      switch (val) {
        case '1':
        break;
        case '2':
        console.log(val);
        this.$store.dispatch('logout');
        break;
      }
    }
  },
  mounted: function() {
    // 请求用户信息
    this.getCurrentUserInfo();
  },
  computed: {
    getCurrentUser(){
      return this.$store.state.avatar;
    }
  },
  watch: {
    getCurrentUser() {
      this.auth = this.$store.state.auth;
      this.avatar = this.$store.state.avatar;
      this.userName = this.$store.state.name;
    }
  },
  components: {
    "IMenu": IviewMenu, "IMenuItem": IviewMenu.Item, "IIcon": Icon, 
    "IRow": Row, "ICol": Col, "IInput": Input, "IAvatar": Avatar,
    "Dropdown": Dropdown, "Dropdown-menu": Dropdown.Menu, "Dropdown-item": Dropdown.Item
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: Mini-webfont;
  /* src: url("../assets/font/Mini.ttf"); */
  src: url("http://ozynkcxdv.bkt.clouddn.com/Mini.ttf");
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
.header .login-text {
  color: #495060;
  cursor: pointer;
  margin-left: 5px;
}
</style>
