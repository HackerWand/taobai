// pages/add/step1/step1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step_node: [
      { id: 1, name: '是必要的' },
      { id: 2, name: '可有可无的' },
      { id: 3, name: '不是必要的' }
    ]
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
  
  },
  next(event) {
    let data = event.currentTarget.dataset;
    wx.navigateTo({ url: '/pages/adduse/step2/step2?add_form=' + data.item.id + ':' + data.item.name});
  }
})