// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://www.hackerwand.com/wp-content/uploads/2017/09/cropped-index-bg.jpg',
      'https://taobai.slippersclown.com/as-temp.png'
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
  add_log(){
    wx.navigateTo({ url:'/pages/adduse/step1/step1'});
  },
  use_analyze(){
    wx.navigateTo({ url: '/pages/canvas/canvas?title=消费统计分析&type=0' });
  },
  take_analyze(){
    wx.navigateTo({ url: '/pages/canvas/canvas?title=收入统计分析&type=1' });
  }
})