Page({

  /**
   * 页面的初始数据
   */
  data: {
    attentionAnim: '',

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
    var attentionAnim = wx.createAnimation({
      duration: 150,
      timingFunction: 'ease',
      delay: 0
    })
    //设置循环动画
    this.attentionAnim = attentionAnim
    var next = true;
    setInterval(function () {
      if (next) {
        //根据需求实现相应的动画
        this.attentionAnim.rotate(3).step()
        next = !next;
      } else {
        this.attentionAnim.rotate(-3).step()
        next = !next;
      }
      this.setData({
        //导出动画到指定控件animation属性
        attentionAnim: attentionAnim.export()
      })
    }.bind(this), 150)
  },

  
  /* 生命周期函数--监听页面显示*/
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

  },
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  //登录
  login: function (e) {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      wx.switchTab({
        url: '/pages/user/user',
      })
      //显示弹窗

    }
  }
  
})