<template>
  <div class="template">
    <div class="banner">
      <img src="../assets/images/ba.jpg" alt="">
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
          <h3>交易内参</h3>
        </div>
    </div>
    <div class="light2">
      <div class="middle">
        <div class="character clear">
          <div class="light_box">
            <h3>国资背景，安全有保障！</h3>
            <p>鸿达金融是一家专注国际金融交易的服务平台，主要提供国际期货、美股港股交易服务，团队成员具有国际先进的金融市场投资经验，着力为打造行业标杆而努力奋斗。</p>
            <span>2018-03-07 14:47:56</span>
          </div>
          <div class="light_box">
            <h3>免费在线直播室</h3>
            <p>每日盘中，由经验丰富的精英讲师团队倾力打造在线直播室，24小时不间断服务，为您的投资保驾护航！</p>
            <span>2018-03-07 14:47:56</span>
          </div>
          <div class="light_box">
            <h3>智能量化分析软件</h3>
            <p>免费提供国际顶级天眼量化分析交易软件，及时提供买入卖出参考，让您的交易更简单！</p>
            <span>2018-03-07 14:47:56</span>
          </div>
          <div class="light_box">
            <h3>资金安全，出入金方便</h3>
            <p>资金第三方托管（民生银行），出入金支持国内大部分银行，自由、快捷、安全。</p>
            <span>2018-03-07 14:47:56</span>
          </div>
          <div class="light_box">
            <h3>资金安全，出入金方便</h3>
            <p>资金第三方托管（民生银行），出入金支持国内大部分银行，自由、快捷、安全。</p>
            <span>2018-03-07 14:47:56</span>
          </div>
          <div class="light_box">
            <h3>资金安全，出入金方便</h3>
            <p>资金第三方托管（民生银行），出入金支持国内大部分银行，自由、快捷、安全。</p>
            <span>2018-03-07 14:47:56</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transactions',
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
  background-color: #f0f0f0;
  padding-top: 30px;
}
.template .light2 .middle .character {
  padding-top: 10px;
  padding-bottom: 30px;
  margin: 0 auto;
}
.template .light2 .middle .character .light_box {
	width: 37.5rem;
	height: 100px;
	margin-right: 2rem;
	margin-bottom: 20px;
	background-color: #fff;
	float: left;
	padding: 0px 30px;
	position: relative;
}
.template .light2 .middle .character .light_box:nth-of-type(even) {
	margin-right: 0px;
}
.template .light2 .middle .character .light_box h3 {
	font-size: 16px;
	color: #333
}
.template .light2 .middle .character .light_box p {
	font-size: 12px;
	color: #555;
}
.template .light2 .middle .character .light_box span {
	font-size: 10px;
	color: #555;
	position: absolute;
	top: 14px;
	right: 14px;
}
</style>
