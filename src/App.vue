<template>
  <div id="app">
    <view-box ref="viewBox">
    <div class="header">
      <app-header>
        <template  v-slot:left>
          <div class="header-row">
            <icon type="waiting"></icon>
          </div>
        </template>
        <template v-slot:input>
          <div class="header-inputs">
            <i class="header-iocn"></i>
            <input type="text" class="inputs" placeholder="七号公园-许嵩">
          </div>
        </template>
      </app-header>
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
import { ViewBox, Search, Box, Icon } from 'vux'
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
    AppHeader,
    Search,
    Box, 
    Icon
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
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 100px;
    background-color:  #ffffff;
    .header-inputs {
      position: relative;
      .inputs {
        width: 100%;
        height: 70px;
        border: none;
        border-radius: 30px 30px 30px 30px;
        padding-left: 34%;
        background-color: #FBFBFB;
        box-sizing:border-box;
        -moz-box-sizing:border-box; /* Firefox */
        -webkit-box-sizing:border-box; /* Safari */
      }
      input::-webkit-input-placeholder {
      /* placeholder颜色  */
        color: #aab2bd;
      /* placeholder字体大小  */
        font-size: 25px;
      /* placeholder位置  */
        text-align: left;
      }
      .header-iocn {
        width: 20px;;
        height: 20px;
        position: absolute;
        top: 30%;
        left: 30%;
        background: #F70968;
        transform: translate(-20px,10px)
      }
    }
  }
  .body {
    width: 100%;
    height: 100%;
    padding-top: 100px;
    // padding-bottom: 100px;
    // background: lightcoral;
  }
  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150px;
    // background: greenyellow;
  }
  .vux-x-icon {
    fill: #F70968;
  }
}
</style>


