var sa = require('../lib/swiper.animate1.0.2.min.js');
var tplDetail = require('../templates/detail.string');

SPA.defineView('detail', {
  html: tplDetail,
  plugins: ['delegated', {
    name: 'avalon',
    options: function (vm) {
    }
  }],
  bindEvents: {
    show: function () {
      var d = this.param.data;
      console.log(d.id);
      var id=d.id;
      setTimeout(function () {
        switch (id) {
          case 1:console.log("111")
            break;
          case 2:console.log("222")
            break;
        }
      },100)

      var mySwiper = new Swiper('#swiper-con', {
        direction: 'vertical',
        onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
          sa.cache(swiper); //隐藏动画元素
          sa.animate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
          sa.animate(swiper);//每个slide切换结束时也运行当前slide动画
        }
      })
    }
    }
});
