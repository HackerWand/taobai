// pages/add/step2/step2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add_form:{},
    step_node: [
      { id: 1, name: '自己' },
      { id: 2, name: '朋友' },
      { id: 3, name: '亲人' },
      { id: 4, name: '陌生人' },
      { id: 4, name: '其他' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.add_form = options.add_form;
    console.log(options)
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
  
  },
  next(event) {
    let data = event.currentTarget.dataset;
    wx.navigateTo({ url: '/pages/adduse/step3/step3?add_form=' + this.data.add_form + ',' + data.item.id + ':' + data.item.name });
  }
})