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
      // let user={};
      // user.money = app.globalData.money;
      // user.tickets = app.globalData.tickets;
      // that.setData({
      //   user:user
      // })
      console.log(that.data.userinfo);
    }else{

      let money = 0;
      wx.request({
        url: 'http://1dnhkei9.xiaomy.net:40895/login?userName='+that.data.userinfo.nickName,
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
    // wx.setStorageSync("userInfo",e.detail.userInfo);
    wx.showToast({
      title: '登录中',
      icon:"loading",
      duration:1000
    })
    that.setData({
      userinfo:app.globalData.userInfo
    })
    wx.request({
      url: 'http://1dnhkei9.xiaomy.net:40895/login?userName='+that.data.userinfo.nickName,
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
        console.log(res.data);
        app.globalData.tickets = res.data.tickets;
        app.globalData.money = res.data.money;
        app.globalData.login = true;
        wx.setStorageSync('user', res.data);
      }
    })
  }

})