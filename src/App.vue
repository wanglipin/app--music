<template>
  <div id="app">
    <view-box ref="viewBox">
    <div class="header">
      <app-header></app-header>
    </div>
    <div class="body">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer">
      页脚
    </div>
    </view-box>
  </div>
</template>
<script>
import { ViewBox } from 'vux'
import AppHeader from './components/AppHeader.vue'
export default {
  data () {
    return {
      
    }
  },
  created () {
    
  },
  components: {
    ViewBox,
    AppHeader
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';//边框1px解决css VUX
@import '~vux/src/styles/close.less';//关闭图标  VUX 使用类 class="vux-close" style="color:red;也乐意设置颜色
@import '~vux/src/styles/reset.less';
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#app {
  height: 100%;
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .header {
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    background: greenyellow;
  }
  .body {
    width: 100%;
    height: 100%;
    padding-top: 80px;
    // padding-bottom: 100px;
    background: lightcoral;
  }
  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: greenyellow;
  }
}
</style>


