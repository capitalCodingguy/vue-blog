<template>
  <div class="flex-center position-ref full-height">
    <div id="particles"></div>
    <div class="content">
        <div class="title">
            <img class="avatar img-circle" src="http://ozynkcxdv.bkt.clouddn.com/%E9%A3%9E%E9%B1%BC%E6%9C%8D.png" alt="swallowfly">
        </div>
        <div class="description">
            帝都燕子梁
        </div>
        <p class="description_content">
            一别离洛阳，五载耕织忙！轻身欲何往，帝都燕子梁。
        </p>
        <div class="links">
            <a href="#/blog">Blog</a>
            <a href="#/works/">Project</a>
            <a target="_blank" href="http://weibo.com/1839900520">Weibo</a>
            <a target="_blank" href="https://github.com/capitalCodingguy">GitHub</a>
            <a href="/about">Me</a>
            <a href="/donate">Donate</a>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data () {
      return {
        particlesJsData: 'dsf'
      }
    },
    mounted () {
      particlesJS.load('particles', '../../src/assets/data/particlesJsData.json')
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @font-face {
    font-family: Mini-webfont;
    src: url("../assets/font/Mini.ttf");
  }
  body {
    margin: 0;
    padding: 0;
  }

  #particles {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .full-height {
    background-color: #fff;
    color: #6289ad;
    font-family: Mini-webfont;
    font-weight: 100;
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }

  .full-height {
    height: 100vh;
  }

  .flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .position-ref {
    position: relative;
  }

  .top-right {
    position: absolute;
    right: 10px;
    top: 18px;
  }

  .content {
    text-align: center;
    z-index: 100;
    margin-bottom: 15vh;
  }

  .title {
    font-size: 84px;
  }

  .description {
    margin: 10px 0;
    font-size: 24px;
    font-weight: bold;
  }

  .description_content {
    margin: 10px 0;
    font-size: 19px;
    font-weight: 400;
  }

  .links > a {
    color: #9caebf;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 600;
    font-family: "Raleway";
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  .links > a:hover {
    color: #52697f;
  }

  .m-b-md {
    margin-bottom: 30px;
  }

  .avatar {
    width: 120px !important;
  }
</style>
