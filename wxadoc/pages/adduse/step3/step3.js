// pages/add/step3/step3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add_form: {},
    step_node: [
      { id: 1, name: '吃饭' },
      { id: 1, name: '外卖' },
      { id: 1, name: '请客' },
      { id: 2, name: '零食' },
      { id: 3, name: '游戏' },
      { id: 4, name: '服饰' },
      { id: 3, name: '首饰' },
      { id: 3, name: '娱乐' },
      { id: 3, name: '护肤' },
      { id: 3, name: '美妆' },
      { id: 3, name: '买书' },
      { id: 3, name: '电子设备' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.add_form = options.add_form;
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
    wx.navigateTo({ url: '/pages/adduse/step4/step4?add_form=' + this.data.add_form + ',' + data.item.id + ':' + data.item.name });
  }
})