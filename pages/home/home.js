let index = 0,
    dataList = []
const database = [
{img_url: "http://img.mukewang.com/598026ce0001263d06000338-240-135.jpg", duration: "02:10", catageory: "音乐", title: "人生如戏，全靠演技。"},
{img_url: "http://img.mukewang.com/5977233a000164cd06000338-240-135.jpg", duration: "02:10", catageory: "动画", title: "原本很清晰的世界，瞬间变得虚无而遥远。"},
{img_url: "http://img.mukewang.com/586b64ee0001df7906000338-240-135.jpg", duration: "02:10", catageory: "旅行", title: "桃林，梦中的苍翠之林，神奇的千古神话之林。"},
{img_url: "http://img.mukewang.com/596c81600001bcd806000338-240-135.jpg", duration: "02:10", catageory: "音乐", title: "所有的虚幻，在阳光下，无所遁形。"},
{img_url: "http://img.mukewang.com/59635a210001d39e25001408-240-135.jpg", duration: "02:10", catageory: "旅行", title: "桃林，梦中的苍翠之林，神奇的千古神话之林。"},
{img_url: "http://img.mukewang.com/5785deb30001002b06000338-240-135.jpg", duration: "02:10", catageory: "创意", title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。"},
{img_url: "http://img.mukewang.com/5968262c00011d2606000338-240-135.jpg", duration: "02:10", catageory: "预告", title: "你若一直在，我便一直爱。"},
{img_url: "http://img.mukewang.com/59632b220001afe505960335-240-135.jpg", duration: "02:10", catageory: "旅行", title: "原本很清晰的世界，瞬间变得虚无而遥远。"},
{img_url: "http://img.mukewang.com/596366a900010f7e06000338-240-135.jpg", duration: "02:10", catageory: "预告", title: "浅浅淡淡的香无语"},
{img_url: "http://img.mukewang.com/590a8c9400013c5406000338-240-135.jpg", duration: "02:10", catageory: "记录", title: "你若一直在，我便一直爱。"},
{img_url: "http://img.mukewang.com/59534c0b00019ea506000338-240-135.jpg", duration: "02:10", catageory: "音乐", title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。"},
{img_url: "http://img.mukewang.com/594b40910001a47e06000338-240-135.jpg", duration: "02:10", catageory: "励志", title: "合理安排时间，就等于节约时间。"},
{img_url: "http://img.mukewang.com/59560e140001b88606000338-240-135.jpg", duration: "02:10", catageory: "励志", title: "江南的美就是阴雨绵绵，江南的韵就是斜风细雨。"},
{img_url: "http://img.mukewang.com/5950ad6f0001903f06000338-240-135.jpg", duration: "02:10", catageory: "创意", title: "合理安排时间，就等于节约时间。"},
{img_url: "http://img.mukewang.com/598186000001813106000338-240-135.jpg", duration: "02:10", catageory: "运动", title: "原本很清晰的世界，瞬间变得虚无而遥远。"},
{img_url: "http://img.mukewang.com/594cf6120001ddaf06000338-240-135.jpg", duration: "02:10", catageory: "剧情", title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。"},
{img_url: "http://img.mukewang.com/593f87ce0001d08419201080-240-135.jpg", duration: "02:10", catageory: "动画", title: "你若一直在，我便一直爱。"},
{img_url: "http://img.mukewang.com/59437af00001461e06000338-240-135.jpg", duration: "02:10", catageory: "广告", title: "静待一树花开，盼你叶落归来"},
{img_url: "http://img.mukewang.com/5940992d0001cae906000338-240-135.jpg", duration: "02:10", catageory: "剧情", title: "五月，斜风细雨，氤氲雾蒙蒙地美。"},
{img_url: "http://img.mukewang.com/593e702e00011cff06000338-240-135.jpg", duration: "02:10", catageory: "旅行", title: "合理安排时间，就等于节约时间。"},
{img_url: "http://img.mukewang.com/593e7d0f00014f4806000338-240-135.jpg", duration: "02:10", catageory: "旅行", title: "修行的路总是孤独的，因为智慧必然来自孤独。"},
{img_url: "http://img.mukewang.com/593a3b0f0001383606000338-240-135.jpg", duration: "02:10", catageory: "预告", title: "五月，斜风细雨，氤氲雾蒙蒙地美。"},
{img_url: "http://img.mukewang.com/5913fe4a00014c5406000338-240-135.jpg", duration: "02:10", catageory: "动画", title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。"},
{img_url: "http://img.mukewang.com/593606e60001a6c206000338-240-135.jpg", duration: "02:10", catageory: "剧情", title: "修行的路总是孤独的，因为智慧必然来自孤独。"},
{img_url: "http://img.mukewang.com/5908307600015cee06000338-240-135.jpg", duration: "02:10", catageory: "剧情", title: "树，变成了是乳白色的影子。"},
{img_url: "http://img.mukewang.com/5912fca600014c5406000338-240-135.jpg", duration: "02:10", catageory: "运动", title: "人生如戏，全靠演技。"},
{img_url: "http://img.mukewang.com/5934bac20001a5c906000338-240-135.jpg", duration: "02:10", catageory: "剧情", title: "雾，带给人们太多的遐想，又有太多的迷茫。"},
{img_url: "http://img.mukewang.com/592e40830001164306000338-240-135.jpg", duration: "02:10", catageory: "剧情", title: "浅浅淡淡的香无语"},
{img_url: "http://img.mukewang.com/591d59cc0001a3c706000338-240-135.jpg", duration: "02:10", catageory: "创意", title: "浅浅淡淡的香无语"},
{img_url: "http://img.mukewang.com/5922cc5800011d9e06000338-240-135.jpg", duration: "02:10", catageory: "创意", title: "人生如戏，全靠演技。"},
{img_url: "http://img.mukewang.com/590c54d40001973c06000338-240-135.jpg", duration: "02:10", catageory: "运动", title: "树，变成了是乳白色的影子。"},
{img_url: "http://img.mukewang.com/59195b4a00019b0d06000338-240-135.jpg", duration: "02:10", catageory: "剧情", title: "你若一直在，我便一直爱。"},
{img_url: "http://img.mukewang.com/59194c300001f2d606000338-240-135.jpg", duration: "02:10", catageory: "广告", title: "灯光虽然昏暗，但仍能激起我的情绪。"},
{img_url: "http://img.mukewang.com/5914272e0001254d06000338-240-135.jpg", duration: "02:10", catageory: "剧情", title: "所有的虚幻，在阳光下，无所遁形。"},
{img_url: "http://img.mukewang.com/5908721f0001539606000338-240-135.jpg", duration: "02:10", catageory: "音乐", title: "人生如戏，全靠演技。"},
{img_url: "http://img.mukewang.com/58f85fb20001139f06000338-240-135.jpg", duration: "02:10", catageory: "剧情", title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。"},
{img_url: "http://img.mukewang.com/590a904f0001138f06000338-240-135.jpg", duration: "02:10", catageory: "广告", title: "五月，斜风细雨，氤氲雾蒙蒙地美。"},
{img_url: "http://img.mukewang.com/5909383700016b7906000338-240-135.jpg", duration: "02:10", catageory: "剧情", title: "树，变成了是乳白色的影子。"}
]


    function getData(that){
        //dataList = pic_url.slice(index,8+index)

        for(var i=index;i<index+8; i++){
            dataList.push(database[i])
        }
            if(dataList.length !==database.length ){
                that.setData({
                    source: dataList
                })
                index += 8
            }
        //console.log(index)
        //console.log(dataList)
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