//app.js
App({
  onLaunch: function () {
    var result = "sorry, it not works."
    var date = new Date();
    console.log("Weixin first log:hello world!")
    console.log("Weixin log for testing building automatically by ctrl+S. ")
    console.log(result)
    var year = date.getFullYear;
    var month = date.getMonth;
    var day= date.getDay;
    console.log(year + ":" + month + ":" + day)
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  onShow:function(){
    console.log("----onShow----");
  },
  onHide:function(){
    console.log("----onHide----");
  }
})
