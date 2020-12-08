// pages/tickets/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        // wx.request({
        //   url: 'http://1dnhkei9.xiaomy.net:40895/searchTicket?',
        //   data:{
        //       date:"2020-12-03",
        //       endStation:"营山",
        //       startStation:"南充"
        //   },
        //   success:function(res){
        //     console.log(res.data.火车列车车次时刻实体信息);
        //   }
        // })
        wx.request({
          url: 'http://1dnhkei9.xiaomy.net:40895/searchTicket?',
          data:{
              date:"2020-12-03",
              endStation:"营山",
              startStation:"南充"
          },
          success:function(res){
            let trains = [];
            trains = res.data.火车列车车次时刻实体信息;
            console.log(trains[0]);
          }
        })
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