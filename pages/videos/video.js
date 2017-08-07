const src = require('../../database/source.js')

Page({
  data: {
    source: [],
    display: 'none'
  },
  onLoad: function(options) {
        this.setData({
          source: [src.src[(options.id-1)]]
        })
    },
    playVideo: function(){
      this.setData({
        display: 'block'
      })
      this.videoContext = wx.createVideoContext('myVideo')
        console.log(this.videoContext,'this.videoContext')
        this.videoContext.play()
    }
})