// pages/subway_staion/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array:["地铁1号线","地铁2号线","地铁3号线","地铁4号线","地铁5号线","地铁6号线","地铁7号线","地铁8号线","地铁9号线","地铁10号线"],
        begin:"成都",
        end:"地铁3号线",
        index:1,
        list1:{},
        list2:{},
        line1:[],
        line2:[]
    },
    bindPickerChange: function (e) {

        this.setData({
          index: Number(e.detail.value)+1
        })

      },
    formSubmit:function(res){
        let that = this;
        let number = String(this.data.index);

        wx.request({
          url: 'http://1dnhkei9.xiaomy.net:40895/getSubway?subwayNum='+number,
          data:{

          },
          success:function(res){

              that.setData({
                  list1:res.data[0],
                  list2:res.data[1],
                  line1:res.data[0].list,
                  line2:res.data[1].list
              })
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