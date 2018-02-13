// pages/add/step1/step1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step_node: [
      { id: 1, name: '工资' },
      { id: 2, name: '父母' },
      { id: 3, name: '朋友' },
      { id: 4, name: '兼职' },
      { id: 5, name: '保险' },
      { id: 6, name: '彩金' },
      { id: 7, name: '股票' },
      { id: 8, name: '基金' },
      { id: 9, name: '投资' }
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
    wx.navigateTo({ url: '/pages/addtake/step4/step4?add_form=' + data.item.id + ':' + data.item.name});
  }
})