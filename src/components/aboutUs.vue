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
          <h3>关于我们</h3>
        </div>
    </div>
    <div class="light2">
      <div class="middle">
        <div class="character clear">
          <div class="light_box">
            <h3>双赢</h3>
          </div>
          <div class="light_box">
            <h3>规范</h3>
          </div>
          <div class="light_box">
            <h3>自律</h3>
          </div>
          	<p>
          	  鸿达国际资本有限公司（简称“鸿达金融”），2018年注册成立于中国香港特别行政区，主要从事金融投资管理服务业务，为了促进中国金融业发展，充分激活民间资本，整合社会资源，解决期货市场期民的资金短缺等问题，经长期的探索和实践，创建了独特的期货配资运营模式，以“双赢、规范、自律”的经营原则，力求成为行业的开创者和领军者。
			</p>
			<p>
				公司在合法合规运行的基础上，拥有健全的风险控制体系，专业的投研团队和领先的研发成果，以专业化的团队、雄厚的经济为基础，为客户提供长期的、稳定的国际期货和港美股投资服务工作。
			</p>
			<p>
				目前公司主要承接中州国际客户服务业务，凭借我们完善的商业模式和极致的软件产品体验，为客户打造了一个一流的国际金融期货服务平台。
			</p>
			<p>
				未来鸿达金融将会开拓更多类似优质的渠道和投资交易平台，充分满足市场投资需求，把资金投资收益最大化放在首位，最终实现我们合作共赢的终极目标。
			</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
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
	height: 220px;
	margin-right: 2rem;
	margin-bottom: 20px;
	background-color: #fff;
	float: left;
	text-align: center;
	/*padding: 0px 30px;*/
	position: relative;
	background-image: url(../assets/images/us_03.png);
	background-size: cover;
}
.template .light2 .middle .character .light_box:nth-of-type(2) {
	background-image: url(../assets/images/us_05.png);
}
.template .light2 .middle .character .light_box:nth-of-type(3) {
	background-image: url(../assets/images/us_07.png);
}
.template .light2 .middle .character .light_box:nth-of-type(3) {
	margin-right: 0px;
}
.template .light2 .middle .character .light_box h3 {
	font-family: "MicrosoftYaHei";
	font-size: 36px;
	line-height: 150px;
	color: #fff
}
.template .light2 .middle .character p {
	text-indent: 2em;
	/*padding: 0px 30px;*/
	/*height: 130px;*/
	font-size: 14px;
	color: #555;
	text-align: left;
}
</style>
