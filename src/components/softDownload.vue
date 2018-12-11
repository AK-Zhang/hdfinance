<template>
  <div class="template">
    <div class="banner">
      <img src="../assets/images/ba2.jpg" alt="">
    </div>
    <div class="middle">
      <div class="news">
        <span>NEWS</span>
        <span>最新公告：</span>
        <table>
          <tr>
            <td>网站公告</td>
          </tr>
          <tr>
            <td>网站公告</td>
          </tr>
          <tr>
            <td>网站公告</td>
          </tr>
        </table>
        <span>更多》</span>
      </div>
      <div class="line">
          <h3>软件下载</h3>
        </div>
    </div>
    <div class="light2">
      <div class="middle">
        <div class="character clear">
          <div class="light_box">
          	<img src="../assets/images/rjxz_03.png" alt="">
            <h3>逸富PC行情交易终端</h3>
            <p>逸富PC交易终端包含了分时与K线图行情、个性化下单板和行情交易设置。其中行情包含了自选、报价、分时图、K线图和从秒到小时，到日、周、月、季和年的合约K线走势；个性化下单板则有两键、三键和通用下单可供选择。</p>
            <a href="#"><span></span>模拟端下载</a>
            <a href="#"><span></span>实盘端下载</a>
          </div>
          <div class="light_box">
          	<img src="../assets/images/rjxz_05.png" alt="">
            <h3>鸿达天眼人工智能分析系统</h3>
            <p>是期货、外汇、股指交易中的短线赚钱利器，快速帮你解决买不买？买什么？何时买？何时卖？交易中的三大难题，让你轻松交易全球市场，且无需学习，上手即用！</p>
            <a href="#"><span></span>点击下载</a>
          </div>
          <div class="light_box">
          	<img src="../assets/images/rjxz_07.png" alt="">
            <h3>逸富手机APP交易终端</h3>
            <p>iOS版逸富交易软件可以到苹果APP Store搜索”逸富“下载，使用账号密码登录即可进行行情查询、入金和下单交易。</p>
            <a href="#"><span></span>IOS下载</a>
            <a href="#"><span></span>安卓下载</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'softDownload',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template .light2 {
  width: 100%;
  padding-top: 30px;
}
.template .light2 .middle .character {
  padding-top: 10px;
  padding-bottom: 30px;
  margin: 0 auto;
}
.template .light2 .middle .character .light_box {
	width: 27rem;
	height: 500px;
	margin-right: 2rem;
	margin-bottom: 20px;
	background-color: #fff;
	float: left;
	text-align: center;
	/*padding: 0px 30px;*/
	position: relative;
}
.template .light2 .middle .character .light_box:nth-of-type(3) {
	margin-right: 0px;
}
.template .light2 .middle .character .light_box img {
	width: 27rem;
}
.template .light2 .middle .character .light_box h3 {
	font-weight: 700;
	font-family: "MicrosoftYaHei";
	font-size: 20px;
	color: #333
}
.template .light2 .middle .character .light_box p {
	padding: 0px 30px;
	height: 130px;
	font-size: 14px;
	color: #555;
	text-align: left;
}
.template .light2 .middle .character .light_box a {
	display: inline-block;
	color: #fff;
	line-height: 30px;
	padding: 0px 15px 0px 40px;
	height: 30px;
	background-color: #4A8FF5;
	border-radius: 15px;
	margin-right: 10px;
	position: relative;
}
.template .light2 .middle .character .light_box a span {
	display: block;
	width: 19px;
	height: 19px;
	position: absolute;
	top: 5px;
	left: 15px;
	background-image: url(../assets/images/hd_download_pc.png);
}
.template .light2 .middle .character .light_box:nth-of-type(3) a:nth-of-type(1) span {
	background-image: url(../assets/images/hd_download_iphone.png);
}
.template .light2 .middle .character .light_box:nth-of-type(3) a:nth-of-type(2) span {
	background-image: url(../assets/images/hd_download_andriod.png);
}
</style>
