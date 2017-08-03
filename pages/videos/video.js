let videosList = [
  'http://demo.trendyactivity.com/ding/videos/test1.mp4',
  'http://demo.trendyactivity.com/ding/videos/test2.mp4',
  'http://demo.trendyactivity.com/ding/videos/test3.mp4',
  'http://demo.trendyactivity.com/ding/videos/test4.mp4',
  'http://demo.trendyactivity.com/ding/videos/test5.mp4',
  'http://demo.trendyactivity.com/ding/videos/test4.mp4',
  'http://demo.trendyactivity.com/ding/videos/test1.mp4',
  'http://demo.trendyactivity.com/ding/videos/test2.mp4',
  'http://demo.trendyactivity.com/ding/videos/test1.mp4',
  'http://demo.trendyactivity.com/ding/videos/test2.mp4',
  'http://demo.trendyactivity.com/ding/videos/test3.mp4',
  'http://demo.trendyactivity.com/ding/videos/test4.mp4',
  'http://demo.trendyactivity.com/ding/videos/test5.mp4',
  'http://demo.trendyactivity.com/ding/videos/test4.mp4',
  'http://demo.trendyactivity.com/ding/videos/test1.mp4',
  'http://demo.trendyactivity.com/ding/videos/test2.mp4',
  'http://demo.trendyactivity.com/ding/videos/test1.mp4',
  'http://demo.trendyactivity.com/ding/videos/test2.mp4',
  'http://demo.trendyactivity.com/ding/videos/test3.mp4',
  'http://demo.trendyactivity.com/ding/videos/test4.mp4',
  'http://demo.trendyactivity.com/ding/videos/test5.mp4',
  'http://demo.trendyactivity.com/ding/videos/test4.mp4',
  'http://demo.trendyactivity.com/ding/videos/test1.mp4',
  'http://demo.trendyactivity.com/ding/videos/test2.mp4',
  'http://demo.trendyactivity.com/ding/videos/test1.mp4',
  'http://demo.trendyactivity.com/ding/videos/test2.mp4',
  'http://demo.trendyactivity.com/ding/videos/test3.mp4',
  'http://demo.trendyactivity.com/ding/videos/test4.mp4',
  'http://demo.trendyactivity.com/ding/videos/test5.mp4',
  'http://demo.trendyactivity.com/ding/videos/test4.mp4',
  'http://demo.trendyactivity.com/ding/videos/test1.mp4',
  'http://demo.trendyactivity.com/ding/videos/test2.mp4',
]
Page({
  data: {
    dataList: {}
  },
  onLoad: function(options) {
        this.setData({
          dataList:{
            url: videosList[(options.id-1)]
          }
        })
    }
})