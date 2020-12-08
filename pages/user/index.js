// pages/user/index.js
const app = getApp();
Page({

  data: {
    "userinfo":{
      nickName:"hello chai"
    },
    user:{money:"",tickets:""},
    login:true
  },
  go_to_wallet:function(){
    wx.navigateTo({
      url: '/pages/myWallet/index',
    })
  },
  go_to_ride:function(){
    wx.navigateTo({
      url: '/pages/ride/index',
    })
  },
  onShow:function(){
    let that = this;
    let judge = that.data.login;
    if(judge){
      let user={};
      user.money = app.globalData.money;
      user.tickets = app.globalData.tickets;
      that.setData({
        user:user
      })
    }else{

      let money = 0;
    
      wx.request({
        url: 'http://1dnhkei9.xiaomy.net:40895/login?userName=lys',
        data:{
            userinfo:that.data.userinfo
        },
        header:{
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method:"POST",
        success:function(res){
          that.setData({
            user:res.data,
            login:false
          })
          app.globalData.tickets = res.data.tickets;
          app.globalData.money = res.data.money;
          app.globalData.login = true;
          wx.setStorageSync('user', res.data);
        }
      })
      console.log(that.data.user.money);
      
    }
  },
  getProfile(e){
    let that = this;
    wx.setStorageSync("userInfo",e.detail.userInfo);
    this.setData({
      "userinfo":e.detail.userInfo
    })
    let userName = that.data.userinfo.nickName;
    wx.request({
      url: 'http://1dnhkei9.xiaomy.net:40895/login?userName=lys',
      data:{
          userinfo:that.data.userinfo
      },
      header:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method:"POST",
      success:function(res){
        that.setData({
          user:res.data,
          login:false
        })
        app.globalData.tickets = res.data.tickets;
        app.globalData.money = res.data.money;
        app.globalData.login = true;
        wx.setStorageSync('user', res.data);
      }
    })
  }

})