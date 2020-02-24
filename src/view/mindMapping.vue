<template>
  <div class="overall">
    <search-box :pageName="pageName"></search-box>
    <div id="searchBox-header-right" @click="toggleRobot">
                <p>Hi,我是Panda博士，有什么问题可以问我哟</p>
                <div id="searchBox-header-right-photo"></div>
                <div class="right-dot"></div>
                <div class="right-dot"></div>
      </div>
    <div class="content">
      <div class="content_title">思维导图</div>
	    <div class="mind_card">
        <div class="mind_title">{{title}}</div>
        <div class="mind_date">{{date}}</div>
        <div class="mind_map">
          <img id="buttonL" src="../assets/left.png" alt=""><img>
          <img id="buttonR" src="../assets/right.png" alt=""><img>
        <mind-one></mind-one> 
        </div>
         <div class="swiper">
          <img src="../assets/mind.jpg" width="15%" height="72px" alt="">
          <img src="../assets/mind.jpg" width="15%" height="72px" alt="">
          <img src="../assets/mind.jpg" width="15%" height="72px" alt="">
          <img src="../assets/mind.jpg" width="15%" height="72px" alt="">
          <img src="../assets/mind.jpg" width="15%" height="72px" alt="">
          <img src="../assets/mind.jpg" width="15%" height="72px" alt="">
          <i class="iconL"><img src="../assets/iconL.png" alt=""></i>
          <i class="iconR"><img src="../assets//iconR.png" alt=""></i>
        </div>
        <annotation-area></annotation-area>
	    </div>
       
  </div>
    <robot-chat :robotShow="robotShow" @changeRobotState="changeRobotState"></robot-chat>
  </div>
</template>
<script>
import SearchBox from "../components/SearchBox";
import AnnotationArea from "../components/AnnotationArea"
import gojs from 'gojs'
import MindOne from "../components/MindOne"
import robotChat from "../components/robotChat"
export default {
  components: {
    SearchBox,
    AnnotationArea,
    MindOne,
    robotChat
  },
  data() {
    return {
      title:"",
      date: "",
      robotShow:false,
      pageName: '思维导图'
    }
  },
  methods: {
    toggleRobot(){
            this.robotShow=!this.robotShow;
        },
        changeRobotState(){
            this.robotShow=false;
        }
  }
  
}
</script>
<style lang="scss">
.overall {
  width: 100%;
  height: 100%;
  position: relative;
  background: #F6F6F6;
  position: absolute;
  overflow: hidden;
  left: 0;
  margin: 0 auto;
  border: 1px solid #D0D0D0;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.05);
}
#searchBox-header-right{
            width: 350px;
            height: 100px;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            p{
                width: 273px;
                background: #4FADFF;
                height: 34px;
                font-size: 12px;
                margin: 0;
                color: #fff;
                display: inline-block;
                line-height: 34px;
                text-align: center;
                border-radius: 19.5px 19.5px 0px 19.5px;
                position: absolute;
                top: 30px;
                right: 110px;
            }
            #searchBox-header-right-photo{
                width: 61px;
                height: 61px;
                display: inline-block;
                border-radius: 30.5px;
                position: absolute;
                top: 16px;
                right: 40px;
                background: url("/static/img/pandaRobot.png") no-repeat center center;
            }
            &>.right-dot:nth-child(3){
                background: #289BFF;
                position: absolute;
                top: 21px;
                right: 26px;
                display: inline-block;
                width: 15px;
                height: 15px;
                border-radius: 7.5px;
            }
            &>.right-dot:nth-child(4){
                background: #289BFF;
                position: absolute;
                top: 11px;
                right: 17px;
                display: inline-block;
                width: 9px;
                height: 9px;
                border-radius: 4.5px;
            }
        }
.content {
	width: 80%;
  min-height: 670px;
  left: 10%;
	position: absolute;
	.content_title {
		line-height: 41px;
		font-size: 12px;
    color: #999999;
		display: inline-block;
		vertical-align: middle;
	}
	.mind_card {
		width: 60%;
    min-height: 670px;
		background: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.05);
    padding: 26px 0 26px 30px;
    .mind_title {
      font-size: 25px;
    }
    .mind_date {
      font-size: 12px;
      color: #999999;
      padding-top: 5px;
      padding-bottom: 15px;
    }
    #buttonL {
      width: 44px;
      height: 44px;
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 20px;
    }
    #buttonR {
      height: 44px;
      width: 44px;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 20px;
    }
    .mind_map {
      //width: 740px;
      width: 55%;
      //height: 450px;
      //width: calc(100%-30px);
      //padding: 27px 33px;
      //margin: 0 auto;
      box-shadow: 0 2px 10px 0 rgba(225,225,225,0.75);
      position: absolute;
          top: 40%;
          left: 31%;
          transform: translate(-50%, -50%);
    }
  }
  .swiper {
    padding-left: 25px;
    position: relative;
    top: 500px;
    .iconL {
      position: absolute;
      left: 0;
      padding-top: 25px;
    }
    .iconR {
      position: absolute;
      right: 20px;
      padding-top: 25px;
    }

  }
}
</style>