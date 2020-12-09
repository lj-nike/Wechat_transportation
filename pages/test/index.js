const app = getApp()

Page({
    data: {
    begin: '',
    end: '',
    date: null,
    trains:[],
    all_trains:[]
    },

    //获取trains信息：
    get_trains_info:function(){
        let all_trains = this.data.all_trains;
        let trains = [];
        let i = 0;
        for(i ; i < all_trains.length; i++){
            let obj = {};
            obj.start_time = all_trains[i].火车列车出发时间;
            obj.start_poi = all_trains[i].出发站点名称;
            obj.train = all_trains[i].火车列车车次;
            obj.during = all_trains[i].火车运行时长;
            obj.end_time = all_trains[i].火车列车抵达时间;
            obj.end_poi = all_trains[i].终点站点名称;
            obj.fisrt_sit = all_trains[i].火车列车票价余票实体.一等座.余票;
            obj.fisrt_sit_money = all_trains[i].火车列车票价余票实体.一等座.票价;
            obj.second_sit = all_trains[i].火车列车票价余票实体.二等座.余票;
            obj.second_sit_money = all_trains[i].火车列车票价余票实体.二等座.票价;
            obj.best_sit = all_trains[i].火车列车票价余票实体.特等座.余票;
            obj.best_sit_money = all_trains[i].火车列车票价余票实体.特等座.票价;
            trains.push(obj);
        }
        this.setData({
            trains:trains
        })
        console.log(trains);
    },
formSubmit: function (e) {
// console.log('form发生了submit事件，携带数据为：', e.detail.value)
// wx.navigateTo({
//     url: '../trains/trains?beginCity=' + e.detail.value.beginCity + "&endCity=" + e.detail.value.endCity + "&leaveDate=" + e.detail.value.leaveDate,
// })
let that = this;
wx.request({
    url: 'http://1dnhkei9.xiaomy.net:40895/searchTicket?',
    data:{   
        date:that.data.date,
        endStation:that.data.end,
        startStation:that.data.begin,          
    },
    success:function(res){
        let arr = res.data.火车列车车次时刻实体信息.filter(function(currentValue){
            return currentValue.火车列车类型名称 == "高速列车";
        })
        that.setData({
            all_trains:arr
        })
        that.get_trains_info();
    }
    })
},

formReset: function () {
    console.log('form发生了reset事件')
},
bindDateChange: function (e) {
    this.setData({
        date: e.detail.value
    })
},
onLoad: function (options) {
    // wx.navigateTo({
    // url: '../citys/citys?cityType=begin',
    // })
    if (this.data.date == null || this.data.date.trim() == "") {
    var day = new Date()
    day.setTime(day.getTime() + 24 * 60 * 60 * 1000);
    var year = day.getFullYear(); //年
    var month = day.getMonth() + 1; //月
    var day = day.getDate();  //日

    if (month < 10) { month = "0" + month; }
    if (day < 10) { day = "0" + day; }
        this.setData({ date: year + '-' + month + '-' + day })
    }
}, 
onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
}, 
bindBeginCityView: function () {
    wx.navigateTo({
    url: '../citys/index?cityType=begin',
    })
}, 
bindEndCityView: function () {
    wx.navigateTo({
    url: '../citys/index?cityType=end',
    })
}, 
onShow: function () {
    this.setData({ begin: app.globalData.trainBeginCity })
    this.setData({ end: app.globalData.trainEndCity })
    
}
})