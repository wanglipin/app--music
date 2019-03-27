import Vue from 'vue'
// import moment from 'moment' //如果需要使用，则自己需要下载，目前是没有下载的

// 1.dataFormat 过滤器名称
// 2.需改更改的数据时间
// 3.需要更改数据的格式类型
const vfilter = { // 下边是两个转换，不需要则可以删除，对象中你可以设置更多个你需要拦截过滤方法
    dataFormat: function (dataStr, pattern = 'YYYY-MM-DD') {
        // return moment(dataStr).format(pattern)
    }, // 时间转换
    splitFamilyName: function (value) {
        return value.substring(0, 1)
    }// 截取字符串中的第一个字符
}
// export default vfilter //暴露出去
for (let key in vfilter) {
     Vue.filter(key, vfilter[key])
  }
