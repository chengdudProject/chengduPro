<template>
    <div id="searchBox">
        <div id="searchBox-header">
            <ul id="searchBox-header-left">
                <li></li>
                <li>智能问答</li>
                <li>思维导图</li>
                <li>内容精选</li>
                <li>金融标签</li>
            </ul>
            <div id="searchBox-header-right" @click="toggleRobot">
                <p>Hi,我是Panda博士，有什么问题可以问我哟</p>
                <div id="searchBox-header-right-photo"></div>
                <div class="right-dot"></div>
                <div class="right-dot"></div>
            </div>
        </div>
        <div id="searchBox-content">
            <div id="searchBox-content-logo">计算BOX</div>
            <div id="searchBox-content-input">
                <el-input v-model="searchVal" placeholder="请输入关键词"></el-input>
                <el-button type="primary" icon="el-icon-compute">智能计算</el-button>
                <span id="icon-audio"></span>
                <span id="icon-photo"></span>
            </div>
        </div>
        <div id="robot-mask" v-show="robotShow"></div>
        <div id="robot-box" v-show="robotShow" :style="`width:${robotWidth};height:${robotHeight}`">
            <p id="robot-box-header">
                <i class="robot-question-icon"></i>
                <span class="robot-question-title">智能问答</span>
                <span class="robot-question-des">请描述您的问题，机器人会在线为您解答</span>
                <i class="robot-close-icon" @click="toggleRobot" title="关闭"></i>
                <i class="robot-full-icon" @click="fullScreen" title="全屏"></i>
            </p>
            <div id="robot-box-dialog">
                <ul id="robot-box-dialog-content">
                    <!-- <li class="content-item-left">
                        <div class="content-item-logo"></div>
                        <div class="content-item-value triangle">
                            <p class="content-item-value-title">Hi，刘亚兰女士，下午好！欢迎来到智能问答服务！</p>
                            <p class="content-item-value-act"><b>猜您想问的问题：</b><span>换一批</span></p>
                            <ul class="content-item-value-list">
                                <li>我想要出差，怎么申请？</li>
                                <li>我的工资卡变更如何申请？</li>
                                <li>我想要报销，有哪些流程？</li>
                                <li>出国休假有哪些手续？</li>
                            </ul>
                        </div>
                    </li>
                    <li class="content-item-right">
                        <div class="content-item-logo"></div>
                        <div class="content-item-value triangle">我想要出差，怎么申请？</div>
                    </li> -->
                    <li v-for="(item,index) in dialogList" :key="index" :class="item.isRobot?'content-item-left':'content-item-right'">
                        <div class="content-item-logo"></div>
                        <div class="content-item-value triangle" v-if="item.isRobot">
                            <p class="content-item-value-title">{{item.title}}</p>
                            <p class="content-item-value-act"><b>猜您想问的问题：</b><span>换一批</span></p>
                            <ul class="content-item-value-list">
                                <li v-for="(temp,TempIndex) in item.actList" :key="TempIndex">
                                    {{temp}}
                                </li>
                            </ul>
                        </div>
                        <div class="content-item-value triangle" v-if="!item.isRobot">{{item.title}}</div>
                    </li>
                </ul>
            </div>
            <div id="robot-box-edit">
                <ul class="edit-actList">
                    <li>热门问题：</li>
                    <li v-for="(item,index) in editList" :key="index" @click="clickEdit(item.showVal)">{{item.name}}</li>
                </ul>
                <div class="edit-input">
                    <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入..."
                        v-model="robotEditVal">
                    </el-input>
                    <el-button type="primary" icon="icon-send">发送</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            searchVal:"",
            robotShow:true,
            robotWidth:"1000px",
            robotHeight:"630px",
            isFull:false,
            robotEditVal:"",
            dialogList:[
                {
                    isRobot:true,//是否是机器人，如果false在左边，如果true在右边
                    title:"Hi，刘亚兰女士，下午好！欢迎来到智能问答服务！",
                    actList:["我想要出差，怎么申请？","我的工资卡变更如何申请？","我想要报销，有哪些流程？","出国休假有哪些手续？"]
                },
                {
                    isRobot:false,
                    title:"我想要出差，怎么申请？"
                }
            ],
            editList:[
                {name:"报销流程",showVal:"我想要报销，有哪些流程？"},
                {name:"报销流程",showVal:"我想要报销，有哪些流程？"},
                {name:"出国审批流程",showVal:"出国休假有哪些手续？"},
                {name:"发票粘贴顺序",showVal:"请问发票粘贴的顺序是怎样的？"},
                {name:"报销流程",showVal:"我想要报销，有哪些流程？"},
                {name:"报销流程",showVal:"我想要报销，有哪些流程？"},
                {name:"考勤查询",showVal:"请问怎么查看考勤？"}]
        }
    },
    methods:{
        fullScreen(){
            if(this.isFull){
                this.robotWidth="1000px";
                this.robotHeight="630px";
            }else{
                this.robotWidth="100%";
                this.robotHeight="100%";
            }
            this.isFull=!this.isFull;
        },
        toggleRobot(){
            if(!this.robotShow){
                this.robotWidth="1000px";
                this.robotHeight="630px";
                this.isFull=false;
            }
            this.robotShow=!this.robotShow;
        },
        clickEdit(val){
            this.dialogList.push({
                isRobot:false,
                title:val
            })
        }
    },
    watch: {
        dialogList() {//监听对话框内容，如果有新内容加入，自动滑到最底部
            this.$nextTick(() => {
                var container = this.$el.querySelector("#robot-box-dialog-content");
                container.scrollTop = container.scrollHeight;
            })
        }
    }
}
</script>
<style lang="scss">
body{
  margin-top: -16px;
}
#searchBox{
    background: url("/static/img/searchBg.png") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    #searchBox-header{
        width: 100%;
        height: 80px;
        line-height: 80px;
        position: relative;
        #searchBox-header-left{
            height: 80px;
            padding: 0;
            li{
                list-style: none;
                color: #fff;
                font-family: "PingFangSC-Regular";
                float: left;
                margin: 0 15px;
                font-size: 14px;
            }
            &>li:nth-child(1){
                width: 50px;
                height: 80px;
                background: url("/static/img/searchGroup.png") no-repeat center center;
            }
        }
        #searchBox-header-right{
            width: 350px;
            height: 120px;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            p{
                width: 273px;
                background: #4FADFF;
                height: 34px;
                font-size: 12px;
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
                top: 30px;
                right: 40px;
                background: url("/static/img/pandaRobot.png") no-repeat center center;
            }
            &>.right-dot:nth-child(3){
                background: #289BFF;
                position: absolute;
                top: 31px;
                right: 26px;
                display: inline-block;
                width: 15px;
                height: 15px;
                border-radius: 7.5px;
            }
            &>.right-dot:nth-child(4){
                background: #289BFF;
                position: absolute;
                top: 22px;
                right: 17px;
                display: inline-block;
                width: 9px;
                height: 9px;
                border-radius: 4.5px;
            }
        }
    }
    #searchBox-content{
        position: relative;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 640px;
        height: 250px;
        #searchBox-content-logo{
            width: 100%;
            height: 33px;
            text-align: center;
            font-size: 24px;
            font-family: "PingFangSC-Regular";
            color: #fff;
            padding-top: 100px;
            background: url("/static/img/countBox.png") no-repeat center 0;
            margin-bottom: 30px;
        }
        #searchBox-content-input{
            width: 640px;
            height: 56px;
            border-radius: 5px;
            overflow: hidden;
            .el-input{
                float: left;
                width: 492px;
                height: 55px;
                font-size: 16px;
                border-radius: 0;
                input{
                    height: 100%;
                    width: 492px;
                    padding-right: 100px;
                    border-radius: 0;
                }
            }
            .el-button{
                float: left;
                padding: 0 25px;
                height: 55px;
                line-height: 55px;
                font-size: 16px;
                border-radius: 0;
                .el-icon-compute{
                    width: 27px;
                    height: 27px;
                    background:url("/static/img/compute.png") no-repeat center center;
                    float: left;
                    margin-top: 15px;
                }
                span{
                    float: left;
                }
            }
        }
        #icon-audio{
            display: inline-block;
            width: 36px;
            height: 36px;
            position:absolute;
            top: 170px;
            left: 400px;
            z-index: 999;
            background: url("/static/img/icon-audio.png") no-repeat center center;
            cursor: pointer;
        }
        #icon-photo{
            display: inline-block;
            width: 36px;
            height: 36px;
            position:absolute;
            top: 170px;
            left: 445px;
            z-index: 999;
            background: url("/static/img/icon-photo.png") no-repeat center center;
            cursor: pointer;
        }
    }
    #robot-mask{
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.7;
        position:absolute;
        top: 0;
        left: 0;
        z-index: 999;
    }
    #robot-box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        opacity: 1;
        z-index: 9999;
        border-radius: 4px;
        overflow: hidden;
        #robot-box-header{
            height: 50px;
            width: 100%;
            line-height: 50px;
            background: #ECEDEF;
            margin: 0;
            .robot-question-icon{
                width: 20px;
                height: 20px;
                float: left;
                margin: 15px;
                background: url("/static/img/icon-question.png") no-repeat center center;
            }
            .robot-question-title{
                font-weight: 600;
                font-family: PingFangSC-Semibold;
                font-size: 16px;
                color: #222222;
                float: left;
                margin-right: 15px;
            }
            .robot-question-des{
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #999999;
                float: left;
            }
            .robot-full-icon{
                width: 20px;
                height: 20px;
                float: right;
                margin: 15px;
                background: url("/static/img/icon-full.png") no-repeat center center;
                cursor: pointer;
            }
            .robot-close-icon{
                width: 20px;
                height: 20px;
                float: right;
                margin: 15px;
                background: url("/static/img/icon-close.png") no-repeat center center;
                cursor: pointer;
            }
        }
        #robot-box-dialog{
            width: 100%;
            height: calc(75% - 35px);
            background: url("/static/img/chatBg.png") no-repeat center center;
            background-size: cover;
            #robot-box-dialog-content{
                margin: 10px;
                height: calc(100% - 20px);
                width: calc(100% - 20px);
                padding: 0;
                overflow-y: auto;
                list-style: none;
                .content-item-left{
                    width: 100%;
                    min-height:220px; 
                    .content-item-logo{
                        width: 70px;
                        height: 70px;
                        margin: 10px;
                        float: left;
                        background: url("/static/img/pandaRobot.png") no-repeat center center;
                    }
                    .content-item-value{
                        float: left;
                        width: 600px;
                        height: 156px;
                        border: 1px solid #C5E2FF;
                        margin: 10px 0 10px 40px;
                        position: relative;
                        box-shadow:0px 0px 5px #C5E2FF;
                        padding: 20px;
                        background: #fff;
                        .content-item-value-title{
                            font-family: PingFangSC-Regular;
                            font-size: 13px;
                            color: #616C86;
                            margin: 0;
                            height: 22px;
                            line-height: 22px;
                        }
                        .content-item-value-act{
                            width: 100%;
                            height: 22px;
                            margin: 10px;
                            b{
                                font-size: 14px;
                                color: #222222;
                                float: left;
                            }
                            span{
                                font-size: 12px;
                                color: #666666;
                                float: right;
                                width: 50px;
                                text-align: right;
                                cursor: pointer;
                                background: url("/static/img/exchange.png") no-repeat left center;
                            }
                        }
                        .content-item-value-list{
                            width: 100%;
                            height: 50px;
                            list-style: disc;
                            li{
                                font-size: 13px;
                                color: #3778D0;
                                float: left;
                                width: 50%;
                                height: 20px;
                                margin: 10px 0;
                                cursor: pointer;
                            }
                            li:hover{
                                text-decoration: underline;
                            }
                        }
                    }
                    .triangle:before{
                        content: '';
                        border-right: 10px solid #C5E2FF;
                        border-top: 10px solid transparent;
                        border-bottom: 10px solid transparent;
                        border-left: 0;
                        position: absolute;
                        left: 0;
                        top: 20%;
                        margin-left: -10px;
                        margin-top: -10px;
                    }
                    .triangle:after{
                        content: '';
                        border-right: 10px solid #fff;
                        border-top: 10px solid transparent;
                        border-bottom: 10px solid transparent;
                        border-left: 0;
                        position: absolute;
                        left: 0;
                        top: 20%;
                        margin-left: -9px;
                        margin-top: -10px;
                    }
                }
                .content-item-right{
                    width: 100%;
                    min-height:100px; 
                    .content-item-logo{
                        width: 70px;
                        height: 70px;
                        margin: 10px;
                        float: right;
                        background: url("/static/img/robot.png") no-repeat center center;
                    }
                    .content-item-value{
                        float: right;
                        max-width: 600px;
                        min-height:25px; 
                        margin: 10px 0 10px 40px;
                        position: relative;
                        box-shadow:0px 0px 5px #C5E2FF;
                        padding: 10px 20px;
                        background: #289BFF;
                        border: 1px solid #289BFF;
                        border-radius: 6px;
                        color: #fff;
                    }
                    .triangle:before{
                        content: '';
                        border-left: 10px solid #289BFF;
                        border-bottom: 10px solid transparent;
                        border-top: 10px solid transparent;
                        border-right: 0;
                        position: absolute;
                        right: 0;
                        top: 20px;
                        margin-right: -10px;
                        margin-top: -10px;
                    }
                    .triangle:after{
                        content: '';
                        border-left: 10px solid #289BFF;
                        border-top: 10px solid transparent;
                        border-bottom: 10px solid transparent;
                        border-right: 0;
                        position: absolute;
                        right: 0;
                        top: 20px;
                        margin-right: -9px;
                        margin-top: -10px;
                    }
                }
            }
            #robot-box-dialog-content::-webkit-scrollbar{
                width:10px;
                height:10px;
                /**/
            }
            #robot-box-dialog-content::-webkit-scrollbar-track{
                background: rgb(239, 239, 239);
                border-radius:2px;
            }
            #robot-box-dialog-content::-webkit-scrollbar-thumb{
                background: #DAEBF9;
                border-radius:10px;
            }
            #robot-box-dialog-content::-webkit-scrollbar-thumb:hover{
                background: #4FADFF;
            }
            #robot-box-dialog-content::-webkit-scrollbar-corner{
                background: #179a16;
            }
        }
        #robot-box-edit{
            width: 100%;
            height: calc(25% - 15px);
            border: 1px solid #000;
            .edit-actList{
                list-style: none;
                height: 40px;
                margin: 0;
                padding: 0;
                li{
                    float: left;
                    background: #EAF4FF;
                    border: 1px solid #639FFF;
                    border-radius: 16px;
                    color: #6788D4;
                    padding: 6px 18px;
                    margin: 3px;
                    cursor: pointer;
                    font-size: 13px;
                }
                &>li:nth-child(1){
                    font-size: 14px;
                    color: #666666;
                    border: none;
                    background: #fff;
                    margin-right: 0;
                    padding-right: 0;
                }
            }
            .edit-input{
                height: calc(100% - 60px);
                width: 100%;
                .el-textarea{
                    width: calc(100% - 140px);
                    height: 100%;
                    margin: 0 10px;
                    textarea{
                        height: 100%;
                        color: #64AAFF;
                        background: #F2F3F6 ;
                    }
                }
                .el-button{
                    width: 100px;
                    height: 50px;
                    padding: 0;
                    margin: 0;
                    .icon-send{
                        width: 27px;
                        height: 27px;
                        background: url(/static/img/icon-send.png) no-repeat center center;
                        float: left;
                        margin: 11px;
                    }
                    span{
                        float: left;
                        height: 50px;
                        line-height: 50px;
                    }
                }
            }
        }
    }
}
</style>