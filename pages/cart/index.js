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
    num:0,
    price1:89,
    price2:99,
    price3:199,
    price4:29,
    price:0,
    flag1:1,
    flag2:1,
    flag3:1,
    flag4:1,
    flag_all:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      price:this.data.price1+this.data.price2+this.data.price3+this.data.price4,
      num:this.data.num1+this.data.num2+this.data.num3+this.data.num4,
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
  isCheck_all(){
  },
  isCheck3(){
    
    if(this.data.flag3 == 1){
      
      this.setData({
        price:this.data.price-this.data.price3 * this.data.num3,
        num:this.data.num-this.data.num3,
        flag3:0
      });
    }
    else{
      
      this.setData({
        price:this.data.price+this.data.price3 * this.data.num3,
        num:this.data.num+this.data.num3,
        flag3:1
      })
    }
  },
  isCheck4(){
    
    if(this.data.flag4 == 1){
      
      this.setData({
        price:this.data.price-this.data.price4 * this.data.num4,
        num:this.data.num-this.data.num4,
        flag4:0
      });
    }
    else{
     
      this.setData({
        price:this.data.price+this.data.price4 * this.data.num4,
        num:this.data.num+this.data.num4,
        flag4:1
      })
    }
  },
  num1_jian(){
    let price = this.data.price - 89;
    this.setData({
      num1:--this.data.num1,
      price:price,
      num:--this.data.num,
    })
  },
  num1_add(){
    let price = this.data.price + 89;
    this.setData({
      num1:++this.data.num1,
      price:price,
      num:++this.data.num,
    })
  },
  num2_jian(){
    let price = this.data.price - 99;
    this.setData({
      num2:--this.data.num2,
      price:price,
      num:--this.data.num,
    })
  },
  num2_add(){
    let price = this.data.price + 99;
    this.setData({
      num2:++this.data.num2,
      price:price,
      num:++this.data.num,
    })
  },
  num3_jian(){
    let price = this.data.price - 199;

    this.setData({
      num3:--this.data.num3,
      price:price,
      num:--this.data.num,
    });
  },
  num3_add(){
    let price = this.data.price + 199;

    this.setData({
      num3:++this.data.num3,
      price:price,
      num:++this.data.num,
    })
  },
  num4_jian(){
    let price = this.data.price - 29;

    this.setData({
      num4:--this.data.num4,
      price:price,
      num:--this.data.num,
    })
  },
  num4_add(){
    let price = this.data.price + 29;

    this.setData({
      num4:++this.data.num4,
      price:price,
      num:++this.data.num,
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