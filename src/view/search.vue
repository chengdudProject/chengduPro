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
                <el-button type="primary" icon="el-icon-compute" @click.native="searchClick">智能计算</el-button>
                <span id="icon-audio"></span>
                <span id="icon-photo"></span>
            </div>
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
            searchVal:"",
            robotShow:false
        }
    },
    methods:{
        toggleRobot(){
            this.robotShow=!this.robotShow;
        },
        changeRobotState(){
            this.robotShow=false;
        },
        searchClick(){
            console.log(111)
            this.$router.push({
                path:`/searchContent`
            })
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
    #searchBox-header{
        width: 100%;
        height: 80px;
        line-height: 80px;
        position: relative;
        #searchBox-header-left{
            height: 80px;
            padding: 0;
            margin: 0;
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