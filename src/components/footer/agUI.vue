
<template>
  <div class="app-footer">
    <div class="app-footer-mid">
      <p>
        <span>{{$constant .title}}深度合作平台</span>
        <img src="../../assets/10030/img/footer/foot_longmen@2x.png" alt="">
      </p>
      <p>
        <img src="../../assets/10030/img/footer/foot_pic@2x.png" alt="">
        <span>菲律宾PAGCOR合法博彩执照</span>
      </p>
      <p>
        <span>{{$constant .title}}支付合作渠道</span>
        <img src="../../assets/10030/img/footer/foot_pay@2x.png" alt="">
      </p>
    </div>
    <p class="copyright">©{{$constant .title}} 版权所有 All rights Reserved</p>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {

    }
  },
  computed: {

  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  width: 100%;
  background-color: #23232A;
  border-top: 1px solid #23232A;
  div{
    height: 80px;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #2F2F2F;
    font-size: 12px;
    color: #919191;
    p{
      display: flex;
    align-items: center;
    }
    p:nth-child(1) img{
      height: 28px;
      margin-left: 12px;
    }
    p:nth-child(2) {
      position: relative;
      padding: 0 77px 0 24px;
      &::before{
        content: '';
        position: absolute;
        width: 1px;
        height: 17px;
        background-color: #535353;
        left: 0;
        top: 25px;
      }
      &::after{
        content: '';
        position: absolute;
        width: 1px;
        height: 17px;
        background-color: #535353;
        right: 0;
        top: 25px;
      }
      img{
        width: 46px;
        margin-right: 12px;
        opacity: .6;
        transition: .3s;
        &:hover{
          opacity: 1;
        }
      }
    }
    p:nth-child(3) img{
      height: 21px;
      margin-left: 6px;
      opacity: .6;
      transition: .3s;
      &:hover{
        opacity: 1;
      }
    }
  }
  .copyright{
    height: 48px;
    line-height: 48px;
    font-size: 12px;
    color: #666;
    text-align: center;
  }
}
</style>
