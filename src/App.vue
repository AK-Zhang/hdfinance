<template>
  <div id="app">
    <header>
      <div class="middle">
        <h1 class="fl">
          <a href="#">鸿达金融</a>
        </h1>
        <nav>
          <ul id="nav_u">
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/transactions">交易内参</router-link>
            </li>
            <li>
              <router-link to="/productCenter">产品中心</router-link>
            </li>
            <li>
              <router-link to="/customerService">客户服务</router-link>
            </li>
            <li>
              <router-link to="/softDownload">软件下载</router-link>
            </li>
            <li>
              <router-link to="/aboutUs">关于我们</router-link>
            </li>
          </ul>
        </nav>
        <div class="tel fr">
          <h3>服务热线</h3>
          <h2>159-9366-9582</h2>
        </div>
      </div>
    </header>
    <router-view/>
    <div class="coopart">
      <div class="middle">
        <div class="coo_title">
        </div>
        <ul class="coo_pic">
          <li>南华期货</li>
          <li>中州国际集团</li>
          <li>期货投资</li>
          <li>日发资产</li>
        </ul>
      </div>
    </div>
    <div class="contact">
      <div class="contact_box"></div>
      <div class="contact_box">
        <div class="boxes">
          <div class="tdcode">

          </div>
          <div class="cusp">

          </div>
        </div>
      </div>
      <div class="contact_box"></div>
      <div class="contact_box" id="top"></div>
    </div>
    <footer>
      <div class="middle">
        <nav>
          <ul>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/transactions">交易内参</router-link>
            </li>
            <li>
              <router-link to="/productCenter">产品中心</router-link>
            </li>
            <li>
              <router-link to="/customerService">客户服务</router-link>
            </li>
            <li>
              <router-link to="/softDownload">软件下载</router-link>
            </li>
            <li>
              <router-link to="/aboutUs">关于我们</router-link>
            </li>
          </ul>
        </nav>
        <p>
          Copyright&copy; 2018 鸿达金融 【官网】 版权所有&right;
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  width: 100%;
  font-family: "MicrosoftYaHei";
  color: #ffffff;
  margin: 0 auto;
}
#app header {
  width: 100%;
  height: 100px;
  background-color: #262626;
  font-size: 16px;
  color: #ffffff;
  position: fixed;
  z-index: 999;
}
#app header .middle,
#app footer .middle,
#app .coopart .middle {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
#app header .middle h1 {
  height: 100px;
}
#app header .middle h1 a {
  text-indent: -2000000000px;
  margin-top: 5px;
  margin-right: 20px;
  display: block;
  width: 166px;
  height: 50px;
  background-image: url(./assets/images/hd_home__03.png);
  position: relative;
}
#app header .middle nav ul li,
#app footer .middle nav ul li {
  float: left;
  height: 100px;
}
#app header .middle nav ul li a,
#app footer .middle nav ul li a {
  display: block;
  color: #fff;
  font-size: 16px;
  height: 97px;
  line-height: 96px;
  padding: 0 20px;
  border-top: 3px solid #262626;
}
#app header .middle nav ul li a:hover {
  color: #efc816;
  border-top: 3px solid #efc816;
}
/*#app header .middle nav ul li a.active {
  color: #efc816;
  border-top: 3px solid #efc816;
}*/
#app header .middle .tel {
  height: 100%;
  width: 260px;
  padding-top: 20px;
  padding-left: 100px;
  position: relative;
}
#app header .middle .tel::before {
  content: "";
  position: absolute;
  top: 28px;
  left: 34px;
  display: block;
  background-image: url(./assets/images/index_03.png);
  width: 50px;
  height: 50px;
}
#app header .middle .tel h3 {
  font-weight: 400;
  font-size: 14px;
  line-height: 8px;
}
#app header .middle .tel h2 {
  font-weight: 400;
  font-size: 20px;
  line-height: 5px;
}
#app .coopart .middle .coo_title {
  width: 900px;
  border: 1px solid #ccc;
  border-bottom: 0px;
  position: relative;
  margin: 55px auto;
}
#app .coopart .middle .coo_title:before {
  content: "合作伙伴";
  display: block;
  font-size: 24px;
  background-color: #fff;
  color: #000;
  width: 160px;
  height: 40px;
  text-align: center;
  position: absolute;
  top: -20px;
  left: 370px;
}
#app .coopart .middle .coo_pic {
  width: 850px;
  margin: 0 auto;
  margin-bottom: 48px;
}
#app .coopart .middle .coo_pic li {
  width: 210px;
  height: 78px;
  color: transparent;
  border: 1px solid #ccc;
  display: inline-block;
  text-align: center;
  margin: 0px -1px 0px -4px;
}
#app .coopart .middle .coo_pic li:nth-of-type(1) {
  background-image: url(./assets/images/hd_home__55-19.png);
}
#app .coopart .middle .coo_pic li:nth-of-type(2) {
  background-image: url(./assets/images/hd_home__55.png);
}
#app .coopart .middle .coo_pic li:nth-of-type(3) {
  background-image: url(./assets/images/hd_home__55-18.png);
}
#app .coopart .middle .coo_pic li:nth-of-type(4) {
  background-image: url(./assets/images/hd_home__55-19.png);
}
#app .coopart .middle .coo_pic li:nth-of-type(5) {
  background-image: url(./assets/images/hd_home__55.png);
}
#app .contact {
  width: 40px;
  height: 170px;
  position: fixed;
  top: 35rem;
  right: 0.5rem;
}
#app .contact .contact_box {
  width: 40px;
  height: 40px;
  margin-bottom: 2px;
  border: 1px solid #4a8ff5;
  background-image: url(./assets/images/index_13.png);
  -webkit-background-size: cover;
  background-size: cover;
}
#app .contact .contact_box:nth-of-type(2) {
  background-image: url(./assets/images/index_17.png);
  position: relative;
}
#app .contact .contact_box:nth-of-type(2):hover .boxes {
  display: block;
}
#app .contact .contact_box:nth-of-type(3) {
  background-image: url(./assets/images/index_21.png);
}
#app .contact .contact_box:nth-of-type(4) {
  background-image: url(./assets/images/index_31.png);
}
#app .contact .contact_box .boxes {
  display: none;
}
#app .contact .contact_box .cusp {
  width: 10px;
  height: 10px;
  position: absolute;
  border: 1px solid #4a8ff5;
  transform: rotateZ(45deg);
  top: 15px;
  left: -25px;
  background-color: #fff;
  border-left: 0px;
  border-bottom: 0px;
}
#app .contact .contact_box .tdcode {
  width: 100px;
  height: 100px;
  transform: rotateZ(0deg);
  position: absolute;
  border: 1px solid #4a8ff5;
  top: -29px;
  left: -120px;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url(./assets/images/u75.jpg);
  background-size: cover;
}
#app footer {
  width: 100%;
  background-color: #242729;
  height: 158px;
  text-align: center;
}
#app footer .middle nav {
  padding-left: 328px;
  position: relative;
  height: 90px;
}
</style>
