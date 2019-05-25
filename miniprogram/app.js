//app.js
App({
  onLaunch: function () {
    
    console.log("Weixin first log:hello world!")
    console.log("Weixin log for testing building automatically by ctrl+S")
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
