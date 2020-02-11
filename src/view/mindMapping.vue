<template>
  <div class="overall">
    <search-box></search-box>
    <div class="content">
      <div class="content_title">思维导图</div>
	    <div class="mind_card">
        <div class="mind_title">{{title}}</div>
        <div class="mind_date">{{date}}</div>
      </div>
    </div>
    
    <annotation-area></annotation-area>
  </div>
</template>
<script>
import SearchBox from "../components/SearchBox";
import AnnotationArea from "../components/AnnotationArea"
export default {
  components: {
    SearchBox,
    AnnotationArea
  },
  data(){
    return{
      title: '建行信用卡',
      date:'创建时间： 2019年12月12日 ； 尺寸大小：1200*768px'
    }
  }
}
</script>
<style lang="scss">
.overall
 {
  width: 1440px;
  height: 860px;
  background: #F6F6F6;
  position: absolute;
  top:50%;
  left: 50%;
  margin: -430px 0 0 -720px;
  border: 1px solid #D0D0D0;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.05);
}
.content {
	width: 876px;
	height: 100%;
  left: 104px;
	position: absolute;
	.content_title {
		line-height: 41px;
		font-size: 12px;
    color: #999999;
		display: inline-block;
		vertical-align: middle;
	}
	.mind_card {
		width: 876px;
		height: 670px;
		background: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.05);
    .mind_title {
      font-size: 25px;
    }
    .mind_date {
      font-size: 12px;
      color: #999999;
      padding-top: 5px;
      padding-bottom: 15px;
    }
	}
}
</style>