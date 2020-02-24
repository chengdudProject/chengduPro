<template>
  <div class="search_box">
    <div class="title">
      <div class="box">
        <div class="routerSearch" @click="toBox"> 计算BOX |</div>
        <p>{{pageName}}</p></div>
      </div>
    <div class="container">
      <form action="" class="parent">
        <input type="text" class="input" placeholder="请输入内容" value="信用卡">
        <input type="button" class="btn_vioce">
        <input type="button" class="btn_picture">
        <button type="submit" class="btn" @click="toSearchContent">智能计算</button>
      </form>
    </div>
     
      
  </div>
</template>

<script>

  export default {
    components: {
      
    },
    data() {
      return {
        input: '信用卡',
        daohang:' ',
        pageName: this.$attrs.pageName
      }
    },
    methods: {
      toBox() {
        this.$router.replace('/search')
      },
      toSearchContent() {
        this.$router.replace('/searchContent')
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.search_box {
  background: #FFFFFF;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.05);
  width: 100%;
  height: 100px;
  position: relative;
    .title {
      width: 340px;
      height: 100px;
      background: url(../assets/box-small.png) no-repeat 35px 23px;
      display: inline-block;
      .box {
        margin: 0;
        width: 191px;
        height: 100px;
        position: absolute;
        padding-left: 104px;
        padding-top: 16px;
        vertical-align: middle;
        .routerSearch {
          font-family: PingFangSC-Regular;
          font-size: 24px;
          color: #222222;
          letter-spacing: 0;
          display: inline-block;
        }
        p {
          font-size: 18px;
          color: #289BFF;
          letter-spacing: 0;
          line-height: 33px;
          display: inline-block;
        }
      }
    }
    .container {
      margin-top: 20px;
      padding-left: 45px;
      position: absolute;
      width: 640px;
      height: 50px;
      display: inline-block;
      .parent {
        position: relative;
        .input {
          width: 638px;
          height: 48px;
          position: absolute;
          border: 1px solid #CDCDCD;
          border-radius: 3px;
          font-size: 16px;
        }
        .btn_vioce {
          height: 36px;
          width: 35px;
          position: absolute;
          background: url("../assets/voice.png") no-repeat ;
          left: 418px;
          top: 8px;
          border: none;
          outline: none;
          cursor: pointer;
        }
        .btn_picture {
          height: 36px;
          width: 35px;
          position: absolute;
          background: url("../assets/picture.png") no-repeat ;
          left: 463px;
          top: 8px;
          border: none;
          outline: none;
          cursor: pointer;
        }
        .btn {
          width: 127px;
          height: 50px;
          position: absolute;
          border: 0;
          outline: none;
          top: 0;
          right: 0;
          background: #289BFF;
          font-size: 16px;
          color: #FFFFFF;
          border-radius: 0px 3px 3px 0px;
        }
      }
      }
      
}

</style>