const wxCharts = require('../../utils/wxcharts-min.js');
// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: null,
    title: '',
    page_type: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ page_type: options.type });
    this.setData({ title: options.type == 0 ? '消费统计分析' : '支出统计分析' });

    if(options.type == 0){
      this.stepCanvas('step1Canvas', [{
        name: '必要的',
        data: 20,
      }, {
        name: '可有可无',
        data: 40,
      }, {
        name: '不必要的',
        data: 10,
      }]);
      this.stepCanvas('step2Canvas', [{
        name: '自己',
        data: 50,
      }, {
        name: '朋友',
        data: 20,
      }, {
        name: '陌生人',
        data: 30,
      }]);
      this.stepCanvas('step3Canvas', [{
        name: '吃饭',
        data: 50,
      }, {
        name: '请客',
        data: 50,
      }, {
        name: '零食',
        data: 10,
      }]); 
    }else{
      this.stepCanvas('step4Canvas', [{
        name: '吃饭',
        data: 50,
      }, {
        name: '外卖',
        data: 20,
      }, {
        name: '电影',
        data: 12,
      }]);
    }
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
  stepCanvas(id, series) {
    new wxCharts({
      canvasId: id,
      type: 'pie',
      series: series,
      width: this.getWidth(),
      height: 400,
      dataLabel: true
    });
  }
})