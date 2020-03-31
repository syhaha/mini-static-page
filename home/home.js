// getApp() 获取app()产生的示例对象
const app =getApp()
const name = app.globalData.name;
const age = app.globalData.age;
//注册一个页面
Page({
  //2.初始化数据
  data: {
    counter:0,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:80
  },
  //3.监听wxml中相关的一些事件，点击加1
  handleBtnClick() {
    this.setData({
      counter:this.data.counter+1
    })
  },
  //获取用户信息
  handleGetUserInfo(event) {
    console.log(event);
  },
  //1.监听页面的生命周期函数
  // 页面被加载出来
  onLoad() {
    
  },
  // 页面显示出来
  onShow() {
    // 显示当前时间
    setInterval(() => {
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    }, 1000)
  },
  // 页面初次渲染完成时
  onReady() {
  },
  // 页面隐藏时
  onHide() {
  },
  onLoad() {
  },
  // 点击切换颜色
  handleSwichColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  // 点击显示和隐藏
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})