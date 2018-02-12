const wxCharts = require('../../utils/wxcharts-min.js');
// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: null,
    title: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({title:options.title});
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
  getWidth() {
    if (!this.data.windowWidth) {
      try {
        let res = wx.getSystemInfoSync();
        this.setData({ windowWidth: res.windowWidth });
      } catch (e) {
        this.setData({ windowWidth: 320 });
      }
    }
    return this.data.windowWidth;
  },
  stepCanvas(id) {
    new wxCharts({
      canvasId: id,
      type: 'pie',
      series: [{
        name: '吃饭',
        data: 50,
      }, {
        name: '外卖',
        data: 30,
      }, {
        name: '电影',
        data: 1,
      }],
      width: this.getWidth(),
      height: 400,
      dataLabel: true
    });
  }
})