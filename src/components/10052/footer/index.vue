<template>
  <footer class="footer">
    <div class="down">
      <div class="content">
        <div class="item">
          <span>赛事赞助</span>
          <router-link class="pic" to="#"><img :src="$imgs['footer/footer_logo1']"></router-link>
          <span class="cup">竞技侠春季杯</span>
          <span>战队赞助</span>
          <router-link class="pic" to="#"><img :src="$imgs['footer/footer_logo2']"></router-link>
          <div class="team">
            <p>TNC</p>
            <p>Predator</p>
          </div>
        </div>
        <div class="item">
          <img :src="$imgs['footer/icon10']" />
          <img :src="$imgs['footer/icon11']" />
          <img :src="$imgs['footer/icon12']" />
          <img :src="$imgs['footer/icon13']" />
        </div>
        <div class="item">
          <span>支付支持</span>
          <img :src="$imgs['footer/icon1']" />
          <img :src="$imgs['footer/icon2']" />
          <img :src="$imgs['footer/icon3']" />
          <img :src="$imgs['footer/icon4']" />
          <img :src="$imgs['footer/icon5']" />
        </div>
      </div>
      <div class="cp">
        Copyright © 2018 Sportsypl Co., Ltd. All Rights reserved. 竞技侠由First Cagayan Leisure & Resort Corporation颁发执照并受其委员会监管
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer{
  a {
    text-decoration: none!important;
  }
  .up {
    width: 100%;
    height: 211px;
    background: #D8D8D8;
    padding-top: 26px;
    h4 {
      font-size: 14px;
      font-weight: bold;
      color: #121212;
      margin-left: 10px;
      margin-bottom: 10px;
    }
    .wrap {
      display: flex;
      text-align: left;
      justify-content: space-between;
    }
    .left {
      width: 145px;
      text-align: left;
      .logo {
        display: block;
        margin-bottom: 15px;
      }
      .item {
        font-size: 13px;
        color: #8C8C8C;
        line-height: 30px;
        &:nth-child(2n) {
          margin-right: 30px;
        }
      }
    }
    .mid {
      width: 410px;
      .item {
        width: 62px;
        height: 12px;
        font-size: 12px;
        color: #8C8C8C;
        margin: 10px 10px;
        float: left;
      }
    }
    .right {
      width: 210px;
      float: left;
      .item {
        display: inline-block;
        margin: 6px 12px;
        img {
          height: 23px;
        }
      }
    }
  }
  .down {
    width: 100%;
    background: #121212;
    padding-bottom: 10px;
    position: fixed;
    bottom: 0;
    .item {
      display: flex;
      align-items: center;
      margin-top: 20px;
    }
    .content {
      display: flex;
      justify-content: space-between;
    }
    img {
      height: 45px;
      margin: 0 5px;
    }
    span {
      font-size: 14px;
      color: #8C8C8C;
      margin-right: 5px;
    }
    .cup {
      display: inline-block;
      width: 36px;
      height: 36px;
      font-size: 12px;
      color: #8C8C8C;
      line-height: 18px;
      margin-right: 30px;
    }
    .team {
      display: inline-block;
      text-align: left;
      p {
        margin: 0;
      }
      p:nth-child(1) {
        font-size: 16px;
        font-weight: bold;
        color: #8C8C8C;
        line-height: 24px;
      }
      p:nth-child(2) {
        font-size: 12px;
        color: #8C8C8C;
        line-height: 17px;
      }
    }
  }
  .content {
    width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
  }
  .cp {
    margin-top: 18px;
    font-size: 12px;
    color: #8C8C8C;
    line-height: 18px;
    text-align: center;
  }
}
</style>
