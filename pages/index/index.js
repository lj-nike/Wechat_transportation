//Page Object
const app = getApp()
Page({
  data: {
    region:["四川省","成都市","新都区"],
    info:{
      fl:"0",
      condText:"多云",
      windDir:"东南风",
    },
    news:[],
    arr:[0,1,2]
  },

  newsMore:function(){
    app.globalData.newsIndex = 0;
    wx.navigateTo({
      url: '../newsMore/index',
    })
  },
  getScancode: function() {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
      }
    })
 
  },
  getNews:function(res){
    app.globalData.newsIndex = 0;
    console.log(res.target);
    wx.navigateTo({
      url: '/pages/newsDetail/index',
    })
  },
  getNews2:function(res){
    app.globalData.newsIndex = 1;
    console.log(res.target);
    wx.navigateTo({
      url: '/pages/newsDetail/index',
    })
  },
  getNews3:function(res){
    app.globalData.newsIndex = 2;
    console.log(res.target);
    wx.navigateTo({
      url: '/pages/newsDetail/index',
    })
  },
  toOrder(){
    // console.log("跳转");
    wx.navigateTo({
      url: "../goods_detail/index",
    })
  },
  changeValue:function(e){
    console.log(e.detail.value);
    this.setData({
      region:e.detail.value
    }),
    this.getWeather();
  },
  getWeather:function(){
    var that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.region[2],
        key:'f0828b9e9cbe4263bc18e6fb69790b51'
      },
      success:function(res){
        
        console.log(res.data.HeWeather6[0].now);
        that.setData({
          info:{
            fl:res.data.HeWeather6[0].now.fl,
            condText:res.data.HeWeather6[0].now.cond_txt,
            windDir:res.data.HeWeather6[0].now.wind_dir
          }
        })
      }
    })

  },
  onLoad:function(options){
    var that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.region[2],
        key:'f0828b9e9cbe4263bc18e6fb69790b51'
      },
      success:function(res){
        //console.log(res.data.HeWeather6[0].now);
        that.setData({
          info:{
            fl:res.data.HeWeather6[0].now.fl,
            condText:res.data.HeWeather6[0].now.cond_txt,
            windDir:res.data.HeWeather6[0].now.wind_dir
          }
        })
      }
    })
    wx.request({
      url: 'http://1dnhkei9.xiaomy.net:40895',
      success:function(res){
        var newsArr = [];
        newsArr.push(res.data[0]);
        newsArr.push(res.data[1]);
        newsArr.push(res.data[2]);
        let news = [];
        let info = {
          date:"",
          minute:"",
          title:"",
          src:"",
          pic:"",
          content:""
        };
        for(let i = 0; i < 3; i++){
          news[i] = {};
          
          news[i].date = newsArr[i].time.slice(5,10);
          news[i].minute = newsArr[i].time.slice(11,16);
          news[i].title = newsArr[i].title;
          news[i].src = newsArr[i].src;
          news[i].pic = newsArr[i].pic;
          news[i].content = newsArr[i].content;
          
        }
        that.setData({
          news:news
        })
        
        
        
      }
    })
  },
  
  
  
  
});
  