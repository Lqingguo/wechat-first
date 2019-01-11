// pages/detail/detail.js
let datas = require('../../datas/list-data.js');
let dateArr = datas.list_data
console.log(dateArr)

Page({
  /**
   * 页面的初始数据
   */
  data: {
    datailObj:{},
    isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //更新路由的参数

    let index =options.index;
    this.setData({
      datailObj: dateArr[index],
      index
    })

    let oldisShow = wx.getStorageSync('isStorage');
    if(oldisShow[index]){
        this.setData({
          isShow:true
        })
    }
  },
  changeimg(){
    this.setData({
      isShow:!this.data.isShow
    })
  let title =this.data.isShow?'收藏成功':'取消收藏';
  wx.showToast({
    title,
    icon:'success'
  })

  let index = this.data.index;
  let obj = wx.getStorageSync('isStorage')
  if(!obj){
    obj={}
  }
  obj[index] = this.data.isShow
    wx.setStorage({
      key: 'isStorage',
      data: obj
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