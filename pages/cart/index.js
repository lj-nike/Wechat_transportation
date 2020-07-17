// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1:0,
    num2:2,
    num3:1,
    num4:1,
    price1:89,
    price2:99,
    price3:199,
    price4:29,
    price:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      price:this.data.price1+this.data.price2+this.data.price3+this.data.price4,
    })
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

  
  num1_jian(){
    let price = this.data.price - 89;
    this.setData({
      num1:--this.data.num1,
      price:price
    })
  },
  num1_add(){
    let price = this.data.price + 89;
    this.setData({
      num1:++this.data.num1,
      price:price
    })
  },
  num2_jian(){
    let price = this.data.price - 99;
    this.setData({
      num2:--this.data.num2,
      price:price
    })
  },
  num2_add(){
    let price = this.data.price + 99;
    this.setData({
      num2:++this.data.num2,
      price:price
    })
  },
  num3_jian(){
    let price = this.data.price - 199;

    this.setData({
      num3:--this.data.num3,
      price:price
    });
  },
  num3_add(){
    let price = this.data.price + 199;

    this.setData({
      num3:++this.data.num3,
      price:price
    })
  },
  num4_jian(){
    let price = this.data.price - 29;

    this.setData({
      num4:--this.data.num4,
      price:price
    })
  },
  num4_add(){
    let price = this.data.price + 29;

    this.setData({
      num4:++this.data.num4,
      price:price
    })
  },
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