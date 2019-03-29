<template>
  <div calss="header-container">
    <flexbox >
      <flexboxItem span="">111111</flexboxItem>
      <flexboxItem span="12">22222222</flexboxItem>
      <flexboxItem span="">133333333</flexboxItem>
    <flexbox>
      <flexbox-item :span="2" style="height: 40px;">
        <div class="header-row">
          <slot name="left"></slot>
        </div>
      </flexbox-item>
      <flexbox-item :span="8" style="height: 40px; margin: 0px">
        <div class="header-row">
          <slot name="input"></slot>
        </div>
      </flexbox-item>
      <flexbox-item :span="2" style="height: 40px; margin: 0px">
        <div class="header-row">
            <icon type="waiting"></icon>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Box, Icon } from 'vux'
export default {
  data() {
    return {
      
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    Box,
    Icon
  }
}
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 100%;
}
.header-row {
  width: 100%;
  height: 100%;
  text-align: center;
  // background: red;
}
</style>


