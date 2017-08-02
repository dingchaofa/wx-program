let index = 0
const pic_url = [
        "http://img.mukewang.com/5977373b0001318505910331-240-135.jpg",
        "http://img.mukewang.com/585778ca0001586306000338-240-135.jpg",
        "http://img.mukewang.com/598026ce0001263d06000338-240-135.jpg",
        "http://img.mukewang.com/5977233a000164cd06000338-240-135.jpg",
        "http://img.mukewang.com/586b64ee0001df7906000338-240-135.jpg",
        "http://img.mukewang.com/596c81600001bcd806000338-240-135.jpg",
        "http://img.mukewang.com/59635a210001d39e25001408-240-135.jpg",
        "http://img.mukewang.com/5785deb30001002b06000338-240-135.jpg",
        "http://img.mukewang.com/5968262c00011d2606000338-240-135.jpg",
        "http://img.mukewang.com/59632b220001afe505960335-240-135.jpg",
        "http://img.mukewang.com/596366a900010f7e06000338-240-135.jpg",
        "http://img.mukewang.com/590a8c9400013c5406000338-240-135.jpg",
        "http://img.mukewang.com/59534c0b00019ea506000338-240-135.jpg",
        "http://img.mukewang.com/594b40910001a47e06000338-240-135.jpg",
        "http://img.mukewang.com/59560e140001b88606000338-240-135.jpg",
        "http://img.mukewang.com/5950ad6f0001903f06000338-240-135.jpg",
        "http://img.mukewang.com/598186000001813106000338-240-135.jpg",
        "http://img.mukewang.com/594cf6120001ddaf06000338-240-135.jpg",
        "http://img.mukewang.com/593f87ce0001d08419201080-240-135.jpg",
        "http://img.mukewang.com/59437af00001461e06000338-240-135.jpg",
        "http://img.mukewang.com/5940992d0001cae906000338-240-135.jpg", 
        "http://img.mukewang.com/593e702e00011cff06000338-240-135.jpg", 
        "http://img.mukewang.com/593e7d0f00014f4806000338-240-135.jpg", 
        "http://img.mukewang.com/593a3b0f0001383606000338-240-135.jpg", 
        "http://img.mukewang.com/5913fe4a00014c5406000338-240-135.jpg", 
        "http://img.mukewang.com/593606e60001a6c206000338-240-135.jpg", 
        "http://img.mukewang.com/5908307600015cee06000338-240-135.jpg", 
        "http://img.mukewang.com/5912fca600014c5406000338-240-135.jpg", 
        "http://img.mukewang.com/5934bac20001a5c906000338-240-135.jpg", 
        "http://img.mukewang.com/592e40830001164306000338-240-135.jpg", 
        "http://img.mukewang.com/591d59cc0001a3c706000338-240-135.jpg", 
        "http://img.mukewang.com/5922cc5800011d9e06000338-240-135.jpg", 
        "http://img.mukewang.com/590c54d40001973c06000338-240-135.jpg",
        "http://img.mukewang.com/59195b4a00019b0d06000338-240-135.jpg", 
        "http://img.mukewang.com/59194c300001f2d606000338-240-135.jpg", 
        "http://img.mukewang.com/5914272e0001254d06000338-240-135.jpg",
        "http://img.mukewang.com/5908721f0001539606000338-240-135.jpg", 
        "http://img.mukewang.com/58f85fb20001139f06000338-240-135.jpg",
        "http://img.mukewang.com/590a904f0001138f06000338-240-135.jpg", 
        "http://img.mukewang.com/5909383700016b7906000338-240-135.jpg"
    ]

    function getData(that,index){
        let dataList = []
        dataList = pic_url.slice(index,8+index)
        that.setData({
            img_url: dataList
        })
        index +=8
    }

Page({
    data:{
        scrollHeight: 0,
        hidden:true,
        img_url: []
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
        getData(this,index)
    },
    handle: ev => {
        //console.log(ev,"ev")
        var num=ev.currentTarget.dataset.id
        wx.navigateTo({
            url: '../detail/detail?id='+num
        })
    },
    loadmore:function(){
        getData(this,index)
    },
})