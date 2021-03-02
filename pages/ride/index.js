// pages/myWallet/index.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index:3,
        myCards:"未登录",
        num:[{money:2,line:{}},{money:3,line:{px:"2px",s:"solid",col:"#fc5531"}},{money:5,line:{}},{money:10,line:{}}],
        money:15.00
    },
    click_choice:function(res){
        let that = this;
        // console.log(res.target.id);
        let id = res.target.id;
        
        let num = [{money:2,line:{}},{money:3,line:{}},{money:5,line:{}},{money:10,line:{}}];
        that.setData({
            index:num[id].money
        })
        let select = {px:"2px",s:"solid",col:"#fc5531"};
        this.setData({
           num:num
        })
        num[id].line = select;
        // console.log(num[id].line);
        this.setData({
            num:num,
            money:num[id].money*5
        })
        // console.log(this.data.num);
    },
    recharge:function(){
        let that = this;
        let name = app.globalData.userInfo.nickName;
        console.log(that.data.index)
        setTimeout(function() {
        wx.showToast({
                      title:"充值成功",         
                      icon: 'success',//图标，支持"success"、"loading"         
                      //image: '/icons/扫码.png',//自定义图标的本地路径，image 的优先级高于 icon
                      duration: 2000,//提示的延迟时间，单位毫秒，默认：1500                    
                    })
         }, 1000);
         wx.request({
            url: 'http://1dnhkei9.xiaomy.net:40895/addTicket?userName='+name+'&num='+that.data.index,
            method:"GET",
            success:function(res){
                console.log(res.data);
                that.setData({
                    myCards:res.data.tickets+"张"
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        if(app.globalData.login){
            wx.getStorage({
              key: 'user',
              success:function(res){
                  that.setData({
                      myCards:res.data.tickets+"张"
                  })
              }
            })
            
        }else{
            that.setData({
                myCards:"未登录"
            })
        }
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