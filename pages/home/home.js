let index = 0,
    dataList = []

const src = require('../../database/source.js')

    function getData(that){
        if(dataList.length !==src.src.length ){
            for(var i=index;i<index+8; i++){
                let temp = src.src[i]
                if(temp){
                    dataList.push(temp)
                }
            }
            that.setData({
                source: dataList
            })
            index += 8
        }
    }

Page({
    data:{
        scrollHeight: 0,
        hidden:true,
        source: []
    },
    onLoad: function(options) {
        var that=this;
        // 页面初始化 options为页面跳转所带来的参数
        wx.getSystemInfo({
        success: res => {
            console.log(res,"res.windowHeight")
            that.setData({
                scrollHeight: res.windowHeight
            })
        }
        })
        getData(this)
    },
    jumptourl: ev => {
        console.log(ev,"ev")
        var num=ev.currentTarget.dataset.id
        wx.navigateTo({
            url: '../videos/video?id='+num
        })
    },
    loadmore:function(){
        getData(this)
    },
})