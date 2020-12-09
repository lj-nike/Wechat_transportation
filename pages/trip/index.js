// pages/trip/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userRides:[]
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
            console.log(res)
            let rides = res.data.userRides;
            for(let i  = 0 ;i < res.data.userRides.length; i++){
              console.log(rides[i]);
              rides[i].starTime = rides[i].starTime.substring(10,19);
              rides[i].stopTime = rides[i].stopTime.substring(10,19);
            }
            
            that.setData({
                userRides:rides
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