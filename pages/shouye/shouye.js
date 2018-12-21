Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
    'http://10.3.200.202/cache/3/04/i0.hdslb.com/71017ba73680dff43e0a4d233c9935b3/1cc333ff578e5ea9fded7e454953a4e2291440c2.png',
      'http://10.3.200.202/cache/3/04/i0.hdslb.com/a46c8954d1515863b2ea7d4574f26b41/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png',
      'http://i0.hdslb.com/bfs/bangumi/e1f891ad2602265655f3ef181e343e253f017fce.jpg',
      'http://i0.hdslb.com/bfs/bangumi/964a79c96c92ef262eed53982f3a57689b6292af.jpg'
    ],
    swiperIndex: 0 //这里不写第一次启动展示的时候会有问题
  },
  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  //上传数据点
  lightswtichon: function(){  
    wx.request({
      url: 'https://api.heclouds.com/devices/503226450/datapoints?datastream_id=lighton',
    header: {
      'api-key': 'ODz6CtSHbhh7q5bbRLciE7Owtmc= '
    },
    method: 'POST',
    data: {
      "datastreams": [
        {
          "id": "lighton", //数据流名称或数据流模板名称
          "datapoints": [
            {
              "at":"",//上传数据点时间，可选。如果为空，则设备云会取当前时间。如果存在其格式必须为"YYYY-MM-DDThh:mm:ss"的形式
              "value": 1//上传数据点值
            }
          ]
        },
      ]
    },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
  })
},
  lightswtichdown: function () {
    wx.request({
      url: 'https://api.heclouds.com/devices/503226450/datapoints?datastream_id=lighton',
      header: {
        'api-key': 'ODz6CtSHbhh7q5bbRLciE7Owtmc= '
      },
      method: 'POST',
      data: {
        "datastreams": [
          {
            "id": "lighton", //数据流名称或数据流模板名称
            "datapoints": [
              {
                "at": "",//上传数据点时间，可选。如果为空，则设备云会取当前时间。如果存在其格式必须为"YYYY-MM-DDThh:mm:ss"
                "value": 0//上传数据点值
              }
            ]
          },
        ]
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  doorswtichon: function () {
    wx.request({
      url: 'https://api.heclouds.com/devices/503226450/datapoints?datastream_id=lighton',
      header: {
        'api-key': 'ODz6CtSHbhh7q5bbRLciE7Owtmc= '
      },
      method: 'POST',
      data: {
        "datastreams": [
          {
            "id": "lighton", //数据流名称或数据流模板名称
            "datapoints": [
              {
                "at": "",//上传数据点时间，可选。如果为空，则设备云会取当前时间。如果存在其格式必须为"YYYY-MM-DDThh:mm:ss"的形式
                "value": 2//上传数据点值
              }
            ]
          },
        ]
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  doorswtichdown: function () {
    wx.request({
      url: 'https://api.heclouds.com/devices/503226450/datapoints?datastream_id=lighton',
      header: {
        'api-key': 'ODz6CtSHbhh7q5bbRLciE7Owtmc= '
      },
      method: 'POST',
      data: {
        "datastreams": [
          {
            "id": "lighton", //数据流名称或数据流模板名称
            "datapoints": [
              {
                "at": "",//上传数据点时间，可选。如果为空，则设备云会取当前时间。如果存在其格式必须为"YYYY-MM-DDThh:mm:ss"的形式
                "value": 3//上传数据点值
              }
            ]
          },
        ]
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  fansswtichon: function () {
    wx.request({
      url: 'https://api.heclouds.com/devices/503226450/datapoints?datastream_id=lighton',
      header: {
        'api-key': 'ODz6CtSHbhh7q5bbRLciE7Owtmc= '
      },
      method: 'POST',
      data: {
        "datastreams": [
          {
            "id": "lighton", //数据流名称或数据流模板名称
            "datapoints": [
              {
                "at": "",//上传数据点时间，可选。如果为空，则设备云会取当前时间。如果存在其格式必须为"YYYY-MM-DDThh:mm:ss"的形式
                "value": 4//上传数据点值
              }
            ]
          },
        ]
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  fansswtichdown: function () {
    wx.request({
      url: 'https://api.heclouds.com/devices/503226450/datapoints?datastream_id=lighton',
      header: {
        'api-key': 'ODz6CtSHbhh7q5bbRLciE7Owtmc= '
      },
      method: 'POST',
      data: {
        "datastreams": [
          {
            "id": "lighton", //数据流名称或数据流模板名称
            "datapoints": [
              {
                "at": "",//上传数据点时间，可选。如果为空，则设备云会取当前时间。如果存在其格式必须为"YYYY-MM-DDThh:mm:ss"的形式
                "value": 5//上传数据点值
              }
            ]
          },
        ]
      },
      success: function (res) {
        console.log(res)
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
