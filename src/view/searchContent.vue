<template>
    <div id="searchBox">
        <div id="searchBox-header">
            <div id="searchBox-header-left">
                <div id="searchBox-header-left-logo">
                    计算BOX
                </div>
                <div id="searchBox-header-left-input">
                    <el-input v-model="searchVal" placeholder="请输入关键词"></el-input>
                    <el-button type="primary" icon="el-icon-compute">智能计算</el-button>
                    <span id="icon-audio"></span>
                    <span id="icon-photo"></span>
                </div>
                <ul id="searchBox-header-left-tab">
                    <li v-for="(item,index) in tabList" :key="index" :class="index==tabIndex?'active':''" @click="tabClick(index)">{{item}}</li>
                </ul>
            </div>
            <div id="searchBox-header-right" @click="toggleRobot">
                <p>Hi,我是Panda博士，有什么问题可以问我哟</p>
                <div id="searchBox-header-right-photo"></div>
                <div class="right-dot"></div>
                <div class="right-dot"></div>
            </div>
        </div>
        <el-row :gutter="100" id="searchBox-content">
            <el-col :span="14" id="searchBox-content-left">
                <div class="grid-content">
                    <p>计算结果</p>
                    <div class="grid-content-detail">
                        <count-item countTitle="智能计算" countTitleDes="仅显示该问题的智能计算的内容" countTitleColor="#4FADFF"></count-item>
                        <count-item countTitle="思维导图" countTitleDes="仅显示部分热门信息，更多请点击或直接搜索问题" countTitleColor="#FF9831"></count-item>
                        <count-item countTitle="相关标签" countTitleDes="仅显示部分热门信息，更多请点击或直接搜索问题" countTitleColor="#FF5079"></count-item>
                        <count-item countTitle="内容精选" countTitleDes="仅显示部分热门信息，更多请点击或直接搜索问题" countTitleColor="#2DF2FF"></count-item>
                    </div>
                    <div class="grid-content-link">
                        <ul>
                            <li>
                                <p class="link-title">信用卡和理财服务，就在建行私人信贷平台</p>
                                <p class="link-url">https://www.rong360.com/</p>
                                <p class="link-text">建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品</p>
                                <ul class="link-detail">
                                    <li class="link-detail-item">住房贷款</li>
                                    <li class="link-detail-item">信贷经理登录</li>
                                    <li class="link-detail-item">信用卡</li>
                                    <li class="link-detail-item">咨询</li>
                                    <li class="link-detail-item">贷款咨询</li>
                                    <li class="link-detail-item">金融百科</li>
                                </ul>
                            </li>
                            <li>
                                <p class="link-title">信用卡和理财服务，就在建行私人信贷平台</p>
                                <p class="link-url">https://www.rong360.com/</p>
                                <p class="link-text">建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品</p>
                            </li>
                            <li>
                                <p class="link-title">信用卡和理财服务，就在建行私人信贷平台</p>
                                <p class="link-url">https://www.rong360.com/</p>
                                <p class="link-text">建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品</p>
                            </li>
                            <li>
                                <p class="link-title">信用卡和理财服务，就在建行私人信贷平台</p>
                                <p class="link-url">https://www.rong360.com/</p>
                                <p class="link-text">建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品</p>
                            </li>
                            <li>
                                <p class="link-title">信用卡和理财服务，就在建行私人信贷平台</p>
                                <p class="link-url">https://www.rong360.com/</p>
                                <p class="link-text">建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品</p>
                            </li>
                            <li>
                                <p class="link-title">信用卡和理财服务，就在建行私人信贷平台</p>
                                <p class="link-url">https://www.rong360.com/</p>
                                <p class="link-text">建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品</p>
                            </li>
                            <li>
                                <p class="link-title">信用卡和理财服务，就在建行私人信贷平台</p>
                                <p class="link-url">https://www.rong360.com/</p>
                                <p class="link-text">建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="10" id="searchBox-content-right">
                <div class="grid-content">
                    <p>主要学习来源</p>
                    <ul class="searchBox-content-right-list">
                        <li v-for="item in rightList" :key="item">
                            <p>{{item.title}}</p>
                            <p>{{item.url}}</p>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
        <robot-chat :robotShow="robotShow" @changeRobotState="changeRobotState"></robot-chat>
    </div>
