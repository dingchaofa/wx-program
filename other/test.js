var pic_url = [
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
var source = []

var ran_title = [
    '人生如戏，全靠演技。',
'年轻就是资本。',
'修行的路总是孤独的，因为智慧必然来自孤独。',
'你若一直在，我便一直爱。',
'一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。',
'静待一树花开，盼你叶落归来',
'未来是属于勤勉于现在的人。千古在于此一日。',
'合理安排时间，就等于节约时间。',
'原本很清晰的世界，瞬间变得虚无而遥远。',
'雾，带给人们太多的遐想，又有太多的迷茫。',
'灯光虽然昏暗，但仍能激起我的情绪。',
'五月，斜风细雨，氤氲雾蒙蒙地美。',
'桃林，梦中的苍翠之林，神奇的千古神话之林。',
'所有的虚幻，在阳光下，无所遁形。',
'树，变成了是乳白色的影子。',
'江南的美就是阴雨绵绵，江南的韵就是斜风细雨。',
'浅浅淡淡的香无语'
]
var duration = ['01:04','00:58','00:46','01:24','01:28','01:12','01:18','01:31','01:01','01:05','01:19','01:02','02:05','02:19','00:47','01:06','01:07','01:18','00:33','00:34','04:04','00:19','00:57','01:41','02:17','02:56','00:59']
var category = ['Coocaa N2产品视频','Coolpad Note 5产品视频','Coolpad Y83产品视频','Federer Huawei mediapad T2 10.0 pro','Gionee A1产品视频','Gionee M6S Plus产品视频','Gionee M6产品视频','Gionee M2017 产品视频','Gionee M2017 调性视频','Gionee S10产品视频','Gionee W909产品视频','ivvi-i3产品视频','mindray ICU概念视频','Mindray 麻醉机产品视频','OPPO F3产品视频','OPPO UDP 203蓝光机','OPPO UDP 205蓝光机','华为 MediaPad屏保视频','华为 荣耀8青春版','华为 荣耀9','华为 运营商BG年终市场大会','华为M2 病毒视频','酷派 锋尚3产品视频','乐心电子秤产品视频','迈瑞 HyBase产品视频','平安福','奇酷360 N4产品视频']
const videosList = [
  'http://demo.trendyactivity.com/ding/videos/Coocaa N2产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/Coolpad Note 5产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/Coolpad Y83产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/Federer Huawei mediapad T2 10.0 pro.mp4',
  'http://demo.trendyactivity.com/ding/videos/Gionee A1产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/Gionee M6S Plus产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/Gionee M6产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/Gionee M2017 产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/Gionee M2017 调性视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/Gionee S10产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/Gionee W909产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/ivvi-i3产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/mindray ICU概念视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/Mindray 麻醉机产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/OPPO F3产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/OPPO UDP 203蓝光机.mp4',
  'http://demo.trendyactivity.com/ding/videos/OPPO UDP 205蓝光机.mp4',
  'http://demo.trendyactivity.com/ding/videos/华为 MediaPad屏保视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/华为 荣耀8青春版.mp4',
  'http://demo.trendyactivity.com/ding/videos/华为 荣耀9.mp4',
  'http://demo.trendyactivity.com/ding/videos/华为 运营商BG年终市场大会.mp4',
  'http://demo.trendyactivity.com/ding/videos/华为M2 病毒视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/酷派 锋尚3产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/乐心电子秤产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/迈瑞 HyBase产品视频.mp4',
  'http://demo.trendyactivity.com/ding/videos/平安福.mp4',
  'http://demo.trendyactivity.com/ding/videos/奇酷360 N4产品视频.mp4'
]


for(var i=0; i<videosList.length;i++){
    var temp = {}
	temp.home_img = pic_url[parseInt(Math.random()*(pic_url.length))]
	temp.duration = duration[i]
	temp.catageory = category[i]
    temp.title = ran_title[parseInt(Math.random()*(ran_title.length))]
	temp.video_img1 = pic_url[parseInt(Math.random()*(pic_url.length))]
	temp.video_img2 = pic_url[parseInt(Math.random()*(pic_url.length))]
	temp.sub_title = ran_title[parseInt(Math.random()*(ran_title.length))]
	temp.video_src = videosList[i]
    source.push(temp)
}

console.log(source)


const src = [
  {
    home_img: '',
    duration: '',
    category: '',
    title: '',
    video_img1: '',
    video_img2: '',
    sub_title: '',
    video_src: ''
  }
]



var source = [
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




var reg = /{(i.*)\n(.*)\n(.*)\n(.*)},/g
//var replace = {\n\t$1\n\t$2\n\t$3\n\t$4},
var source = [
{
	img_url: "http://img.mukewang.com/598026ce0001263d06000338-240-135.jpg",
	duration: "02:10",
	catageory: "音乐",
	title: "人生如戏，全靠演技。"},
{
	img_url: "http://img.mukewang.com/5977233a000164cd06000338-240-135.jpg",
	duration: "02:10",
	catageory: "动画",
	title: "原本很清晰的世界，瞬间变得虚无而遥远。"},
{
	img_url: "http://img.mukewang.com/586b64ee0001df7906000338-240-135.jpg",
	duration: "02:10",
	catageory: "旅行",
	title: "桃林，梦中的苍翠之林，神奇的千古神话之林。"},
{
	img_url: "http://img.mukewang.com/596c81600001bcd806000338-240-135.jpg",
	duration: "02:10",
	catageory: "音乐",
	title: "所有的虚幻，在阳光下，无所遁形。"},
{
	img_url: "http://img.mukewang.com/59635a210001d39e25001408-240-135.jpg",
	duration: "02:10",
	catageory: "旅行",
	title: "桃林，梦中的苍翠之林，神奇的千古神话之林。"},
{
	img_url: "http://img.mukewang.com/5785deb30001002b06000338-240-135.jpg",
	duration: "02:10",
	catageory: "创意",
	title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。"},
{
	img_url: "http://img.mukewang.com/5968262c00011d2606000338-240-135.jpg",
	duration: "02:10",
	catageory: "预告",
	title: "你若一直在，我便一直爱。"},
{
	img_url: "http://img.mukewang.com/59632b220001afe505960335-240-135.jpg",
	duration: "02:10",
	catageory: "旅行",
	title: "原本很清晰的世界，瞬间变得虚无而遥远。"},
{
	img_url: "http://img.mukewang.com/596366a900010f7e06000338-240-135.jpg",
	duration: "02:10",
	catageory: "预告",
	title: "浅浅淡淡的香无语"},
{
	img_url: "http://img.mukewang.com/590a8c9400013c5406000338-240-135.jpg",
	duration: "02:10",
	catageory: "记录",
	title: "你若一直在，我便一直爱。"},
{
	img_url: "http://img.mukewang.com/59534c0b00019ea506000338-240-135.jpg",
	duration: "02:10",
	catageory: "音乐",
	title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。"},
{
	img_url: "http://img.mukewang.com/594b40910001a47e06000338-240-135.jpg",
	duration: "02:10",
	catageory: "励志",
	title: "合理安排时间，就等于节约时间。"},
{
	img_url: "http://img.mukewang.com/59560e140001b88606000338-240-135.jpg",
	duration: "02:10",
	catageory: "励志",
	title: "江南的美就是阴雨绵绵，江南的韵就是斜风细雨。"},
{
	img_url: "http://img.mukewang.com/5950ad6f0001903f06000338-240-135.jpg",
	duration: "02:10",
	catageory: "创意",
	title: "合理安排时间，就等于节约时间。"},
{
	img_url: "http://img.mukewang.com/598186000001813106000338-240-135.jpg",
	duration: "02:10",
	catageory: "运动",
	title: "原本很清晰的世界，瞬间变得虚无而遥远。"},
{
	img_url: "http://img.mukewang.com/594cf6120001ddaf06000338-240-135.jpg",
	duration: "02:10",
	catageory: "剧情",
	title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。"},
{
	img_url: "http://img.mukewang.com/593f87ce0001d08419201080-240-135.jpg",
	duration: "02:10",
	catageory: "动画",
	title: "你若一直在，我便一直爱。"},
{
	img_url: "http://img.mukewang.com/59437af00001461e06000338-240-135.jpg",
	duration: "02:10",
	catageory: "广告",
	title: "静待一树花开，盼你叶落归来"},
{
	img_url: "http://img.mukewang.com/5940992d0001cae906000338-240-135.jpg",
	duration: "02:10",
	catageory: "剧情",
	title: "五月，斜风细雨，氤氲雾蒙蒙地美。"},
{
	img_url: "http://img.mukewang.com/593e702e00011cff06000338-240-135.jpg",
	duration: "02:10",
	catageory: "旅行",
	title: "合理安排时间，就等于节约时间。"},
{
	img_url: "http://img.mukewang.com/593e7d0f00014f4806000338-240-135.jpg",
	duration: "02:10",
	catageory: "旅行",
	title: "修行的路总是孤独的，因为智慧必然来自孤独。"},
{
	img_url: "http://img.mukewang.com/593a3b0f0001383606000338-240-135.jpg",
	duration: "02:10",
	catageory: "预告",
	title: "五月，斜风细雨，氤氲雾蒙蒙地美。"},
{
	img_url: "http://img.mukewang.com/5913fe4a00014c5406000338-240-135.jpg",
	duration: "02:10",
	catageory: "动画",
	title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。"},
{
	img_url: "http://img.mukewang.com/593606e60001a6c206000338-240-135.jpg",
	duration: "02:10",
	catageory: "剧情",
	title: "修行的路总是孤独的，因为智慧必然来自孤独。"},
{
	img_url: "http://img.mukewang.com/5908307600015cee06000338-240-135.jpg",
	duration: "02:10",
	catageory: "剧情",
	title: "树，变成了是乳白色的影子。"},
{
	img_url: "http://img.mukewang.com/5912fca600014c5406000338-240-135.jpg",
	duration: "02:10",
	catageory: "运动",
	title: "人生如戏，全靠演技。"},
{
	img_url: "http://img.mukewang.com/5934bac20001a5c906000338-240-135.jpg",
	duration: "02:10",
	catageory: "剧情",
	title: "雾，带给人们太多的遐想，又有太多的迷茫。"},
{
	img_url: "http://img.mukewang.com/592e40830001164306000338-240-135.jpg",
	duration: "02:10",
	catageory: "剧情",
	title: "浅浅淡淡的香无语"},
{
	img_url: "http://img.mukewang.com/591d59cc0001a3c706000338-240-135.jpg",
	duration: "02:10",
	catageory: "创意",
	title: "浅浅淡淡的香无语"},
{
	img_url: "http://img.mukewang.com/5922cc5800011d9e06000338-240-135.jpg",
	duration: "02:10",
	catageory: "创意",
	title: "人生如戏，全靠演技。"},
{
	img_url: "http://img.mukewang.com/590c54d40001973c06000338-240-135.jpg",
	duration: "02:10",
	catageory: "运动",
	title: "树，变成了是乳白色的影子。"},
{
	img_url: "http://img.mukewang.com/59195b4a00019b0d06000338-240-135.jpg",
	duration: "02:10",
	catageory: "剧情",
	title: "你若一直在，我便一直爱。"},
{
	img_url: "http://img.mukewang.com/59194c300001f2d606000338-240-135.jpg",
	duration: "02:10",
	catageory: "广告",
	title: "灯光虽然昏暗，但仍能激起我的情绪。"},
{
	img_url: "http://img.mukewang.com/5914272e0001254d06000338-240-135.jpg",
	duration: "02:10",
	catageory: "剧情",
	title: "所有的虚幻，在阳光下，无所遁形。"},
{
	img_url: "http://img.mukewang.com/5908721f0001539606000338-240-135.jpg",
	duration: "02:10",
	catageory: "音乐",
	title: "人生如戏，全靠演技。"},
{
	img_url: "http://img.mukewang.com/58f85fb20001139f06000338-240-135.jpg",
	duration: "02:10",
	catageory: "剧情",
	title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。"},
{
	img_url: "http://img.mukewang.com/590a904f0001138f06000338-240-135.jpg",
	duration: "02:10",
	catageory: "广告",
	title: "五月，斜风细雨，氤氲雾蒙蒙地美。"},
{
    img_url: "http://img.mukewang.com/5909383700016b7906000338-240-135.jpg",
    duration: "02:10",
    catageory: "剧情",
    title: "树，变成了是乳白色的影子。"
}
]


var aaa = [
{
catageory: "Coocaa N2产品视频",
duration: "01:04",
home_img: "http://img.mukewang.com/59534c0b00019ea506000338-240-135.jpg",
sub_title: "原本很清晰的世界，瞬间变得虚无而遥远。",
title: "未来是属于勤勉于现在的人。千古在于此一日。",
video_img1: "http://img.mukewang.com/5968262c00011d2606000338-240-135.jpg",
video_img2: "http://img.mukewang.com/5912fca600014c5406000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Coocaa N2产品视频.mp4"
},
{
catageory: "Coolpad Note 5产品视频",
duration: "00:58",
home_img: "http://img.mukewang.com/59194c300001f2d606000338-240-135.jpg",
sub_title: "原本很清晰的世界，瞬间变得虚无而遥远。",
title: "浅浅淡淡的香无语",
video_img1: "http://img.mukewang.com/58f85fb20001139f06000338-240-135.jpg",
video_img2: "http://img.mukewang.com/59560e140001b88606000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Coolpad Note 5产品视频.mp4"
},
{
catageory: "Coolpad Y83产品视频",
duration: "00:46",
home_img: "http://img.mukewang.com/591d59cc0001a3c706000338-240-135.jpg",
sub_title: "雾，带给人们太多的遐想，又有太多的迷茫。",
title: "静待一树花开，盼你叶落归来",
video_img1: "http://img.mukewang.com/58f85fb20001139f06000338-240-135.jpg",
video_img2: "http://img.mukewang.com/594b40910001a47e06000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Coolpad Y83产品视频.mp4"
},
{
catageory: "Federer Huawei mediapad T2 10.0 pro",
duration: "01:24",
home_img: "http://img.mukewang.com/5909383700016b7906000338-240-135.jpg",
sub_title: "桃林，梦中的苍翠之林，神奇的千古神话之林。",
title: "静待一树花开，盼你叶落归来",
video_img1: "http://img.mukewang.com/59194c300001f2d606000338-240-135.jpg",
video_img2: "http://img.mukewang.com/593a3b0f0001383606000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Federer Huawei mediapad T2 10.0 pro.mp4"
},
{
catageory: "Gionee A1产品视频",
duration: "01:28",
home_img: "http://img.mukewang.com/59194c300001f2d606000338-240-135.jpg",
sub_title: "合理安排时间，就等于节约时间。",
title: "年轻就是资本。",
video_img1: "http://img.mukewang.com/596c81600001bcd806000338-240-135.jpg",
video_img2: "http://img.mukewang.com/5922cc5800011d9e06000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Gionee A1产品视频.mp4"
},
{
catageory: "Gionee M6S Plus产品视频",
duration: "01:12",
home_img: "http://img.mukewang.com/59534c0b00019ea506000338-240-135.jpg",
sub_title: "灯光虽然昏暗，但仍能激起我的情绪。",
title: "原本很清晰的世界，瞬间变得虚无而遥远。",
video_img1: "http://img.mukewang.com/593f87ce0001d08419201080-240-135.jpg",
video_img2: "http://img.mukewang.com/593606e60001a6c206000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Gionee M6S Plus产品视频.mp4"
},
{
catageory: "Gionee M6产品视频",
duration: "01:18",
home_img: "http://img.mukewang.com/59195b4a00019b0d06000338-240-135.jpg",
sub_title: "人生如戏，全靠演技。",
title: "五月，斜风细雨，氤氲雾蒙蒙地美。",
video_img1: "http://img.mukewang.com/5934bac20001a5c906000338-240-135.jpg",
video_img2: "http://img.mukewang.com/594cf6120001ddaf06000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Gionee M6产品视频.mp4"
},
{
catageory: "Gionee M2017 产品视频",
duration: "01:31",
home_img: "http://img.mukewang.com/5908721f0001539606000338-240-135.jpg",
sub_title: "雾，带给人们太多的遐想，又有太多的迷茫。",
title: "人生如戏，全靠演技。",
video_img1: "http://img.mukewang.com/5913fe4a00014c5406000338-240-135.jpg",
video_img2: "http://img.mukewang.com/58f85fb20001139f06000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Gionee M2017 产品视频.mp4"
},
{
catageory: "Gionee M2017 调性视频",
duration: "01:01",
home_img: "http://img.mukewang.com/593606e60001a6c206000338-240-135.jpg",
sub_title: "未来是属于勤勉于现在的人。千古在于此一日。",
title: "树，变成了是乳白色的影子。",
video_img1: "http://img.mukewang.com/593e702e00011cff06000338-240-135.jpg",
video_img2: "http://img.mukewang.com/596c81600001bcd806000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Gionee M2017 调性视频.mp4"
},
{
catageory: "Gionee S10产品视频",
duration: "01:05",
home_img: "http://img.mukewang.com/598026ce0001263d06000338-240-135.jpg",
sub_title: "五月，斜风细雨，氤氲雾蒙蒙地美。",
title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。",
video_img1: "http://img.mukewang.com/59632b220001afe505960335-240-135.jpg",
video_img2: "http://img.mukewang.com/590a8c9400013c5406000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Gionee S10产品视频.mp4"
},
{
catageory: "Gionee W909产品视频",
duration: "01:19",
home_img: "http://img.mukewang.com/594cf6120001ddaf06000338-240-135.jpg",
sub_title: "浅浅淡淡的香无语",
title: "合理安排时间，就等于节约时间。",
video_img1: "http://img.mukewang.com/591d59cc0001a3c706000338-240-135.jpg",
video_img2: "http://img.mukewang.com/596366a900010f7e06000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Gionee W909产品视频.mp4"
},
{
catageory: "ivvi-i3产品视频",
duration: "01:02",
home_img: "http://img.mukewang.com/5909383700016b7906000338-240-135.jpg",
sub_title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。",
title: "五月，斜风细雨，氤氲雾蒙蒙地美。",
video_img1: "http://img.mukewang.com/593f87ce0001d08419201080-240-135.jpg",
video_img2: "http://img.mukewang.com/593f87ce0001d08419201080-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/ivvi-i3产品视频.mp4"
},
{
catageory: "mindray ICU概念视频",
duration: "02:05",
home_img: "http://img.mukewang.com/598186000001813106000338-240-135.jpg",
sub_title: "未来是属于勤勉于现在的人。千古在于此一日。",
title: "五月，斜风细雨，氤氲雾蒙蒙地美。",
video_img1: "http://img.mukewang.com/591d59cc0001a3c706000338-240-135.jpg",
video_img2: "http://img.mukewang.com/593f87ce0001d08419201080-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/mindray ICU概念视频.mp4"
},
{
catageory: "Mindray 麻醉机产品视频",
duration: "02:19",
home_img: "http://img.mukewang.com/592e40830001164306000338-240-135.jpg",
sub_title: "年轻就是资本。",
title: "原本很清晰的世界，瞬间变得虚无而遥远。",
video_img1: "http://img.mukewang.com/590a904f0001138f06000338-240-135.jpg",
video_img2: "http://img.mukewang.com/59437af00001461e06000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/Mindray 麻醉机产品视频.mp4"
},
{
catageory: "OPPO F3产品视频",
duration: "00:47",
home_img: "http://img.mukewang.com/5968262c00011d2606000338-240-135.jpg",
sub_title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。",
title: "桃林，梦中的苍翠之林，神奇的千古神话之林。",
video_img1: "http://img.mukewang.com/5914272e0001254d06000338-240-135.jpg",
video_img2: "http://img.mukewang.com/5940992d0001cae906000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/OPPO F3产品视频.mp4"
},
{
catageory: "OPPO UDP 203蓝光机",
duration: "01:06",
home_img: "http://img.mukewang.com/590a904f0001138f06000338-240-135.jpg",
sub_title: "年轻就是资本。",
title: "五月，斜风细雨，氤氲雾蒙蒙地美。",
video_img1: "http://img.mukewang.com/5940992d0001cae906000338-240-135.jpg",
video_img2: "http://img.mukewang.com/59632b220001afe505960335-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/OPPO UDP 203蓝光机.mp4"
},
{
catageory: "OPPO UDP 205蓝光机",
duration: "01:07",
home_img: "http://img.mukewang.com/5908307600015cee06000338-240-135.jpg",
sub_title: "原本很清晰的世界，瞬间变得虚无而遥远。",
title: "桃林，梦中的苍翠之林，神奇的千古神话之林。",
video_img1: "http://img.mukewang.com/59632b220001afe505960335-240-135.jpg",
video_img2: "http://img.mukewang.com/596c81600001bcd806000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/OPPO UDP 205蓝光机.mp4"
},
{
catageory: "华为 MediaPad屏保视频",
duration: "01:18",
home_img: "http://img.mukewang.com/59632b220001afe505960335-240-135.jpg",
sub_title: "合理安排时间，就等于节约时间。",
title: "浅浅淡淡的香无语",
video_img1: "http://img.mukewang.com/59632b220001afe505960335-240-135.jpg",
video_img2: "http://img.mukewang.com/590a904f0001138f06000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/华为 MediaPad屏保视频.mp4"
},
{
catageory: "华为 荣耀8青春版",
duration: "00:33",
home_img: "http://img.mukewang.com/58f85fb20001139f06000338-240-135.jpg",
sub_title: "静待一树花开，盼你叶落归来",
title: "原本很清晰的世界，瞬间变得虚无而遥远。",
video_img1: "http://img.mukewang.com/5909383700016b7906000338-240-135.jpg",
video_img2: "http://img.mukewang.com/5950ad6f0001903f06000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/华为 荣耀8青春版.mp4"
},
{
catageory: "华为 荣耀9",
duration: "00:34",
home_img: "http://img.mukewang.com/58f85fb20001139f06000338-240-135.jpg",
sub_title: "树，变成了是乳白色的影子。",
title: "未来是属于勤勉于现在的人。千古在于此一日。",
video_img1: "http://img.mukewang.com/5914272e0001254d06000338-240-135.jpg",
video_img2: "http://img.mukewang.com/5908721f0001539606000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/华为 荣耀9.mp4"
},
{
catageory: "华为 运营商BG年终市场大会",
duration: "04:04",
home_img: "http://img.mukewang.com/586b64ee0001df7906000338-240-135.jpg",
sub_title: "浅浅淡淡的香无语",
title: "一个人固然寂寞，两个人孤灯下无言相对却可以更寂寞。",
video_img1: "http://img.mukewang.com/586b64ee0001df7906000338-240-135.jpg",
video_img2: "http://img.mukewang.com/59195b4a00019b0d06000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/华为 运营商BG年终市场大会.mp4"
},
{
catageory: "华为M2 病毒视频",
duration: "00:19",
home_img: "http://img.mukewang.com/598186000001813106000338-240-135.jpg",
sub_title: "人生如戏，全靠演技。",
title: "年轻就是资本。",
video_img1: "http://img.mukewang.com/59437af00001461e06000338-240-135.jpg",
video_img2: "http://img.mukewang.com/5950ad6f0001903f06000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/华为M2 病毒视频.mp4"
},
{
catageory: "酷派 锋尚3产品视频",
duration: "00:57",
home_img: "http://img.mukewang.com/598186000001813106000338-240-135.jpg",
sub_title: "合理安排时间，就等于节约时间。",
title: "所有的虚幻，在阳光下，无所遁形。",
video_img1: "http://img.mukewang.com/591d59cc0001a3c706000338-240-135.jpg",
video_img2: "http://img.mukewang.com/5908307600015cee06000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/酷派 锋尚3产品视频.mp4"
},
{
catageory: "乐心电子秤产品视频",
duration: "01:41",
home_img: "http://img.mukewang.com/593f87ce0001d08419201080-240-135.jpg",
sub_title: "五月，斜风细雨，氤氲雾蒙蒙地美。",
title: "五月，斜风细雨，氤氲雾蒙蒙地美。",
video_img1: "http://img.mukewang.com/5968262c00011d2606000338-240-135.jpg",
video_img2: "http://img.mukewang.com/5968262c00011d2606000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/乐心电子秤产品视频.mp4"
},
{
catageory: "迈瑞 HyBase产品视频",
duration: "02:17",
home_img: "http://img.mukewang.com/5940992d0001cae906000338-240-135.jpg",
sub_title: "雾，带给人们太多的遐想，又有太多的迷茫。",
title: "江南的美就是阴雨绵绵，江南的韵就是斜风细雨。",
video_img1: "http://img.mukewang.com/59534c0b00019ea506000338-240-135.jpg",
video_img2: "http://img.mukewang.com/5912fca600014c5406000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/迈瑞 HyBase产品视频.mp4"
},
{
catageory: "平安福",
duration: "02:56",
home_img: "http://img.mukewang.com/5934bac20001a5c906000338-240-135.jpg",
sub_title: "五月，斜风细雨，氤氲雾蒙蒙地美。",
title: "静待一树花开，盼你叶落归来",
video_img1: "http://img.mukewang.com/596c81600001bcd806000338-240-135.jpg",
video_img2: "http://img.mukewang.com/5913fe4a00014c5406000338-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/平安福.mp4"
},
{
catageory: "奇酷360 N4产品视频",
duration: "00:59",
home_img: "http://img.mukewang.com/59635a210001d39e25001408-240-135.jpg",
sub_title: "树，变成了是乳白色的影子。",
title: "雾，带给人们太多的遐想，又有太多的迷茫。",
video_img1: "http://img.mukewang.com/59194c300001f2d606000338-240-135.jpg",
video_img2: "http://img.mukewang.com/59632b220001afe505960335-240-135.jpg",
video_src: "http://demo.trendyactivity.com/ding/videos/奇酷360 N4产品视频.mp4"
}
]