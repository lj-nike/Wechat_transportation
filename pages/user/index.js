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
  getProfile(e){
    wx.setStorageSync("userInfo",e.detail.userInfo);
    
    this.setData({
      "userinfo":e.detail.userInfo
    })
   
  }

})