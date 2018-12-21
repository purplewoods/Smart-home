// start.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    opacity: 0.4,
    disabled: true,
    threshold: 0,
    rule: 'up',
  
  }, 

  getDataFromOneNet: function () {
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/503226450/datapoints?datastream_id=Light,Temperature,Humidity&limit=15',
      header: {
        'content-type': 'application/json',
        'api-key': 'IGP4B6m3=qH7=kUJvH76yaAPjRw='
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
