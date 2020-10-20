// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    "userinfo":{
      nickName:"hello chai"
    }
  },
  // onShow(){
  //   const userinfo = wx.getStorageSync("userinfo");
  //   console.log(userinfo);
    
  //   this.setData({
  //     userinfo
  //   })
  // }
  toCollect(){
    wx.navigateTo({
      url: '../collect/index'
    })
  },

  getProfile(e){
    wx.setStorageSync("userInfo",e.detail.userInfo);
    console.log(e.detail.userInfo);
    this.setData({
      "userinfo":e.detail.userInfo
    })
   
  }

})