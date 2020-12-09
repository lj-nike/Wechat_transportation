// pages/cart/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      num:0,
      image:["../../img/Code_img1.png","../../img/Code_img2.png","../../img/Code_img3.png"],
      image_list:"../../img/Code_img1.png",
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      
    },
    update_img(){
      this.setData({
        num:++this.data.num
      })
      if(this.data.num >= 2){
        this.setData({
          num:0
        })
      }
      this.setData({
        image_list:this.data.image[this.data.num]
      })
      // console.log(this.data.num);
      // console.log(this.data.image_list);
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