</template>
<script>
import robotChat from '@/components/robotChat';
import countItem from '@/components/countItem';
export default {
    components:{
        robotChat,countItem
    },
    data(){
        return{
            searchVal:'',
            robotShow:false,
            tabList:["全部","智能问答","思维导图","内容精选","金融标签","其他重要分类项"],
            tabIndex:0,
            rightList:[
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                }
            ]
        }
    },
    methods:{
        toggleRobot(){
            this.robotShow=!this.robotShow;
        },
        changeRobotState(){
            this.robotShow=false;
        },
        tabClick(index){
            this.tabIndex=index;
        }
    }
}
</script>
<style lang="scss" scoped>
#searchBox{
    //background: url("/static/img/searchBg.png") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    #searchBox-header{
        width: 100%;
        height: 126px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        background: url("/static/img/smallTop.png") no-repeat center center;
        background-size: cover;
        #searchBox-header-left{
            height: 126px;
            margin: 0;
            padding: 0;
            #searchBox-header-left-logo{
                width: 220px;
                height: 126px;
                float: left;
                line-height: 94px;
                font-size: 24px;
                color: #FFFFFF;
                text-indent: 100px;
                font-family: "PingFangSC-Regular";
                background: url("/static/img/smallCountBox.png") no-repeat 36px 20px;
            }
            #searchBox-header-left-input{
                width: 640px;
                height: 56px;
                border-radius: 5px;
                overflow: hidden;
                position: relative;
                top: 20px;
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
                #icon-audio{
                    display: inline-block;
                    width: 36px;
                    height: 36px;
                    position:absolute;
                    top: 10px;
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
                    top: 10px;
                    left: 445px;
                    z-index: 999;
                    background: url("/static/img/icon-photo.png") no-repeat center center;
                    cursor: pointer;
                }
            }
            #searchBox-header-left-tab{
                list-style: none;
                width: 650px;
                height: 50px;
                color: #ccc;
                position: absolute;
                top: 75px;
                left: 220px;
                margin: 0;
                padding: 0;
                line-height: 50px;
                font-size: 14px;
                li{
                    float: left;
                    height: 46px;
                    padding: 0 9px;
                    margin: 0 3px;
                    cursor: pointer;
                }
                li.active{
                    border-bottom: 4px solid #289BFF;
                }
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
        width: 100%;
        background: #000;
        position: absolute;
        top: 125px;
        left: 0;
        height: calc(100% - 125px);
        overflow: auto;
        margin: 0 !important;
        
        
        #searchBox-content-left{
            .grid-content-detail{
                min-height: 300px;
            }
            .grid-content-link{
                ul{
                    list-style: none;
                    padding-right: 20px;
                    background: #000;
                    padding: 0 20px;
                    li{
                        margin: 10px 0;
                        .link-title{
                            color: #3C6289;
                            font-size: 16px;
                            height: 30px;
                            line-height: 30px;
                            padding: 0;
                            margin: 0;
                            cursor: pointer;
                        }
                        .link-title:hover{
                            text-decoration: underline;
                            color: #289BFF;
                        }
                        .link-url{
                            color: #7485AE;
                            font-size: 12px;
                            height: 17px;
                            line-height: 17px;
                            padding: 0;
                            margin: 0;
                        }
                        .link-text{
                            color: #FFF;
                            font-size: 12px;
                            height: 34px;
                            padding: 0;
                            margin: 0;
                            text-overflow: -o-ellipsis-lastline;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                        .link-detail{
                            list-style: none;
                            padding: 0;
                            margin: 0;
                            overflow: hidden;
                            .link-detail-item{
                                width: 29.3%;
                                height: 32px;
                                line-height: 32px;
                                color: #3C6289;
                                font-size: 14px;
                                background: #1A1E2A;
                                text-align: center;
                                float: left;
                                margin: 10px 2%;
                                border-radius: 3px;
                            }
                        }
                    }
                }
            }
        }
        #searchBox-content-right{
            ul{
                margin: 0;
                padding: 0 !important; 
                li{
                    background: #202433;
                    height: 60px;
                    &>p:nth-child(1){
                        color: #fff;
                        opacity: 0.8;
                        font-size: 14px;
                        height: 30px;
                        line-height: 35px;
                        margin: 0;
                        text-indent: 20px;
                    }
                    &>p:nth-child(2){
                        color: #7485AE;
                        font-size: 12px;
                        height: 20px;
                        line-height: 20px;
                        margin: 0;
                        text-indent: 20px;
                    }
                    margin-bottom: 10px;
                }
            }
            
        }
        &:last-child {
            margin-bottom: 0;
        }
        .el-col {
            border-radius: 4px;
        }
        
        .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
        }
        .grid-content {
            &>p{
                height: 34px;
                line-height: 40px;
                color: #999;
                font-size: 12px;
            }
            &>div{
                background: #16171F;
            }
        }
    }
    #searchBox-content::-webkit-scrollbar{
        width:10px;
        height:10px;
        /**/
    }
    #searchBox-content::-webkit-scrollbar-track{
        background: #000;
        border-radius:2px;
    }
    #searchBox-content::-webkit-scrollbar-thumb{
        background: #DAEBF9;
        border-radius:10px;
    }
    #searchBox-content::-webkit-scrollbar-thumb:hover{
        background: #4FADFF;
    }
    #searchBox-content::-webkit-scrollbar-corner{
        background: #179a16;
    }
}
</style>
<style lang="scss">
#searchBox-content-input,#searchBox-header-left-input{
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
</style>