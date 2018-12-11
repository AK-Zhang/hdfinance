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
          <h3>产品中心</h3>
        </div>
    </div>
    <div class="light2">
      <div class="middle">
        <div class="character clear">
          <table>
            <thead>
              <tr>
                <th>合约名称</th>
                <th>美原油CL</th>
                <th>美黄金GC</th>
                <th>美白银SI</th>
                <th>美精铜HG</th>
                <th>天然气NG</th>
                <th>恒指HIS</th>
                <th>小恒指MCH</th>
                <th>德指FDAX</th>
                <th>A50指数CN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>交易单位</td>
                <td>1000桶/手</td>
                <td>100盎司/手</td>
                <td>5000盎司/手</td>
                <td>25000磅/手</td>
                <td>10000mmbtu</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>报价单位</td>
                <td>美元/桶</td>
                <td>美元/盎司</td>
                <td>美元/盎司</td>
                <td>美元/磅</td>
                <td>美元/mmbtu</td>
                <td>港元/手</td>
                <td>港元/手</td>
                <td>欧元/手</td>
                <td>美元/手</td>
              </tr>
              <tr>
                <td>最小波动</td>
                <td>0.01</td>
                <td>0.1</td>
                <td>0.005</td>
                <td>0.0005</td>
                <td>0.01</td>
                <td>1</td>
                <td>1</td>
                <td>0.5</td>
                <td>2.5</td>
              </tr>
              <tr>
                <td>保证金(美元)</td>
                <td>450</td>
                <td>900</td>
                <td>900</td>
                <td>900</td>
                <td>675</td>
                <td>675</td>
                <td>225</td>
                <td>1350</td>
                <td>225</td>
              </tr>
              <tr>
                <td>隔夜费</td>
                <td colspan="9">无</td>
              </tr>
              <tr>
                <td>交易时间<br/>(交易日)</td>
                <td colspan="5">夏令时：6:000-次日5:00<br>冬令时：7:00-次日6:00</td>
                <td colspan="2">09:15-12-00<br>13:00-16:30<br>17:00-04:45</td>
                <td>13:50-04:00</td>
                <td>09:00-16:00<br>17:00-04:45</td>
              </tr>
              <tr>
                <td>强平规则</td>
                <td colspan="9">当风险度>112%时您的持仓会被强平，直至风险度小于112%。</td>
              </tr>
              <tr>
                <td>最大持仓</td>
                <td colspan="9">无限制</td>
              </tr>
              <tr>
                <td>出入金时间</td>
                <td colspan="9">入金时间：交易日均可；出金时间：交易日9:00-16:30；入金无限制；出金：单笔限额5万，当日不超过20万。</td>
              </tr>
              <tr>
                <td>汇率</td>
                <td colspan="9">固定汇率：1美金=702人民币=7.7港币；1欧元=1.2美金</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productCenter',
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
  /*background-color: #f0f0f0;*/
  padding-top: 30px;
}
.template .light2 .middle .character {
  padding-top: 10px;
  padding-bottom: 30px;
  margin: 0 auto;
}
.template .light2 .middle .character >table {
  width: 100%;
  border:1px solid #ddd; 
  border-collapse: collapse;
  text-align: center;
}
.template .light2 .middle .character table tr{
  height: 40px;
}
.template .light2 .middle .character table tr td,
.template .light2 .middle .character table tr th {
  border: 1px solid #ddd;
  font-family: "MicrosoftYaHei";
  font-size: 14px;
  color: #666;
}
.template .light2 .middle .character table tr th {
  background-color: #FFF8F2;
  color: #444;
}
.template .light2 .middle .character table tr:nth-of-type(6) {
  height: 80px;

}
</style>
