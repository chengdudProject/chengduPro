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
      <div class="content-title">内容精读</div>
      <div class="content-card">
        <div class="card-title">{{ title }}</div>
        <div class="card-date">{{ date }}</div>
        <div
          :style="cardStyle(item.type)"
          v-for="item in cardInfo"
          :key="item.id"
          @click="annotation"
        >
          <!-- {{item.article | checkStyle}} -->
          <article-content v-html="checkStyle(item.article)"></article-content>
        </div>
      </div>
      <annotation-area :annotationInfo="annotationInfo"></annotation-area>
    </div>

    <robot-chat
      :robotShow="robotShow"
      @changeRobotState="changeRobotState"
    ></robot-chat>
  </div>
</template>
<script>
import SearchBox from "../components/SearchBox";
import AnnotationArea from "../components/AnnotationArea";
import robotChat from "../components/robotChat";
import Vue from "vue";
export default {
  components: {
    SearchBox,
    AnnotationArea,
    robotChat,
    "article-content": {
      props: {
        html: String
      },
      render(h) {
        const com = Vue.extend({
          template: `<div>${this.html}</div>`
        });
        return h(com, {});
      }
    }
  },
  data() {
    return {
      pageName: "内容精读",
      title: "信用卡取现",
      date: "创建时间： 2019年12月12日； 作者：刘茜茜",
      robotShow: false,
      annotationInfo: "持卡人",
      // annotationInfo: {
      //   notesInfo: {
      // 		title: '持卡人',
      // 		content: '所谓持卡人，就是办理卡片时所用证件的主人，比如张三用其身份证在甲银行柜台办理一张银行卡，则这张银行卡的持卡人就是张三，即使这张银行卡由李四拿着，那持卡人仍是张三，不会变成李四。该银行卡的业务办理，均视为张三办理，由此带来的相关义务也由张三承担。'
      // 	},
      // 	linksList: [
      // 		{
      // 			id:0,
      // 			title: '信用卡丢了怎么补办？',
      // 			website: 'https://zhidao.baidu.com',
      // 			content: '持卡人应即时办理挂失。信用卡挂失后的盗用风险由银行承担，挂失前48小时内的非凭密码消费对河涸海干'
      // 		},
      // 		{
      // 			id:1,
      // 			title: '信用卡丢了怎么补办？',
      // 			website: 'https://zhidao.baidu.com',
      // 			content: '持卡人应即时办理挂失。信用卡挂失后的盗用风险由银行承担，挂失前48小时内的非凭密码消费对河涸海干'
      // 		}
      // 	],
      // 	items: [
      // 		{ type: '', label: '信用卡取现' },
      // 		{ type: 'info', label: '信用卡分期还款' },
      // 		{ type: 'info', label: '信用卡逾期' },
      // 		{ type: 'info', label: '储蓄卡' },
      // 		{ type: 'info', label: '储蓄卡挂失' }
      // 	]
      // },
      cardInfo: [
        {
          id: 1,
          type: "small",
          article:
            "信用卡取现不同于信用卡套现，信用卡套现是信用卡本身固有的功能之一，持卡人可以使用信用卡向银行提取现金，信用卡取现主要包括透支取现和" +
            "溢缴款取现两种方式。透支取现是需要支付利息，并且是从你提取现金的当天就开始计算利息，而溢缴款取现则不需要支付利息，仅需支付部分手续费，具体视各银行规定。需要注意的是Visa国际信用卡组织下的银行标志有"
        },
        {
          id: 2,
          type: "small",
          article:
            "从你提取现金的当天就开始计算利息，而溢缴款取现则不需要支付利息，仅需支付部分手续费，具体视各银行规定。需要注意的是Visa国际信用卡组织下的银行标志有"
        },
        { id: 3, type: "big", article: "取现" },
        { id: 4, type: "middle", article: "国内" },
        {
          id: 5,
          type: "small",
          article:
            "信用卡上如果有银联的标志说明该卡加入了中国银联组织持卡人可以在任何有银联标志的ATM机上取现"
        },
        { id: 6, type: "middle", article: "境外" },
        {
          id: 7,
          type: "small",
          article:
            "在境外除了港澳台地区外有不少国家银联系统没有普及所以境外取现大部分都需要走国际卡组织通道这就要看你持有的是否是一张国际卡了要想分辨出国际卡" +
            "很容易只要看信用卡上除了银联外是否还有诸如Visa或Master信用卡组织的LOGO。"
        },
        { id: 8, type: "big", article: "方式" },

        {
          id: 9,
          type: "small",
          article:
            "信用卡取现主要包括透支取现和溢缴款取现两种方式，透支取现是银行为持卡人提供的小额现金借款，在持卡人急需时助持卡人灵活调动资金。"
        },
        {
          id: 10,
          type: "small",
          article:
            "溢缴款取现是指信用卡客户还款时多缴的资金或存放在信用卡账户内的资金，取出溢缴款需要支付一定金额的手续费用。该笔款可增加持卡人信用卡的" +
            "可用额度，或直接用于消费还款。如果信用卡内有溢缴款，则先扣溢缴款，再扣信用额度，溢缴款大于消费金额，则不会形成透支。"
        },
        { id: 11, type: "big", article: "主要方法" },
        {
          id: 12,
          type: "small",
          article:
            "关于信用卡取现方法，持卡人只须登陆银行信用卡网上银行，选择预借现金功能，然后根据提示操作，从信用卡预借的现金就可直接打入个人借记卡账户" +
            "操作极为简便。电话预借现金就是通过拨打银行信用卡客服热线，根据语音提示，将预借现金打入个人借记卡账户。"
        }
      ]
    };
  },
  computed: {
    cardStyle() {
      return function(type) {
        if (type == "big") {
          return "font-size: 18px;color: #222222;letter-spacing: 0;padding-bottom:10px";
        }
        if (type == "middle") {
          return "ffont-size: 14px;color: #222222;letter-spacing: 0;line-height: 20px;";
        }
        if (type == "small") {
          return "font-size: 12px;color: #666666;letter-spacing: 0;line-height:20px;padding-bottom:20px";
        }
      };
    }
  },
  methods: {
    toggleRobot() {
      this.robotShow = !this.robotShow;
    },
    changeRobotState() {
      this.robotShow = false;
    },
    annotation(e) {
      console.log(e);
      //匹配节点的本地名称
      if (e.target.localName.toLowerCase() === "i") {
        // console.log(e.target.innerHTML);
        this.annotationInfo = e.target.innerHTML;
      }
    },
    checkStyle(value, oldWord) {
      const keyWord = [
        "持卡人",
        "溢缴款取现",
        "信用额度",
        "预借现金",
        "借记卡"
      ];
      let lightWord = (value, oldWord) => {
        for (var key of keyWord) {
          let regExp = new RegExp(key, "g"); //正则表达式方法，完全匹配对应的关键字，且全局声明
          value = value.replace(
            regExp,
            '<i style="color:#289BFF; font-style:normal; cursor: pointer;">' +
              key +
              "</i>"
          );
        }
        return value;
      };
      return lightWord(value, keyWord);
    }
  }
};
</script>
<style lang="scss">
.overall {
  width: 100%;
  height: 100%;
  position: relative;
  background: #f6f6f6;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  left: 0;
  margin: 0 auto;
  border: 1px solid #d0d0d0;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
}
#searchBox-header-right {
  width: 350px;
  height: 100px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  p {
    width: 273px;
    background: #4fadff;
    height: 34px;
    font-size: 12px;
    color: #fff;
    display: inline-block;
    line-height: 34px;
    text-align: center;
    border-radius: 19.5px 19.5px 0px 19.5px;
    position: absolute;
    margin: 0;
    top: 30px;
    right: 110px;
  }
  #searchBox-header-right-photo {
    width: 61px;
    height: 61px;
    display: inline-block;
    border-radius: 30.5px;
    position: absolute;
    top: 16px;
    right: 40px;
    background: url("/static/img/pandaRobot.png") no-repeat center center;
  }
  & > .right-dot:nth-child(3) {
    background: #289bff;
    position: absolute;
    top: 21px;
    right: 26px;
    margin: 0;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
  }
  & > .right-dot:nth-child(4) {
    background: #289bff;
    position: absolute;
    top: 11px;
    right: 17px;
    margin: 0;
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 4.5px;
  }
}
.content {
  width: 90%;
  height: calc(100% - 125px);
  left: 8%;
  top: 100px;
  margin: 0 auto;
  position: absolute;
  .content-title {
    line-height: 41px;
    font-size: 12px;
    color: #999999;
    display: inline-block;
    vertical-align: middle;
  }
  .content-card {
    width: 60%;
    min-height: 670px;
    background: #ffffff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    padding: 26px 30px;
    overflow-y: scroll;
    .card-title {
      font-size: 25px;
    }
    .card-date {
      font-size: 12px;
      color: #999999;
      padding-top: 5px;
      padding-bottom: 15px;
    }
  }
}
</style>
