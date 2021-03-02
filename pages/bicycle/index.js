// pages/bicycle/index.js
var util = require('../../utils/util');
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        city:"新都",
        name:"",
        myMoney:0,
        starTime:"",
        stopTime:"",
        energy:0,
        distance:0,
        timing:"00:00:00",
        interval:0,
        zhuangtai:"骑行中"
    },
    pay:function(e){
        let that = this;
        console.log(e.target);
        that.setData({
            zhuangtai:"骑行完成"
        })
        wx.showToast({
          title: '支付中',
          icon:"loading",
          duration:2000
        });
        // setInterval(() => {
        //     
        // }, 2000);
        setTimeout(()=>{
            wx.showToast({
                title: '支付完成',
                icon:"success",
                duration:1000
            })
        },2000)
        if(e.target.id == 1){
            that.setData({
                stopTime:that.getTime()
            })
            wx.request({
                url: 'http://1dnhkei9.xiaomy.net:40895/consumerMoney',
                data:{
                    userName:app.globalData.userInfo.nickName,
                    money:2,
                    starTime:that.data.starTime,
                    stopTime:that.data.stopTime,
                    startLocation:that.data.city,
                    stopLocation:that.data.city,
                    energy:that.data.energy,
                    distance:that.data.distance,
                    flag:1
                },
                method:"POST",
                success:function(res){
                    console.log(res.data)
                }
            })
            clearInterval(this.data.interval);
        }else{
            that.setData({
                stopTime:that.getTime()
            })
            
            wx.request({
                url: 'http://1dnhkei9.xiaomy.net:40895/consumerTicket',
                data:{
                    userName:app.globalData.userInfo.nickName,
                    num:1,
                    starTime:that.data.starTime,
                    stopTime:that.data.stopTime,
                    startLocation:that.data.city,
                    stopLocation:that.data.city,
                    energy:that.data.energy,
                    distance:that.data.distance,
                    flag:0
                },
                method:"POST",
                success:function(res){
                    console.log(res.data)
                }
            })
            clearInterval(this.data.interval);
            
        }
        wx.navigateBack({
          delta: 1,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        this.setData({
            city:(options.city||"新都"),
            starTime:that.getTime(),
            name:(app.globalData.userInfo.nickName||"lys")
        })
        
        let interval = setInterval(() => {
            let date = new Date();
            let minute =date.getMinutes();
            let second = date.getSeconds();
            if(second<10){
                second = '0'+ second;
            }
            if(minute<10){
                minute = '0'+ minute;
            }
            let time = date.getHours()+':'+minute+':'+second;
            that.setData({
                timing:time,
                energy:that.data.energy+1
            })
           
        }, 1000);
        that.setData({
            interval:interval
        })
    },
    endInterval:function(){
        clearInterval(this.data.interval);
        let date = new Date();

    },
    getTime:function(){
        let date = new Date();
        let month = date.getMonth()+1;
        let minute =date.getMinutes();
        let second = date.getSeconds();
        if(second<10){

            second = '0'+ second;

        }
        if(minute<10){

            minute = '0'+ minute;

        }
        let time = date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+minute+':'+second;
        return time;
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