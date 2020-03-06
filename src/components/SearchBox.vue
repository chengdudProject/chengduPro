<template>
  <div class="search_box">
    <div class="title">
      <div class="box">
        <div class="routerSearch" @click="toBox"> 计算BOX |</div>
      </div>
      <p>{{pageName}}</p>
    </div>
    <div class="container">
        <el-input v-model="searchBox" placeholder="请输入内容"></el-input>
        <el-button type="primary" @click="toSearchContent" icon="el-icon-compute">智能计算</el-button>
        <span id="search-audio"></span>
        <span id="search-photo"></span>
    </div>
  </div>
</template>

<script>

  export default {
    components: {
      
    },
    data() {
      return {
        searchBox: '信用卡',
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
      //display: inline-block;
      float: left;
      .box {
        float: left;
        margin: 0;
        width: 250px;
        height: 100px;
        position: absolute;
        padding-left: 104px;
        padding-top: 30px;
        vertical-align: middle;
        .routerSearch {
          font-family: "PingFangSC-Regular";
          font-size: 24px;
          color: #222222;
          letter-spacing: 0;
          display: inline-block;
        }
      }
      p {
          //float: left
          padding-left: 220px;
          padding-top: 30px;
          font-size: 18px;
          color: #289BFF;
          letter-spacing: 0;
          line-height: 33px;
          display: inline-block;
        }
      
    }
    .container {
      width: 640px;
      height: 50px;
      overflow: hidden;
      position: relative;
      top:20px;
      .el-input{
        float: left;
        width: 510px;
        height: 48px;
        font-size: 16px;
        border-radius: 0;
        .el-input__inner{
          height: 100%;
          width: 510px;
          height: 48px;
          border-radius: 0;
        }
      }
      .el-button {
        float: left;
        width: 127px;
        height: 48px;
        line-height: 48px;
        font-size: 16px;
        padding: 0;
        border-radius: 0;
        .el-icon-compute{
          width: 27px;
          height: 27px;
          background:url("/static/img/compute.png") no-repeat;
          float: left;
          margin-top: 15px;
        }
        span{
          float: left;
        }
      }
      #search-audio {
          height: 37px;
          width: 36px;
          position: absolute;
          background: url("../assets/voice.png") no-repeat;
          left: 418px;
          top: 5px;
          border: none;
          outline: none;
          cursor: pointer;
      }
      #search-photo {
        height: 37px;
        width: 36px;
        position: absolute;
        background: url("../assets/picture.png") no-repeat ;
        left: 463px;
        top: 5px;
        border: none;
        outline: none;
        cursor: pointer;
      }
      #icon-photo{
        display: inline-block;
        width: 36px;
        height: 36px;
        position:absolute;
        top: 10px;
        left: 445px;
        z-index: 999;
        background: url("/static/img/icon-photo.png") no-repeat center center;
        cursor: pointer;
      }
    }
}    


</style>

<style lang="scss">
  .search_box {
    .container {
      width: 640px;
      height: 50px;
      overflow: hidden;
      position: relative;
      top:20px;
      .el-input{
        float: left;
        width: 510px;
        height: 48px;
        font-size: 16px;
        border-radius: 0;
        .el-input__inner{
          height: 100%;
          width: 510px;
          height: 48px;
          border-radius: 0;
        }
      }
      .el-button {
        float: left;
        width: 127px;
        height: 48px;
        line-height: 48px;
        font-size: 16px;
        padding: 0;
        border-radius: 0;
        .el-icon-compute{
          width: 35px;
          height: 40px;
          background:url("/static/img/compute.png") no-repeat;
          float: left;
          margin-top: 6px;
          margin-left: 3px;
          text-align: center;
        }
        span{
          float: left;
        }
      }
  }
  }
</style>