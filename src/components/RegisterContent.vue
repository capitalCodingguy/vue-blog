<template>
<div class="content">
  <IRow class="layout" type="flex" justify="space-between">
    <ICol span="16" style="margin-top: 20px;">
      <transition
        appear 
        v-on:enter="enter"
        v-on:leave="leave"
        v-on:before-appear="beforeAppear"
        v-on:appear="appear"
        :css="false">
        <Card :bordered="false" class="item">
          <p slot="title" style="text-align: left;">注册</p>
          <div style="margin-left: 15px;">
            <span>昵称：</span><IInput :value.sync="value" placeholder="请输入用户名" style="width: 300px;margin-left:10px;"></IInput>
          </div>
          <div style="margin-left: 15px;margin-top: 15px;">
            <span>邮箱：</span><IInput :value.sync="value" placeholder="请输入邮箱" style="width: 300px;margin-left:10px;"></IInput>
          </div>
          <div style="margin-left: 15px;margin-top: 15px;">
            <span>密码：</span><IInput :value.sync="value" type="password" placeholder="请输入密码" style="width: 300px;margin-left:10px;"></IInput>
          </div>
          <div style="margin-top: 15px;margin-left: -10px;">
            <span style="margin-right:10px;">确认密码：</span><IInput :value.sync="value" type="password" placeholder="请确认密码" style="width: 300px;margin-left:0px;"></IInput>
          </div>
          <div style="margin-left: 15px;margin-top: 15px;">
            <IButton type="ghost" @click="openRegister">返回登录</IButton>
            <IButton type="ghost" style="margin-left: 45px;">立即注册</IButton>
          </div>
        </Card>
      </transition>
    </ICol>
  </IRow>
</div>
</template> 
<script>
import { Card, Input, Checkbox, Button } from "iview";
import { Row, Col } from "iview/src/components/grid";
export default {
  name: "RegisterContent",
  props: [],
  data: () => ({
    form: {
      
    }
  }),
  methods: {
    enter: function(el, done) {
      Velocity(
        el,
        "transition.slideDownBigIn",
        { duration: 350, stagger: 100 },
        done
      );
    },
    leave: function(el, done) {
      Velocity(
        el,
        "transition.slideDownBigOut",
        { duration: 350, stagger: 100 },
        done
      );
    },
    beforeAppear: function(el) {
      el.style.display = "none";
    },
    appear: function(el, done) {
      Velocity(
        el,
        "transition.slideDownBigIn",
        { duration: 350, delay: 400, stagger: 100 },
        done
      );
    }
  },
  created: function(){
    
  },
  components: { IRow: Row, ICol: Col, Card: Card, IInput: Input, ICheckbox: Checkbox, IButton: Button }
};
</script>
<style scoped>
.content {
  flex: 1;
  max-width: 1200px;
  margin: 84px auto 0;
}
.item {
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
  min-width: 580px;
}
</style>
