//index.js 获取应用实例
var app = getApp();
Page({
  data: {
    animationlist: [],
    isAnimation: false,
    zindex: [
      1, 2, 3
    ],
    animationlistyet: [],
    cardInfoList: [
      {
        id: 1,
        cardUrl: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=2947959efc1f3a294ec5dd9cf84cd754/32fa828ba61ea8d3580c40449b0a304e251f5847.jpg',
        cardInfo: {
          cardTitle: '阿尔托利亚·潘德拉贡',
          cardInfoMes: ['此后吾之剑与汝同在', '，汝之命运与吾共存']
        }
      }, {
        id: 2,
        cardUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545423855224&di=8c51f70ab29dc8306ee1abe96263d0bc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F04%2F20170604175858_BHjZ3.png',
        cardInfo: {
          cardTitle: '和泉纱雾',
          cardInfoMes: ['不，我不认识叫那种名字的人。', '正因为我的内心是自由的，所以我才能展开创造的羽翼！', '']
        }
      }, {
        id: 3,
        cardUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545424099707&di=76c35474f037ff08eccfd1790c3c1580&imgtype=0&src=http%3A%2F%2Fimg4.a0bi.com%2Fupload%2Fttq%2F20170404%2F1491297886514.jpg',
        cardInfo: {
          cardTitle: '雷姆 ',
          cardInfoMes: ['从这里重新开始吧 从一 不 从零开始', '在讨论未来的时候，怎么能没有笑容呢？', '因为昴是雷姆的英雄啊！']
        }
      }
    ]
  },
  //事件处理函数
  slidethis: function (e) {
    console.log(e);
    var self = this;
    if (this.data.isAnimation) {
      return false;
    }
    this.setData({ isAnimation: true });
    var animation1 = wx.createAnimation({ duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)' });
    this.animation1 = animation1;
    // this.animation1.translateY(-320).rotate(-5).translateX(0).scale(0.52).step();
    this
      .animation1
      .translateY(28)
      .translateX(51)
      .rotate(0)
      .scale(1)
      .step();
    var animation2 = wx.createAnimation({ duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)' });
    this.animation2 = animation2;
    this
      .animation2
      .translateY(62)
      .translateX(25)
      .rotate(0)
      .step();
    var animation3 = wx.createAnimation({ duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)' });
    this.animation3 = animation3;
    this
      .animation3
      .translateY(44)
      .translateX(41)
      .rotate(0)
      .step();
    if (this.data.animationlistyet.length <= 0) {
      this.data.animationlistyet = [
        this
          .animation1
          .export(),
        this
          .animation2
          .export(),
        this
          .animation3
          .export()
      ];
    }
    this.setData({ animationlist: this.data.animationlistyet });
    var animationlistyet = self.data.animationlistyet;
    var animation = self
      .data
      .animationlistyet
      .pop();
    self
      .data
      .animationlistyet
      .unshift(animation);
    self.setData({
      animationlist: [], animationlistyet: self.data.animationlistyet // 用来寄存下一次动画的排序
    });
    setTimeout(function () {
      var zindex = self.data.zindex;
      var slidethis = self
        .data
        .zindex
        .shift();
      self
        .data
        .zindex
        .push(slidethis);
      self.setData({ isAnimation: false, zindex: self.data.zindex });
    }, 100);
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({ userInfo: userInfo });
    });
  },
  /**
   * [微信小程序分享]
   * @return {[type]} [description]
   */
  onShareAppMessage: function () {
    return { title: '自定义分享标题', desc: '自定义分享描述', path: '/index/index' };
  }
});
