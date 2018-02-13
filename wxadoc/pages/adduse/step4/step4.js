// pages/add/step4/step4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:'',
    param_list:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = options.add_form.split(',');
    let node_list = [];
    data.map((node,i) => {
      node_list[i] = node.split(':');
    });
    this.setData({ param_list: node_list});
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
  numClick(event){
    let data = event.currentTarget.dataset;
    switch(data.num){
      case 'X':
        this.setData({ money: this.data.money.substr(0,this.data.money.length - 1) });
        break;
      case '.':
        if (this.data.money.indexOf('.') == -1) {
          this.setData({ money: this.data.money + '.' });
        }
        break;
      default:
        // 小数位检查
        let decimal = this.data.money.split('.');
        if (decimal.length == 2){
          if (decimal[1].length >= 2){
            break;
          }

          if(decimal[1].length == 0 && data.num == '0'){
            this.setData({ money: this.data.money + data.num });
            break;
          }else{
            let num = parseFloat(this.data.money + '' + data.num);
            this.setData({ money: num + '' });
            break;
          }
        }

        let num = parseFloat(this.data.money + '' + data.num);
        this.setData({ money: num + '' });
        break;
    }
  },
  confirm_submit(e){
    if(this.data.money == ''){
      wx.showToast({ title: '请输入金额', icon: 'none'});
    }
    console.log(e.detail.value.textarea)
	console.log(this.data.param_list);
	console.log(this.data.money)
  }
})