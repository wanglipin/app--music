<template>
  <div calss="header-container">
    <flexbox>
      <flexbox-item :span="2" v-show="!isHeaderShow">
        <div class="header-row" style="margin: 0px;" >
          <slot name="left"></slot>
        </div>
      </flexbox-item>
      <flexbox-item :span="isHeaderShow ? 10:8" :style="isHeaderShow ? 'marginLet: 10px;':'margin: 0px;'">
        <div class="header-row">
          <slot name="input"></slot>
        </div>
      </flexbox-item>
      <flexbox-item :span="2" style="margin: 0px;">
        <div class="header-row">
            <icon type="waiting" v-if="!isHeaderShow"></icon>
            <span v-else class="back" @click="getBack">取消</span>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Box, Icon } from 'vux'
export default {
  name:'layouts',
  props: {
    isHeaderShow: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    getBack () {
      this.$emit('back', false)
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
.back {
  cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


