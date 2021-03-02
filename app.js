//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        if (res.code) {
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(this.globalData.userInfo);
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 获取用户信息
    
  },

  globalData: {
    userInfo: null,
    host:'http://127.0.0.1:7001',
    trainBeginCity: '杭州',
    trainEndCity: '北京',
    userInfo: null,
    range_value: 100,                  //跑步半径
    number_value: 2,                    //签到点个数
    r_value: 100 / 6,                     //签到点范围
    lat: 37.87059,                //跑步中心 纬度
    lon: 112.55067,
    money:"",
    tickets:"",
    login:false,
    newsIndex:0
  },
  onShow: function(options) {

  },
  onHide: function() {

  },
  onError: function(msg) {

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function(options) {

  }
});
  