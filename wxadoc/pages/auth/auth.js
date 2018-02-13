// pages/auth/auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.login({
    //   success: (res) => {
    //     if (res.code) {
    //       let code = res.code;

    //       wx.getUserInfo({
    //         success: (res) => {
    //           let data = res.userInfo;
    //           data.code = code;
    //           //发起网络请求
    //           wx.request({
    //             url: 'https://taobai.slippersclown.com/app/auth/wxadocLogin',
    //             data: data,
    //             success(res){
    //               if(res.code == 1){

    //               }else{
    //                 wx.showToast({
    //                   title: res.msg,
    //                 });
    //               }
    //             }
    //           })  
    //         }
    //       })
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //   }
    // });
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