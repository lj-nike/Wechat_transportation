const app = getApp();
Page({
    data: {
      logs: [],
      count:0,
      sum:0,
      bills:[{date:"未登录",money:""}
      ] 
    },
    onShow:function(){
      if(app.globalData.login){
        wx.showToast({
          title: '加载中',
          icon:'loading',
          duration:1000
        })
      }
    },
    onLoad: function () {
      let that = this;
      if(app.globalData.login){
        wx.getStorage({
          key: 'user',
          success:function(res){
            let userCounts = res.data.userCounts;
            for(let i = 0; i < userCounts.length; i++){
              let num = Math.floor(Math.random() + 0.5);
              if(num == 1){
                userCounts[i].kinds = true;
              }else{
                userCounts[i].kinds = false;
              }
            }
            userCounts = userCounts.reverse();
            for(let i = 0; i < userCounts.length; i++){
              if(userCounts[i].money > 0){
                userCounts[i].money = "+"+userCounts[i].money;
              }
            }
            that.setData({
              bills:userCounts
            })
          }
        })
      }
      
      
    }
  })