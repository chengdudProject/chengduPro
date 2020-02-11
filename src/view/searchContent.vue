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
        <div id="searchBox-content">

        </div>
        <robot-chat :robotShow="robotShow" @changeRobotState="changeRobotState"></robot-chat>
    </div>
</template>
<script>
import robotChat from '@/components/robotChat';
export default {
    components:{
        robotChat
    },
    data(){
        return{
            searchVal:'',
            robotShow:false,
            tabList:["全部","智能问答","思维导图","内容精选","金融标签","其他重要分类项"],
            tabIndex:0
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
    background: url("/static/img/searchBg.png") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
    #searchBox-header{
        width: 100%;
        height: 126px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
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
        height: 900px;
        background: #000;
        position: absolute;
        top: 126px;
        left: 0;
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