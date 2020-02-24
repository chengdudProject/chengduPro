<template>
    <div id="slide-wrap" :style="`width:${width}px;height:${height-0+30}px`">
      <div id="slide-img">
        <img :src="slideImgSrc">
      </div>
      <ul id="slide-toggle" :style="`margin-left:${width/2-(slideList.length*8)}px;`">
        <li v-for="(item,index) in slideList" :key="index" :class="index==slideIndex?'active':''" @click="toggleClick(index)"></li>
      </ul>
    </div>
</template>
 
<script>
export default {
    props:{
      slideList:{
          type:Array,
          default(){
            return [
              {
                url:"/static/img/searchBg.png"
              },
              {
                url:"/static/img/searchBg.png"
              },
              {
                url:"/static/img/searchBg.png"
              }
            ]
          }
      },
      width:{
          type:String,
          default:"108"
      },
      height:{
          type:String,
          default:"68"
      }
    },
    data(){
      return{
        slideIndex:0,
        slideImgSrc:"/static/img/searchBg.png"
      }
    },
    methods:{
      toggleClick(index){
        this.slideIndex=index;
        this.slideImgSrc=this.slideList[index][url]
      }
    }
}
</script>
 
<style lang="scss" scoped>
#slide-wrap{
  #slide-img{
    width: 100%;
    height: calc(100% - 30px);
    border-radius: 4px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
  #slide-toggle{
    height: 30px;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    li{
      background: #414655;
      width: 5px;
      height: 5px;
      border-radius: 2.5px;
      float: left;
      margin: 12px 5px;
      cursor: pointer;
    }
    li.active{
      background: #6D8FFF;
    }
    li:hover{
      background: #6D8FFF;
    }
  }
}
</style>