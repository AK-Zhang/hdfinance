<template>
  <div class="template">
    <div class="banner">
      <img src="../assets/images/index_10.png" alt="">
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
      <div class="light1">
        <div class="line">
          <h3>为什么选择国际期货？</h3>
        </div>
        <div class="advantage clear">
          <div class="box_light">
            <img src="../assets/images/hd_home__21.png" alt="">
            <h3>政策支持</h3>
            <p>2017年国务院正式发布了《国务院关于扩大对外开放积极利用外资若干措施的通知》(国发[2017]5号)。宣布了中国将坚定不移的推进全球化</p>
          </div>
          <div class="box_light">
            <img src="../assets/images/hd_home__21-08.png" alt="">
            <h3>市场急需</h3>
            <p>国内可投资资金体量巨大，但单一、狭窄的投资渠道无法满足投资增值需求，大量从房产、股票流出资金急需提供保值、增值的更广阔的国际渠道。</p>
          </div>
          <div class="box_light">
            <img src="../assets/images/hd_home__21-09.png" alt="">
            <h3>优势独特</h3>
            <p>1、买卖自由：T+0，24小时交易，随买随卖，双向交易，涨跌都赚钱。2、市场成熟：受政策干预度小。3、价格权威：国际交易，价格权威，交易体量大，无坐庄可能。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="light2">
      <div class="middle">
        <div class="line">
          <h3>为什么选择鸿达金融？</h3>
        </div>
        <div class="character clear">
          <div class="light_box">
            <img src="../assets/images/hd_home__34.png" alt="">
            <h3>国资背景，安全有保障！</h3>
            <p>鸿达金融是一家专注国际金融交易的服务平台，主要提供国际期货、美股港股交易服务，团队成员具有国际先进的金融市场投资经验，着力为打造行业标杆而努力奋斗。</p>
          </div>
          <div class="light_box">
            <img src="../assets/images/hd_home__34-12.png" alt="">
            <h3>免费在线直播室</h3>
            <p>每日盘中，由经验丰富的精英讲师团队倾力打造在线直播室，24小时不间断服务，为您的投资保驾护航！</p>
          </div>
          <div class="light_box">
            <img src="../assets/images/hd_home__34-13.png" alt="">
            <h3>智能量化分析软件</h3>
            <p>免费提供国际顶级天眼量化分析交易软件，及时提供买入卖出参考，让您的交易更简单！</p>
          </div>
          <div class="light_box">
            <img src="../assets/images/hd_home__34-14.png" alt="">
            <h3>资金安全，出入金方便</h3>
            <p>资金第三方托管（民生银行），出入金支持国内大部分银行，自由、快捷、安全。</p>
          </div>
        </div>
      </div>
      <img src="../assets/images/index_51.png" alt="">
    </div>
    <div class="license">
      <div class="middle">
        <div class="line">
          <h3>金融服务牌照</h3>
        </div>
        <img src="../assets/images/index_54.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.template {
  color: #000;
  min-height: 720px;
}
.template .banner {
  width: 100%;
  height: 620px;
}
.template .banner > img{
  width: 100%;
  height: 100%;
}*/
/*.template .middle {
  width: 1200px;
  margin: 0 auto;
}
.template .middle .news {
  width: 100%;
  height: 46px;
  background-color: #F0F0F0;
  border: 1px solid #ddd;
  overflow: hidden;
  margin-top: 10px;
}
.template .middle .news span {
  float: left;
}
.template .middle .news span:nth-of-type(1) {
  font-family: "AriaIMT";
  color: #d72018;
  font-size: 16px;
  line-height: 46px;
  padding-left: 10px;
}
.template .middle .news span:nth-of-type(2) {
  padding-left: 5px;
  line-height: 46px;
  color: #666;
}
.template .middle .news table {
  float: left;
  padding-left: 10px;
}
.template .middle .news table tr {
  height: 46px;
}
.template .middle .news span:nth-of-type(3) {
  float: right;
  font-family: "MicrosoftYaHei";
  font-size: 13px;
  color: #ef5316;
  font-weight: 700;
  line-height: 46px;
  padding-right: 10px;
  cursor: pointer;
}*/
.template .middle .light1 {
  width: 1000px;
  margin: 0 auto;
}
/*分割线*/
/*.template .line{
  width: 900px;
  height: 1px;
  margin: 0 auto;
  margin-top: 46px;
  margin-bottom: 46px;
  border: 0px;
  background-color: #ddd;
  position: relative;

}
.template .line h3 {
  width: 360px;
  text-align: center;
  font-weight: 400;
  font-family: "MicrosoftYaHei";
  font-size: 30px;
  color: #333;
  background-color: #fff;
  position: absolute;
  top: -52px;
  left: 50%; 
  transform: translateX(-50%); 
}*/

/*两点展示*/
.template .middle .light1 .advantage {
  width: 1000px;
  padding-bottom: 40px;
}
.template .middle .light1 .advantage .box_light {
  width: 333px;
  float: left;
  text-align: center;
  padding-top: 44px;
  color: #333;
}
.template .middle .light1 .advantage .box_light img {
  width: 180px;
  height: 180px;
}
.template .middle .light1 .advantage .box_light h3 {
  font-size: 30px;
}
.template .middle .light1 .advantage .box_light p {
  padding: 0px 28px;
  text-align: left;
  font-size: 14px;
  line-height: 24px;
}
.template .light2 {
  width: 100%;
  background-color: #f0f0f0;
  padding-top: 30px;
}
.template .light2 > img {
  width: 100%;
}
.template .light2 .middle .character {
  padding-top: 10px;
  padding-bottom: 82px;
}
.template .light2 .middle .line h3{
  background-color: #f0f0f0;;
}
.template .light2 .middle .character .light_box {
  width: 185px;
  height: 310px;
  margin-right: 60px;
  float: left;
  background-color: #fff;
  text-align: center;
  padding: 30px 15px;
}
.template .light2 .middle .character .light_box h3{
  font-size: 16px;
  font-weight: 700;
}
.template .light2 .middle .character .light_box p {
  font-size: 12px;
  line-height: 24px;
}
.template .license {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
.template .license .line {
  margin-bottom: 60px;
}
</style>
