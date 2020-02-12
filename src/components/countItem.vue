<template>
    <div class="count-wrap">
      <p class="count-wrap-title">
        <b>{{countTitle}}</b>
        <span>{{countTitleDes}}</span>
        <i>...</i>
      </p>
      <div class="count-wrap-content" :style="`border-top: 1px solid ${countTitleColor};`">
        <p class="count-wrap-content-headerIcon" :style="`background:${countTitleColor};`"></p>
        <!-- <p class="count-wrap-content-headerIconTriangle" :style="`background:${countTitleColor};`"></p> -->
        <slot></slot>
      </div>
    </div>
</template>
 
<script>
export default {
    props:{
      countTitle:{
          type:String,
          default:"智能计算"
      },
      countTitleDes:{
          type:String,
          default:"仅显示该问题的智能计算的内容"
      },
      countTitleColor:{
          type:String,
          default:"#4FADFF"
      }
    },
    data(){
      return{

      }
    }
}
</script>
 
<style lang="scss" scoped>
.count-wrap{
  width: calc(100% - 40px);
  min-height: 235px;
  padding: 20px;
  .count-wrap-title{
    height: 30px;
    line-height: 30px;
    margin: 0;
    position: relative;
    b{
      font-size: 14px;
      color: #FFF;
      font-weight: 500;
    }
    span{
      font-size: 11px;
      color: #FFF;
      opacity: 0.4;
    }
    i{
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      width: 40px;
      height: 30px;
      cursor: pointer;
      color: #FFF;
      line-height: 17px;
      text-align: center;
      font-size: 24px;
    }
  }
  .count-wrap-content{
    min-height:210px;
    width: 100%; 
    border-top: 1px solid #4FADFF;
    margin-top: 6px;
    position: relative;
    background: #454E67;
    opacity: 0.9;
    .count-wrap-content-headerIcon{
      position: absolute;
      top: -6px;
      left: 0;
      width: 70px;
      height: 5px;
      background: #4FADFF;
      margin: 0;
    }
    .count-wrap-content-headerIconTriangle{
      content: "";
      position: absolute;
      display: inline-block;
      width: 0;
      height: 0;
      border-left: 100px solid #4FADFF;
      border-top: 50px solid transparent;
      border-bottom: 50px solid transparent;
      top: -5px;
      left: 70px;
    }
  }
}
</style>