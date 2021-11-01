<template>
  <div class="footer">
    <div class="content">
      <div class="text" @click="open('/aboutWe')">关于百记</div>
      <div class="line"></div>
      <div class="text" @click="open('/manual')">游戏规则</div>
      <div class="line"></div>
      <div class="text" @click="open('/protection')">博彩拍照</div>
      <div class="line"></div>
      <div class="text" @click="open('/help/tutorial')">手机投注</div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes: [],
      imghost: new Array(11),
      addFavoriteDialogVisible: false,
      time: "",
    };
  },
  watch: {
    time: function () {
      let _this = this;
      setTimeout(() => {
        _this.headerTime(Math.round(new Date()));
      }, 1000);
      immediate: true;
    },
  },
  mounted() {
    console.log(this.domins);
    this.headerTime(Math.round(new Date()));
  },
  computed: {},
  methods: {
    open(item) {
      let domins = JSON.parse(sessionStorage.getItem("domins"));
      if (domins.length) {
        // location.href = 'https://' + domins[0].domain.domain + item + ''
        window.open("https://" + domins[0].domain.domain + item + "");
      }
    },
    headerTime(date) {
      date = new Date(date);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      var h = date.getHours();
      var m1 = date.getMinutes();
      var s = date.getSeconds();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      s = s < 10 ? "0" + s : s;
      m1 = m1 < 10 ? "0" + m1 : m1;
      this.time = y + "-" + m + "-" + d + " " + h + ":" + m1 + ":" + s;
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
//   margin-top: 30px;
//   margin-bottom: 120px;
  width: 100%;
height: 110px;
  background: #ffffff;
  box-shadow: 0px -1px 0px 0px #e9e9e9;

  .content {
    width: 560px;
    height: 34px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .text {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      &:hover {
        color: #f27c55;
      }
    }
    .line {
      height: 12px;
      width: 1px;
      background: #999999;
    }
  }
}
</style>
