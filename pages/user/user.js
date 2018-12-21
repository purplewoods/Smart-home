const app = getApp()

Page({
  data: {
    attentionAnim: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getDataFromOneNet: function () {
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/503226450/datapoints?datastream_id=Light,Temperature,Humidity&limit=15',
      header: {
        'content-type': 'application/json',
        'api-key': 'ODz6CtSHbhh7q5bbRLciE7Owtmc= '
      },
      success: function (res) {
        //console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.temperature = res.data.data.datastreams[0]
        app.globalData.light = res.data.data.datastreams[1]
        app.globalData.humidity = res.data.data.datastreams[2]
        console.log(app.globalData.light)
        //跳转到天气页面，根据拿到的数据绘图
        wx.navigateTo({
          url: '../data/data',
        })
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })


  },
  onLoad: 
   function(options) {
      var that = this;
      /**生成背景星星-开始 */
      var stars = 400;
      var r = 0;
      var stararray = [];
      for (var i = 0; i < stars; i++) {
        var s = 0.2 + Math.random() * 1;
        var curR = r + Math.random() * 300;
        var rotateY = Math.random() * 360;
        var rotateX = Math.random() * -50;
        stararray[i] = { curR: curR, rotateY: rotateY, rotateX: rotateX, s: s };
      }
      // console.log(stararray) 
      this.setData({
        stararray: stararray,
      })
      /**生成背景星星-结束 */
    },
  function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
 */
  // 循环动画
  onReady: function () {

  },
  toenter: function () {
    wx.navigateTo({ url: '../enter/enter' })
  }
})
