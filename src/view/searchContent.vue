<template>
    <div id="searchBox">
        <div id="searchBox-header">
            <div id="searchBox-header-left">
                <div id="searchBox-header-left-logo">
                    计算BOX
                </div>
                <div id="searchBox-header-left-input">
                    <el-input v-model="searchVal" placeholder="请输入关键词" @keyup.enter.native="searchContent"></el-input>
                    <el-button type="primary" icon="el-icon-compute" @click="searchContent">智能计算</el-button>
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
                    <div class="grid-content-detail" v-show="isCard">
                        <count-item countTitle="智能计算" countTitleDes="仅显示该问题的智能计算的内容" countTitleColor="#4FADFF">
                            <div id="intelligent-computing">
                                <div class="computing-logo">
                                    <slide-show></slide-show>
                                </div>
                                <div class="computing-content">
                                    <p class="computing-content-title">建行银行<span>信用卡</span></p>
                                    <p class="computing-content-text">建行信用卡是中国建设银行发行的信用卡。中国建设银行已经发行的信用卡都以“龙卡”冠名，种类有：龙卡名校卡，龙卡商务卡，龙卡汽车卡等。免年费政策：普卡金卡刷卡三次或18次免次年年费（不包括商务卡，汽车卡等特殊卡种）取现手续费：境内：交易金额5%o，最低2元，最高50元</p>
                                    <p class="computing-content-number">建行发卡量：1.28亿张；累计客户：9460万户</p>
                                    <p class="computing-content-tip">申请条件：1.申请人的年龄在18周岁以上，是具有民事行为能力的公民；2.有合法的职业和稳定的收入，是具有民事行为能力的公民；3.没有不良信用记录</p>
                                </div>
                                <el-button id="computing-more"></el-button>
                            </div>
                        </count-item>
                        <count-item countTitle="思维导图" countTitleDes="仅显示部分热门信息，更多请点击或直接搜索问题" countTitleColor="#FF9831" height="150">
                            <div id="mind-map">
                                <ul>
                                    <li>
                                        <img src="/static/img/searchBg.png" @click="togo('mindMapping')">
                                        <p>建行信用卡</p>
                                    </li>
                                    <li>
                                        <img src="/static/img/searchBg.png" @click="togo('mindMapping')">
                                        <p>建行信用卡</p>
                                    </li>
                                    <li>
                                        <img src="/static/img/searchBg.png" @click="togo('mindMapping')">
                                        <p>建行信用卡</p>
                                    </li>
                                    <li>
                                        <img src="/static/img/searchBg.png" @click="togo('mindMapping')">
                                        <p>建行信用卡</p>
                                    </li>
                                    <li>
                                        <img src="/static/img/searchBg.png" @click="togo('mindMapping')">
                                        <p>建行信用卡</p>
                                    </li>
                                </ul>
                                <el-button id="mind-more"></el-button>
                            </div>
                        </count-item>
                        <count-item countTitle="相关标签" countTitleDes="仅显示部分热门信息，更多请点击或直接搜索问题" countTitleColor="#FF5079">
                            <div id="relevant-tags">
                                <ul>
                                    <li class="prev" @click="tagsPrev"></li>
                                    <li v-for="(item,index) in tagList" :key="index" @click="tagsClick(index)" class="tags-item" :class="tagIndex==index?'active':''">{{item}}</li>
                                    <li class="next" @click="tagsNext"></li>
                                </ul>
                                <div class="relevant-tags-content">
                                    <div class="tags-logo">
                                        <slide-show width="127" height="80"></slide-show>
                                    </div>
                                    <div class="tags-detail">
                                        <p class="tags-detail-title">LINEFRIENDS粉丝信用卡</p>
                                        <p class="tags-detail-text">LINEFRIENDS粉丝信用卡是中国建设银行面向年轻爱玩的LINEFRIENDS粉丝客户推出的首张粉丝挚爱白金信用卡。产品采用萌宠形象，糖果配色，和卡号后置等功能</p>
                                        <p class="tags-detail-act">立刻申请</p>
                                    </div>
                                </div>
                                <el-button id="tags-more"></el-button>
                            </div>
                        </count-item>
                        <count-item countTitle="内容精选" countTitleDes="仅显示部分热门信息，更多请点击或直接搜索问题" countTitleColor="#2DF2FF">
                            <div id="content-select">
                                <ul>
                                    <li v-for="(item,index) in contentSelectList" :key="index" @click="selectSearch(index)">
                                        <span>{{item.title}}</span>
                                        <b :class="item.buttonColor=='blue'?'button-blue':'button-green'">{{item.buttonName}}</b>
                                        <i>
                                            <img src="/static/img/next.png">
                                        </i>
                                    </li>
                                </ul>
                            </div>
                        </count-item>
                    </div>
                    <div class="grid-content-link" v-show="isCard">
                        <ul>
                            <li v-for="(item,linksIndex) in linkList" :key="linksIndex">
                                <p class="link-title" v-html="item.title"></p>
                                <p class="link-url">{{item.url}}</p>
                                <p class="link-text">{{item.text}}</p>
                                <ul class="link-detail">
                                    <li class="link-detail-item" v-for="(temp,index) in item.detailList" :key="index">{{temp}}</li>
                                </ul>
                            </li>
                        </ul>
                        <p class="showMore" @click="showMore">展示更多</p>
                    </div>
                    <div class="grid-content-detail" v-show="isPerson">
                        <count-item countTitle="个人简介" countTitleDes="搜索人相关简介" countTitleColor="#4FADFF" height="270">
                            <div id="profile">
                                <div class="profile-logo">
                                    <img src="/static/img/xietingfeng.jpg">
                                </div>
                                <div class="profile-content">
                                    <p class="profile-content-name">谢霆锋</p>
                                    <p class="profile-content-info">
                                        <span>职业：工程师</span>
                                        <span>代表作品：腾讯QQ</span>
                                        <span>年龄：32岁</span>
                                        <span>出生年月：1982年6月</span>
                                    </p>
                                    <p class="profile-content-des">简介：LAMP兄弟连教学总监，毕业于首都经贸大学计算机系，拥有多年软件开发经验，曾先后人大连科特软件公司高级软件工程师，香港及时集团管理部总经理，北京校区副校长，东软长春办事处高级技术教师，具有扎实的技术工地和丰富的教学经验，精通各种操作系统，嵌入式开发、C、C++、J2EE、J2ME、J2SE、LAMP开发及Oracle数据库等技术；2004年开始从事IT技术培训，具有扎实的技术功底和丰富的教学经验，国内最高的PHP技术讲师之一，具有五年软件开发工作经验、四年IT教学经验</p>
                                </div>
                            </div>
                        </count-item>
                        <count-item countTitle="内容精选" countTitleDes="个人信息精选内容" countTitleColor="#2DF2FF" height="230">
                            <ul id="person-select">
                                <li>身高：175cm</li>
                                <li>体重：75kg</li>
                                <li>兴趣爱好：摄影、画画</li>
                                <li>技能：C++、J2EE、J2ME</li>
                                <li>专利：无</li>
                                <li>获奖：无</li>
                                <li>参与项目：员工渠道/智慧银行</li>
                                <li>所属团队：网点渠道开发</li>
                                <li>其他：无</li>
                            </ul>
                        </count-item>
                        <count-item countTitle="相似人物列表" countTitleDes="其他你可能感兴趣的人" countTitleColor="#FF9831" height="700">
                            <ul id="similar-person">
                                <li>
                                    <div class="person-logo">
                                        <img src="/static/img/xietingfeng.jpg">
                                    </div>
                                    <div class="person-content">
                                        <p class="person-content-name">黄晓明</p>
                                        <p class="person-content-info">
                                            <span>职业：工程师</span>
                                            <span>代表作品：腾讯QQ</span>
                                            <span>年龄：32岁</span>
                                            <span>出生年月：1982年6月</span>
                                        </p>
                                        <p class="person-content-des">简介：LAMP兄弟连教学总监，毕业于首都经贸大学计算机系，拥有多年软件开发经验，曾先后人大连科特软件公司高级软件工程师，香港及时集团管理部总经理，北京校区副校长，东软长春办事处高级技术教师，具有扎实的技术工地和丰富的教学经验，精通各种操作系统，嵌入式开发、C、C++、J2EE、J2ME、J2SE、LAMP开发及Oracle数据库等技术；2004年开始从事IT技术培训，具有扎实的技术功底和丰富的教学经验，国内最高的PHP技术讲师之一，具有五年软件开发工作经验、四年IT教学经验</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="person-logo">
                                        <img src="/static/img/xietingfeng.jpg">
                                    </div>
                                    <div class="person-content">
                                        <p class="person-content-name">刘亦玲</p>
                                        <p class="person-content-info">
                                            <span>职业：工程师</span>
                                            <span>代表作品：腾讯QQ</span>
                                            <span>年龄：32岁</span>
                                            <span>出生年月：1982年6月</span>
                                        </p>
                                        <p class="person-content-des">简介：LAMP兄弟连教学总监，毕业于首都经贸大学计算机系，拥有多年软件开发经验，曾先后人大连科特软件公司高级软件工程师，香港及时集团管理部总经理，北京校区副校长，东软长春办事处高级技术教师，具有扎实的技术工地和丰富的教学经验，精通各种操作系统，嵌入式开发、C、C++、J2EE、J2ME、J2SE、LAMP开发及Oracle数据库等技术；2004年开始从事IT技术培训，具有扎实的技术功底和丰富的教学经验，国内最高的PHP技术讲师之一，具有五年软件开发工作经验、四年IT教学经验</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="person-logo">
                                        <img src="/static/img/xietingfeng.jpg">
                                    </div>
                                    <div class="person-content">
                                        <p class="person-content-name">欧阳华</p>
                                        <p class="person-content-info">
                                            <span>职业：工程师</span>
                                            <span>代表作品：腾讯QQ</span>
                                            <span>年龄：32岁</span>
                                            <span>出生年月：1982年6月</span>
                                        </p>
                                        <p class="person-content-des">简介：LAMP兄弟连教学总监，毕业于首都经贸大学计算机系，拥有多年软件开发经验，曾先后人大连科特软件公司高级软件工程师，香港及时集团管理部总经理，北京校区副校长，东软长春办事处高级技术教师，具有扎实的技术工地和丰富的教学经验，精通各种操作系统，嵌入式开发、C、C++、J2EE、J2ME、J2SE、LAMP开发及Oracle数据库等技术；2004年开始从事IT技术培训，具有扎实的技术功底和丰富的教学经验，国内最高的PHP技术讲师之一，具有五年软件开发工作经验、四年IT教学经验</p>
                                    </div>
                                </li>
                                <el-button id="person-more"></el-button>
                            </ul>
                        </count-item>
                    </div>
                    <div class="grid-content-detail" v-show="isChat">
                        <count-item countTitle="问答结果" countTitleDes="仅显示该问题的智能计算的内容" countTitleColor="#4FADFF">
                            <div id="chat-content">
                                今天深圳天气不错哦
                            </div>
                        </count-item>
                    </div>
                </div>
            </el-col>
            <el-col :span="2" id="searchBox-middle">
                <!-- <task-work-area
                    :id="work_id" 
                    :ini="ini_config" 
                    ref="area"
                    >
                    <task-curve-path 
                        :areaid="work_id" 
                        :paths="paths" 
                        ref="curve" 
                        >
                    </task-curve-path>
                    <template v-for="node in nodes">
                        <task-common-node 
                            :key="node.id" 
                            :node="node" 
                            v-on:on-drag-start="dragStart" 
                            v-on:on-drag-ging="dragGing" 
                            v-on:on-drag-end="dragEnd" 
                            :updateTem="updateCompleted" 
                            >
                        </task-common-node>
                    </template>
                    <task-initial-node 
                        :node="initialData" 
                        backgroundColor="#ff5722" 
                        v-on:on-add-path="addPath" 
                        v-on:on-select="selectlMethod" 
                        v-on:on-drag-start="dragStart" 
                        v-on:on-drag-ging="dragGing" 
                        v-on:on-drag-end="dragEnd" 
                        :updateTem="updateCompleted" 
                        >
                    </task-initial-node>
                </task-work-area> -->
            </el-col>
            <el-col :span="9" id="searchBox-content-right">
                <div class="grid-content">
                    <p v-show="isCard">主要学习来源</p>
                    <ul class="searchBox-content-right-list" v-show="isCard">
                        <li v-for="(item,index) in rightList" :key="index" :class="item.active?'active':''">
                            <p>{{item.title}}</p>
                            <p>{{item.url}}</p>
                        </li>
                    </ul>
                    <div id="business-style" v-show="isPerson">
                        <ul class="business-style-tab">
                            <li :class="businessTabIndex==0?'active':''" @click="businessTabClick(0)">热门项目</li>
                            <li :class="businessTabIndex==1?'active':''" @click="businessTabClick(1)">热搜人物</li>
                            <li :class="businessTabIndex==2?'active':''" @click="businessTabClick(2)">活跃小组</li>
                            <li :class="businessTabIndex==3?'active':''" @click="businessTabClick(3)">最近上线</li>
                            <li :class="businessTabIndex==4?'active':''" @click="businessTabClick(4)">重要通知</li>
                        </ul>
                        <div class="business-style-list">
                            <ul>
                                <li v-for="(item,index) in businessStyleList" :key="index" :class="`background-${item.background}`"><div class="item-value">{{item.value}}</div><div class="border-base1"></div><div class="border-base2"></div></li>
                            </ul>
                        </div>
                        
                        <el-button id="business-more"></el-button>
                    </div>
                    <div id="relation-network" v-show="isPerson||isCard">
                        <p>{{relationTitle}}</p>
                        <div class="relation-network-content">
                            <echarts-relation @changeSelectName="changeSelectName"  width="90%" height="calc(100% - 100px)" :chartData="chartData" :chartLink="chartLink"></echarts-relation>
                        </div>
                        <el-button type="primary" class="relation-network-btn" @click="makeComparison">比一比</el-button>
                    </div>
                    <div id="six-space" v-show="isPerson">
                        <p>六度空间</p>
                        <div class="six-space-content">
                            <echarts-six-space :list="sixSpaceList"  width="90%" height="calc(100% - 100px)"></echarts-six-space>
                        </div>
                        <el-button type="primary" class="six-space-btn" @click="showSixSpace">结果</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <robot-chat :robotShow="robotShow" @changeRobotState="changeRobotState"></robot-chat>
    </div>
