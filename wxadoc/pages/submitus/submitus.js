// pages/submitus/submitus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholder:'',
    button_text:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.type == 0){
      this.setData({ button_text: '确定提交反馈' });
      this.setData({ placeholder: '请输入你要反馈吐槽的内容' });
    } else {
      this.setData({ button_text: '确定提交需求' });
      this.setData({ placeholder: '请输入你希望程序进行改进或添加的功能' });
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
  
  }
})