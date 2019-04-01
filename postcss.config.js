module.exports = {
 // 由于cssnext和cssnano都具有autoprefixer,事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false。对于其他的插件使用，稍后会简单的介绍。
  plugins: {
    'postcss-import': {}, // npm install postcss-import loader,主要功有是解决@import引入路径问题
    'postcss-url': {}, // npm install postcss-url 比如图片文件、字体文件等引用路径的处理
    // "autoprefixer": {}
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },
    'postcss-cssnext': {},
     'postcss-px-to-viewport': {
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来置顶，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定'px'转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore'], // 指定不转行为视窗单位的类，可以自定义，可以无限添加，建议定义一至两个通用的类名
      minPixeValue: 1, // 小于或等于'1px'不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换'px'
      /* 容器适配，可以使用vw
      文本的适配，可以使用vw
      大于1px的边框、圆角、阴影都可以使用vw
      内距和外距，可以使用vw */
    },
    'postcss-viewport-units': {},
    'cssnano': {
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false// 只要启用了这个插件，z-index的值就会重置为1，这个东西一样要设为false，不让怎么被坑死的都不知道
    }
  }
}
