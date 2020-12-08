// pages/myWallet/index.js
Page({

    data: {
        num:[{money:20,line:{}},{money:30,line:{px:"2px",s:"solid",col:"#1470e9"}},{money:50,line:{}},{money:100,line:{}}],
        money:30.00,
        myMoney:0
    },
    click_choice:function(res){
        // console.log(res.target.id);
        let id = res.target.id;
        let num = [{money:20,line:{}},{money:30,line:{}},{money:50,line:{}},{money:100,line:{}}];
        let select = {px:"2px",s:"solid",col:"#1470e9"};
        this.setData({
           num:num
        })
        num[id].line = select;
        // console.log(num[id].line);
        this.setData({
            num:num,
            money:num[id].money
        })
        // console.log(this.data.num);
    },
recharge:function(){
    let that = this;
    wx.showToast({
      title:"充值成功",
      icon: 'success',//图标，支持"success"、"loading" 
      //image: '/icons/扫码.png',//自定义图标的本地路径，image 的优先级高于 icon
      duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
      mask: true,//是否显示透明蒙层，防止触摸穿透，默认：false 
    })
    wx.getStorage({
      key: 'user',
      success:function(res){
        //   console.log(res.data);
          let user = res.data;
          user.money += that.data.money;
          that.setData({
            myMoney:user.money
            })
        wx.request({
            url: 'http://1dnhkei9.xiaomy.net:40895/upMoney',
            data:{
                userName:"lys",
                money:that.data.money,
            },
            header:{
                "Content-Type": "application/json"
            },
            method:"POST",
            success:function(res){
            }
        })

          wx.setStorage({
            key: 'user',
            data: user,
          });
      }
    })
        
},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
        let that = this;
        wx.getStorage({
          key: 'user',
          success:function(res){
            that.setData({
                myMoney:res.data.money
            })
          }
        })
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

    }
})