</template>
<script>
import robotChat from '@/components/robotChat';
import countItem from '@/components/countItem';
import slideShow from '@/components/slideShow';
import echartsRelation from '@/components/echartsRelation';
import echartsSixSpace from '@/components/echartsSixSpace';
import xieTingFeng from "../../static/img/xietingfeng.png";
import zhuLiQian from "../../static/img/zhuliqian.png";
export default {
    components:{
        robotChat,countItem,slideShow,echartsRelation,echartsSixSpace
    },
    mounted() {
        this.searchVal=this.$route.params.searchVal;
        this.searchContent();
    },
    data(){
        return{
            searchVal:'谢霆锋',
            robotShow:false,
            tabList:["全部","智能问答","思维导图","内容精选","金融标签","其他重要分类项"],
            tabIndex:0,
            linkIndex:1,
            modelnodes: [{
                id:1,
                name: 'node1',
                children: [{
                    id:2,
                    name: 'node2',
                    children: []
                }, {
                    id: 3,
                    name: 'node3',
                    children: []
                }]
            }],
            initialData: {
                id: 'node4',
                name: '节点4',
                positionX:30,
                positionY: 60,
                inPorts: [],
                outPorts: [{
                    id:'node4_1'
                }]
            },
            nodes: [{
                id: 'node1',
                name: '节点1',
                positionX: 110,
                positionY: 50,
                state: 'success',
                inPorts: [],
                outPorts: [{
                    id: 'node1_1'
                }]
            }, {
                id: 'node2',
                name: '节点2',
                positionX: 20,
                positionY: 300,
                state: 'success',
                outPorts: [{
                    id: 'node2_4'
                }]
            }],
            paths: [{
                dotted: true,
                ptype: 'Q',
                startPort: 'node4_1',
                endPort: 'node1_1'
            }, {
                dotted: false,
                ptype: 'Q',
                startPort: 'node4_1',
                endPort: 'node2_4'
            }],
            rightList:[
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01"
                },
                {
                    title:"医院可以刷信用卡么?",
                    url:"creditcard.eictic.com 2020-01",
                    active:true
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
            ],
            linkList:[
                {
                    title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[
                        "住房贷款","信贷经理","登录信用卡","咨询","贷款咨询","金融百科"
                    ]
                },
                {
                    title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                },
                {
                    title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                },
                {
                    title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                },
                {
                    title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                },
                {
                    title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                },
                {
                    title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                }
            ],
            selectLinkList:[
                {
                    title:"<span style='color:#D43134'>信用卡</span>的<span style='color:#D43134'>功能</span>是什么",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                },
                {
                    title:"<span style='color:#D43134'>信用卡</span>的量<span style='color:#D43134'>人均发卡量</span>是多少",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                },
                {
                    title:"<span style='color:#D43134'>信用卡</span>的<span style='color:#D43134'>发卡量</span>是多少",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                },
                {
                    title:"<span style='color:#D43134'>信用卡</span>的<span style='color:#D43134'>免息期</span>是多久",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                },
                {
                    title:"<span style='color:#D43134'>信用卡</span>的<span style='color:#D43134'>有效期</span>是多久",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                },
                {
                    title:"<span style='color:#D43134'>信用卡</span>的<span style='color:#D43134'>年利率</span>是多少",
                    url:"https://www.rong360.com/",
                    text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                    detailList:[]
                },
                [
                    {
                        title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                        url:"https://www.rong360.com/",
                        text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                        detailList:[
                            "住房贷款","信贷经理","登录信用卡","咨询","贷款咨询","金融百科"
                        ]
                    },
                    {
                        title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                        url:"https://www.rong360.com/",
                        text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                        detailList:[]
                    },
                    {
                        title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                        url:"https://www.rong360.com/",
                        text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                        detailList:[]
                    },
                    {
                        title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                        url:"https://www.rong360.com/",
                        text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                        detailList:[]
                    },
                    {
                        title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                        url:"https://www.rong360.com/",
                        text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                        detailList:[]
                    },
                    {
                        title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                        url:"https://www.rong360.com/",
                        text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                        detailList:[]
                    },
                    {
                        title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台",
                        url:"https://www.rong360.com/",
                        text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                        detailList:[]
                    }
                ]
            ],
            tagList:["信用卡申请","信用卡补办申请","信用卡挂失","信用卡取现","信用卡换卡","信用卡分期"],
            tagIndex:0,
            contentSelectList:[
                {
                    title:"功能",
                    buttonName:"信用卡取现",
                    buttonColor:"blue"
                },
                {
                    title:"人均发卡量",
                    buttonName:"0.7张",
                    buttonColor:"blue"
                },
                {
                    title:"发卡量",
                    buttonName:"13亿张",
                    buttonColor:"green"
                },
                {
                    title:"免息期",
                    buttonName:"56天",
                    buttonColor:"green"
                },
                {
                    title:"有效期",
                    buttonName:"3-5年",
                    buttonColor:"green"
                },
                {
                    title:"年利率",
                    buttonName:"18%",
                    buttonColor:"green"
                }
            ],
            businessTabIndex:0,
            businessStyleList:[
                {
                    value:"员工渠道",
                    background:"blue"
                },
                {
                    value:"网点wifi",
                    background:"blue"
                },
                {
                    value:"双录云",
                    background:"green"
                },
                {
                    value:"裕农通",
                    background:"blue"
                },
                {
                    value:"湖北省医疗平台",
                    background:"green"
                },
                {
                    value:"安心养老",
                    background:"blue"
                },
                {
                    value:"大厅致胜",
                    background:"blue"
                },
                {
                    value:"STM",
                    background:"blue"
                },
                {
                    value:"APP控制系统",
                    background:"blue"
                },
                {
                    value:"天津客户大屏",
                    background:"green"
                },
                {
                    value:"退役军人系统",
                    background:"green"
                },
                {
                    value:"员工渠道",
                    background:"blue"
                },
                {
                    value:"网点wifi",
                    background:"blue"
                },
                {
                    value:"双录云",
                    background:"green"
                }
            ],
            changeSelectList:[],
            sixSpaceList:[],
            isPerson:true,
            isCard:false,
            isChat:false,
            relationTitle:"人际关系网",
            chartData:[
                {
                name: "徐云",
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#59D69A",
                    borderWidth: 20,
                    shadowBlur: 15,
                    shadowColor: "#59D69A",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${zhuLiQian}`,
                },
                // {
                //   name: "徐贱云",
                //   draggable: true,
                //   symbol: `image://${imgSrc}`,
                //   symbolSize:100
                // },
                {
                name: "刘德华",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#E1CD0C",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#E1CD0C",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${xieTingFeng}`,
                },
                {
                name: "邓志荣",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#6AF5F5",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#6AF5F5",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${zhuLiQian}`,
                },
                {
                name: "李荣庆",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#1C5AFE",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#1C5AFE",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${xieTingFeng}`,
                },
                {
                name: "郑志勇",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#59D69A",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#59D69A",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${zhuLiQian}`,
                },
                {
                name: "赵英杰",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#59D69A",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#59D69A",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${xieTingFeng}`,
                },
                {
                name: "王承军",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#BF169C",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#BF169C",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${zhuLiQian}`,
                },
                {
                name: "陈卫东",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#59D69A",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#59D69A",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${xieTingFeng}`,
                },
                {
                name: "邹劲松",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#6AF5F5",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#6AF5F5",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${zhuLiQian}`,
                },
                {
                name: "赵成",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#1C5AFE",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#1C5AFE",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${zhuLiQian}`,
                },
                {
                name: "陈现忠",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#1C5AFE",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#1C5AFE",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${xieTingFeng}`,
                },
                {
                name: "陶泳",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#6AF5F5",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#6AF5F5",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${zhuLiQian}`,
                },
                {
                name: "王德福",
                category: 1,
                draggable: true,
                itemStyle: {
                    normal: {
                    borderColor: "#59D69A",
                    borderWidth: 4,
                    shadowBlur: 15,
                    shadowColor: "#59D69A",
                    color: "#2c343c"
                    }
                },
                symbol: `image://${xieTingFeng}`,
                }
            ],
            chartLink:[{
                source: 0,
                target: 1,
                category: 0,
                value: "夫妻"
                },
                {
                source: 0,
                target: 2,
                value: "子女"
                },
                {
                source: 0,
                target: 3,
                value: "夫妻"
                },
                {
                source: 0,
                target: 4,
                value: "父母"
                },
                {
                source: 1,
                target: 2,
                value: "表亲"
                },
                {
                source: 0,
                target: 5,
                value: "朋友"
                },
                {
                source: 4,
                target: 5,
                value: "朋友"
                },
                {
                source: 2,
                target: 8,
                value: "叔叔"
                },
                {
                source: 0,
                target: 12,
                value: "朋友"
                },
                {
                source: 6,
                target: 11,
                value: "爱人"
                },
                {
                source: 6,
                target: 3,
                value: "朋友"
                },
                {
                source: 7,
                target: 5,
                value: "朋友"
                },
                {
                source: 9,
                target: 10,
                value: "朋友"
                },
                {
                source: 3,
                target: 10,
                value: "朋友"
                },
                {
                source: 2,
                target: 11,
                value: "同学"
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
        },
        togo(url){
            this.$router.push({
                path:`/${url}`
            })
        },
        showMore(){
            this.linkList.push({
                title:"<span style='color:#D43134'>信用卡</span>和理财服务，就在建行私人信贷平台"+this.linkIndex,
                url:"https://www.rong360.com/",
                text:"建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品建行私人信贷平台是专注于金融领域的智能搜索平台，为企业和个人提供专业的贷款，信用卡及理财在线搜索和申请服务，目前已合作近10000家金融机构，涵盖30000款金融产品",
                detailList:[]
            })
            this.linkIndex++;
        },
        tagsClick(index){
            this.tagIndex=index
        },
        tagsPrev(){
            this.tagIndex--;
            if(this.tagIndex==-1){
                this.tagIndex=this.tagList.length-1;
            }
        },
        tagsNext(){
            this.tagIndex++;
            if(this.tagIndex==this.tagList.length){
                this.tagIndex=0;
            }
        },
        businessTabClick(index){
            this.businessTabIndex=index;
        },
        changeSelectName(arr){
            this.changeSelectList=arr;
        },
        makeComparison(){
            if(this.changeSelectList.length<2){
                this.$message({
                    showClose: true,
                    type:"warning",
                    message:"选择比一比的数量不能少于两个！"
                })
            }else if(this.changeSelectList.length==2){
                this.sixSpaceList=this.changeSelectList;
                console.log(this.sixSpaceList)
            }else if(this.changeSelectList.length>2){
                this.$message({
                    showClose: true,
                    type:"warning",
                    message:"选择比一比的数量不能超过两个！"
                })
            }
        },
        searchContent(){
            if(this.searchVal.indexOf("谢霆锋")>=0){
                this.isPerson=true;
                this.isCard=false;
                this.isChat=false;
                this.relationTitle="人物关系网";
            }else if(this.searchVal.indexOf("信用卡")>=0){
                this.isPerson=false;
                this.isCard=true;
                this.isChat=false;
                this.relationTitle="关键词关系网";
                this.chartData=[
                    {
                        name: "信用卡",
                        id:"0",
                        symbolSize:80,
                        draggable: true,
                        itemStyle: {
                            normal: {
                            borderColor: "#59D69A",
                            borderWidth: 20,
                            shadowBlur: 15,
                            shadowColor: "#59D69A",
                            color: "#2c343c"
                            }
                        },
                        symbol: `image://${xieTingFeng}`,
                    },
                    {
                        name: "红十字会农卡信用卡",
                        id:"1",
                        draggable: true,
                        itemStyle: {
                            normal: {
                            borderColor: "#59D69A",
                            borderWidth: 20,
                            shadowBlur: 15,
                            shadowColor: "#59D69A",
                            color: "#2c343c"
                            }
                        },
                        symbol: `image://${zhuLiQian}`,
                    },
                    {
                        name: "国航知音农卡信用卡",
                        id:"2",
                        draggable: true,
                        itemStyle: {
                            normal: {
                            borderColor: "#59D69A",
                            borderWidth: 20,
                            shadowBlur: 15,
                            shadowColor: "#59D69A",
                            color: "#2c343c"
                            }
                        },
                        symbol: `image://${zhuLiQian}`,
                    },
                    {
                        name: "龙卡腾讯游戏信用卡",
                        id:"3",
                        draggable: true,
                        itemStyle: {
                            normal: {
                            borderColor: "#59D69A",
                            borderWidth: 20,
                            shadowBlur: 15,
                            shadowColor: "#59D69A",
                            color: "#2c343c"
                            }
                        },
                        symbol: `image://${zhuLiQian}`,
                    },
                    {
                        name: "公安便民龙卡IC信用卡",
                        id:"4",
                        draggable: true,
                        itemStyle: {
                            normal: {
                            borderColor: "#59D69A",
                            borderWidth: 20,
                            shadowBlur: 15,
                            shadowColor: "#59D69A",
                            color: "#2c343c"
                            }
                        },
                        symbol: `image://${zhuLiQian}`,
                    },
                    {
                        name: "百大龙卡信用卡",
                        id:"5",
                        draggable: true,
                        itemStyle: {
                            normal: {
                            borderColor: "#59D69A",
                            borderWidth: 20,
                            shadowBlur: 15,
                            shadowColor: "#59D69A",
                            color: "#2c343c"
                            }
                        },
                        symbol: `image://${zhuLiQian}`,
                    },
                ];
                this.chartLink=[
                    {
                        source: 0,
                        target: 1,
                        category: 0,
                        value: "分类"
                    },
                    {
                        source: 0,
                        target: 2,
                        category: 0,
                        value: "分类"
                    },
                    {
                        source: 0,
                        target: 3,
                        category: 0,
                        value: "分类"
                    },
                    {
                        source: 0,
                        target: 4,
                        category: 0,
                        value: "分类"
                    },
                    {
                        source: 0,
                        target: 5,
                        category: 0,
                        value: "分类"
                    },
                ];
                this.linkList=this.selectLinkList[6];
            }else{
                this.isPerson=false;
                this.isCard=false;
                this.isChat=true;
            }
        },
        showSixSpace(){
            this.$router.push({
                path:"/relationNetwork"
            })
        },
        //连线方法
        onAddNodeModel (event, node) {
            console.log('添加节点', event.clientX, event.clientY, node)
            let newNode = {}
            newNode = node
            newNode.id = 'node' + (this.dtl++)
            newNode.positionX = node.positionX - 90 // -15 -90 定位到节点的终点
            newNode.positionY = node.positionY - 15
            newNode.outPorts = [{
                id: newNode.id + '_' + Math.floor(Math.random() * 10)
            }]
            newNode.inPorts = []
            this.nodes.push(newNode)
        },
        mouseFn (event, portData) {
            console.log('mouseFn', 'on-mouse', '鼠标右击路径事件', event, portData)
        },
        mouseOverFn (event, portData) {
            console.log('mouseFn', 'on-mouse-over', '鼠标划入路径事件', event, portData)
        },
        mouseOutFn (event, portData) {
            console.log('mouseFn', 'on-mouse-out', '鼠标划出路径事件', event, portData)
        },
        selectlMethod: function (event, data, node) {
            console.log('selectlMethod', 'on-select', '节点左键点击事件', event, data, node)
        },
        dragStart: function (event, node) {
            let nodeData = event.dataTransfer.getData('nodedata')
            console.log('节点开始移动', event.clientX, event.clientY, node, JSON.parse(nodeData))
            this.startNode = {id: node.id, positionX: event.clientX, positionY: event.clientY}
        },
        dragEnd: function (event, node) {
            console.log('节点移动结束', event.clientX, event.clientY, node)
            let nodeXY = {}
            nodeXY.x = event.clientX
            nodeXY.y = event.clientY
            let me = this
            this.nodes.forEach(function (item) {
                if (item.id === node.id) {
                item.positionX = node.positionX + (nodeXY.x - me.startNode.positionX)
                item.positionY = node.positionY + (nodeXY.y - me.startNode.positionY)
                }
            })
            if (node.id === this.initialData.id) {
                this.initialData.positionX = node.positionX + (nodeXY.x - me.startNode.positionX)
                this.initialData.positionY = node.positionY + (nodeXY.y - me.startNode.positionY)
            }
        },
        addPath: function (event, startData, endData) {
            let me = this
            console.log('添加路径', event, startData, endData)
            this.nodes.forEach(function (item) {
                item.inPorts.forEach(function (ins) {
                if (ins.id === endData) {
                    ins.isConnected = true
                }
                })
            })
            setTimeout(function () {
                me.paths.push({
                dotted: me.ini_config.isDotted,
                ptype: me.ini_config.lineType,
                startPort: startData,
                endPort: endData
                })
            }, 200)
        },
        dragGing: function (event) {
            console.log('节点移动中...', event.clientX, event.clientY)
        },
        updateCompleted: function () {
            console.log('updateCompleted!!')
            // 重新加载路径
            this.$refs.curve.vReload()
        },
        mouseMenu: function (event, id) {
            console.log('mouseMenu', 'on-mouse', '工作区右击事件', event, id)
        },
        mouseNodeMenu: function (event, node) {
            console.log('mouseNodeMenu', 'on-mouse', '节点右击事件', event, node)
        },
        selectSearch(index){
            this.linkList=[this.selectLinkList[index]]
        }

        

    },
    watch: {
        linkList() {//监听对话框内容，如果有新内容加入，自动滑到最底部
            this.$nextTick(() => {
                var container = this.$el.querySelector("#searchBox-content");
                container.scrollTop = container.scrollHeight;
            })
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
            padding-left: 100px !important;
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
                            span{
                                color: #D43134;
                            }
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
                            height: 32px;
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
                                color: #5CB3FF;
                                font-size: 14px;
                                background: #1A1E2A;
                                text-align: center;
                                float: left;
                                margin: 10px 2%;
                                border-radius: 3px;
                            }
                            .link-detail-item:hover{
                                background: #242A39;
                            }
                        }
                    }
                }
                .showMore{
                    height: 40px;
                    line-height: 40px;
                    margin: 0;
                    padding: 0;
                    border-radius: 4px;
                    text-align: center;
                    font-size: 14px;
                    color: #FFF;
                    cursor: pointer;
                    background: url("/static/img/showMore.png") no-repeat 56% center #242A39;
                }
            }
        }
        #searchBox-content-right{
            .searchBox-content-right-list{
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
                li:hover{
                    background: #2B2F42
                }
                li.active{
                    border-left: 2px solid #1B94FF;
                }
            }
            #business-style{
                position: relative;
                .business-style-tab{
                    margin: 60px 0 0 0;
                    padding: 0;
                    list-style: none;
                    height: 20px;
                    padding: 10px 0;
                    color: #ADBADA;
                    border-bottom: 1px solid #289BFF;
                    li{
                        float: left;
                        width: calc(20% - 1px);
                        border-right: 1px solid #ccc;
                        text-align: center;
                        height: 20px;
                        line-height: 20px;
                        position: relative;
                        font-size: 14px;
                        cursor: pointer;
                    }
                    li:nth-last-child(1){
                        border:none;
                    }
                    li.active{
                        background: #289BFF;
                        color: #FFF;
                        border-radius: 6px 6px 0 0;
                        border:none;
                        height: 40px;
                        line-height: 40px;
                        margin-top: -10px;
                        width: calc(20% - 10px);
                        margin-right: 10px;
                        margin-left: -1px;
                    }
                    li.active::after{
                        content: "";
                        position: absolute;
                        display: inline-block;
                        width: 0;
                        height: 0;
                        border-left: 10px solid #289BFF;
                        border-top: 40px solid transparent;
                        top: 0px;
                        right: -9px;
                    }
                }
                .business-style-list{
                    padding: 30px 10px 50px 10px;
                    background: #202333;
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        height: 300px;
                        overflow-x: hidden;
                        overflow-y: auto;
                        color: #fff;
                        li{
                            float: left;
                            margin: 10px;
                            position: relative;
                            border-radius: 6px;
                            .item-value{
                                padding: 10px 20px;
                            }
                            .border-base1{
                                width: calc(100% - 2px);
                                height: 10px;
                                background: #202333;
                                position: absolute;
                                bottom: 1px;
                                left: 1px;
                                border-radius:0 0 6px 6px;
                                z-index: 999;
                            }
                            .border-base2{
                                width: 100%;
                                height: 10px;
                                background: #ccc;
                                position: absolute;
                                bottom: -2px;
                                left: 0px;
                                border-radius:0 0 6px 6px;
                                z-index: 0;
                            }
                        }
                        
                    }
                    .background-blue{
                        background: #20447F;
                        .border-base1{
                            background: #20447F;
                        }
                        .border-base2{
                            background: #56ADFF;
                        }
                    }
                    .background-green{
                        background: #047883;
                        .border-base1{
                            background: #047883;
                        }
                        .border-base2{
                            background: #00E8FF;
                        }
                    }
                    ::-webkit-scrollbar{
                        width:10px;
                        height:10px;
                        /**/
                    }
                    ::-webkit-scrollbar-track{
                        background: #000;
                        border-radius:2px;
                    }
                    ::-webkit-scrollbar-thumb{
                        background: #DAEBF9;
                        border-radius:10px;
                    }
                    ::-webkit-scrollbar-thumb:hover{
                        background: #4FADFF;
                    }
                    ::-webkit-scrollbar-corner{
                        background: #179a16;
                    }
                }
                #business-more{
                    border: 1px solid #ccc;
                    height:20px;
                    width: 40px;
                    position: absolute;
                    bottom:0;
                    left: 50%;
                    margin-left: -20px;
                    border: none;
                    background: url("/static/img/down.png") no-repeat center center #212534;
                }
            }
            #relation-network{
                margin-top: 50px;
                height: 500px;
                width: 100%;
                background: #202333;
                border-top: 1px solid #2AABFF;
                position: relative;
                p{
                    font-size: 16px;
                    color: #FFF;
                    height: 30px;
                    line-height: 30px;
                    text-indent: 20px;
                }
                .relation-network-content{
                    width: 100%;
                    height: calc(100% - 30px);
                }
                .relation-network-btn{
                    position: absolute;
                    bottom: 10px;
                    left: calc(50% - 100px);
                    width: 200px;
                    background: #202433;
                    color: #289BFF;
                }
            }
            #six-space{
                margin-top: 50px;
                height: 500px;
                width: 100%;
                background: #202333;
                border-top: 1px solid #2AABFF;
                position: relative;
                p{
                    font-size: 16px;
                    color: #FFF;
                    height: 30px;
                    line-height: 30px;
                    text-indent: 20px;
                }
                .six-space-content{
                    width: 100%;
                    height: calc(100% - 30px);
                }
                .six-space-btn{
                    position: absolute;
                    bottom: 10px;
                    left: calc(50% - 100px);
                    width: 200px;
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
            &>.grid-content-detail{
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
#intelligent-computing{
    height: 180px;
    padding: 15px 8px;
    width: calc(100% - 16px);
    position: relative;
    .computing-logo{
        float: left;
        margin-right: 12px;
    }
    .computing-content{
        float: left;
        width: calc(100% - 125px);
        height: 180px;
        p{
            margin: 0;
            padding: 0;
        }
        .computing-content-title{
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            color: #FFF;
            span{
                color: #D43134;
            }
        }
        .computing-content-text{
            font-size: 12px;
            color: #D3DBEE ;
            margin-top: 4px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
        }
        .computing-content-number{
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            color: #D3DBEE;
            margin:10px 0;
        }
        .computing-content-tip{
            background: #2D3246;
            height: 39px;
            font-size: 12px;
            color: #D3DBEE ;
            padding: 8px 13px 3px 40px;
        }
        
    }
    #computing-more{
        border: 1px solid #ccc;
        height:20px;
        width: 40px;
        position: absolute;
        bottom:0;
        left: 50%;
        margin-left: -20px;
        border: none;
        background: url("/static/img/down.png") no-repeat center center #212534;
    }
}
#mind-map{
    position: relative;
    height: 150px;
    ul{
        list-style: none;
        height: 150px;
        margin: 0;
        padding: 0;
        li{
            width: 16%;
            float: left;
            margin: 0 2%;
            img{
                border-radius: 4px;
                width: 100%;
                height: 75px;
                margin-top: 16px;
                cursor: pointer;
            }
            p{
                text-align: center;
                margin: 0;
                padding: 0;
                height: 20px;
                line-height: 20px;
                font-size: 14px;
                color: #FFF;
            }
        }
    }
    #mind-more{
        border: 1px solid #ccc;
        height:20px;
        width: 40px;
        position: absolute;
        bottom:0;
        left: 50%;
        margin-left: -20px;
        border: none;
        background: url("/static/img/down.png") no-repeat center center #212534;
    }
}
#relevant-tags{
    padding: 0 10px;
    position: relative;
    ul{
        padding: 0 10px;
        margin: 0;
        list-style: none;
        height: 56px;
        width: calc(100% - 20px);
        margin-left:calc(50% - 340px);
        .tags-item{
            float: left;
            padding: 9px 15px;
            background: #2B4391;
            color: #fff;
            height: 12px;
            line-height: 12px;
            text-align: center;
            margin:21px 5px 5px 5px;
            font-size: 13px;
            cursor: pointer;
            border-radius: 4px;
        }
        .tags-item:hover{
            background: #4B70E8
        }
        .tags-item.active{
            background: #517AFF;
            height: 18px;
            line-height: 18px;
            margin-top: 13px;
            box-shadow: 2px 2px 0px #fff;
        }
        .prev{
            position: absolute;
            top: 20px;
            left: 10px;
            padding: 0;
            width: 10px;
            height: 30px;
            background: url("/static/img/prev.png") no-repeat center center;
            cursor: pointer;
        }
        .next{
            position: absolute;
            top: 20px;
            right: 10px;
            padding: 0;
            width: 10px;
            height: 30px;
            background: url("/static/img/next.png") no-repeat center center;
            cursor: pointer;
        }
    }
    .relevant-tags-content{
        height: 116px;
        width: 100%;
        margin-top: 10px;
        background: #292F40;
        .tags-logo{
            margin: 14px 13px 0 13px;
            float: left;
        }
        .tags-detail{
            float: left;
            width: calc(100% - 153px);
            height: 118px;
            p{
                margin:0;
                padding: 0;
            }
            .tags-detail-title{
                font-size: 16px;
                height: 22px;
                line-height: 22px;
                color: #FFF;
                margin-top: 10px;
            }
            .tags-detail-text{
                font-size: 12px;
                color: #D3DBEE ;
                margin-top: 4px;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                line-clamp: 3;
                -webkit-box-orient: vertical;
            }
            .tags-detail-act{
                font-size: 13px;
                height: 18px;
                line-height: 18px;
                color: #6B9DFF ;
                margin-top: 8px;
                border-bottom: 1px solid #6B9DFF;
                width: 68px;
                cursor: pointer;
            }
            .tags-detail-act:hover{
                color: #289BFF
            }
        }
    }
    #tags-more{
        border: 1px solid #ccc;
        height:20px;
        width: 40px;
        position: absolute;
        bottom:-30px;
        left: 50%;
        margin-left: -20px;
        border: none;
        background: url("/static/img/down.png") no-repeat center center #212534;
    }
}
#content-select{
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
        li{
            width: 46%;
            margin: 0 2%;
            border: 1px solid #FFF;
            height: 50px;
            line-height: 50px;
            background: #292F40;
            margin-top: 17px;
            border: 4px;
            color: #FFF;
            position: relative;
            float: left;
            span{
                margin-left: 10px;
            }
            b{
                position: absolute;
                top: 10px;
                right: 55px;
                cursor: pointer;
                color: #fff;
                padding: 10px;
                height: 10px;
                line-height: 10px;
                font-weight: 500;
                border-radius: 4px;
                font-size: 13px;
                box-shadow: 2px 2px 0px #fff;
            }
            b.button-blue{
                background: #3C78FF;
            }
            b.button-green{
                background: #00C2E1;
            }
            i{  
                position: absolute;
                top: 15px;
                right: 15px;
                display: inline-block;
                width: 20px;
                height: 20px;
                border-radius: 10px;
                background:#3D4252;
                cursor: pointer;
                img{
                    width: 6.7px;
                    height: 10.8px;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                }
            }
        }
        li:hover{
            background: #666;
        }
    }
}
#profile{
    height:215px;
    .profile-logo{
        float: left;
        width: 150px;
        height: calc(100% - 40px);
        margin: 20px 15px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .profile-content{
        color: #FFF;
        float: left;
        width: calc(100% - 180px);
        height: 100%;
        .profile-content-name{
            font-size: 18px;
            margin-bottom: 12px;
            font-weight: 600
        }
        .profile-content-info{
            margin: 0;
            font-size: 14px;
            span{
                display: inline-block; 
            }
            span:nth-child(odd){
                width: 30%;
            }
            span:nth-child(even){
                width: 69%;
            }
        }
        .profile-content-des{
            font-size: 14px;
            margin-right: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;  // 控制多行的行数
            -webkit-box-orient: vertical;
        }
    }
}
#person-select{
    list-style: none;
    color: #FFF;
    margin: 0;
    padding: 0;
    li{
        width: 31%;
        margin: 10px 1%;
        float: left;
        height: 50px;
        line-height: 50px;
        font-size: 12px;
        text-indent: 5px;
        background: #292F40;
    }
    li:hover{
        background: #666;
    }
}
#similar-person{
    list-style: none;
    margin: 0;
    padding: 0;
    li{
        height:215px;
        .person-logo{
            float: left;
            width: 150px;
            height: calc(100% - 40px);
            margin: 20px 15px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .person-content{
            color: #FFF;
            float: left;
            width: calc(100% - 180px);
            height: 100%;
            .person-content-name{
                font-size: 18px;
                margin-bottom: 12px;
                font-weight: 600
            }
            .person-content-info{
                margin: 0;
                font-size: 14px;
                span{
                    display: inline-block; 
                }
                span:nth-child(odd){
                    width: 30%;
                }
                span:nth-child(even){
                    width: 69%;
                }
            }
            .person-content-des{
                font-size: 14px;
                margin-right: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 5;  // 控制多行的行数
                -webkit-box-orient: vertical;
            }
        }
    }
    li:nth-last-child(1){
        margin-bottom: 100px;
    }
    #person-more{
        border: 1px solid #ccc;
        height:20px;
        width: 40px;
        position: absolute;
        bottom:0px;
        left: 50%;
        margin-left: -20px;
        border: none;
        background: url("/static/img/down.png") no-repeat center center #212534;
    }
}
#chat-content{
    color: #FFF;
    font-size: 16px;
    padding: 20px;
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
#intelligent-computing{
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel__indicators li{
        padding: 0;
        height: 10px;
        width: 10px;
        margin: 5px;
        button{
            width: 10px;
            height: 10px;
        }
    }
}

</style>