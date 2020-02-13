<template>
  <div class="overall">
    <search-box></search-box>
    <div class="content">
      <div class="content_title">思维导图</div>
	    <div class="mind_card">
        <div class="mind_title">{{title}}</div>
        <div class="mind_date">{{date}}</div>
        <img id="buttonL" src="../assets/left.png" alt=""><img>
        <img id="buttonR" src="../assets/right.png" alt=""><img>
        <div class="mind_map">
        <mind-one></mind-one>
       
        </div>
         <div class="swiper">
          <img src="../assets/mind.jpg" width="120px" height="72px" alt="">
          <img src="../assets/mind.jpg" width="120px" height="72px" alt="">
          <img src="../assets/mind.jpg" width="120px" height="72px" alt="">
          <img src="../assets/mind.jpg" width="120px" height="72px" alt="">
          <img src="../assets/mind.jpg" width="120px" height="72px" alt="">
          <img src="../assets/mind.jpg" width="120px" height="72px" alt="">
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
import robotChat from "@/components/robotChat"
import gojs from 'gojs'
import MindOne from "../components/MindOne"

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
      robotShow:false
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
.content {
	width: 876px;
	height: 100%;
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
		width: 848px;
		height: 618px;
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
      top: 350px;
      right:20px;
    }
    #buttonR {
      height: 44px;
      width: 44px;
      right: 500px;
      display: inline-block;
      position: absolute;
      top: 350px;
      left:20px;
    }
    .mind_map {
      width: 740px;
      height: 450px;
      padding: 27px 33px;
      .myDiagramDiv {
        margin: 0 auto;
      }
    }
  }
  .swiper {
    padding-left: 25px;
    .iconL {
      position: absolute;
      left: 10px;
      padding-top: 25px;
    }
    .iconR {
      position: absolute;
      right: 10px;
      padding-top: 25px;
    }

  }
}
</style>