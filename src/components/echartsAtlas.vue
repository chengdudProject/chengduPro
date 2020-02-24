<template>
    <div  ref="atlasId" :id="atlasId" class="atlas"></div>
</template>
<script>
import {jsonDelDuplicate} from '@/utils'

let atlas,globalSeriesData = [],relation = [],option = {},nodesChildren = [];
export default {
    name: "echartsAtlas",
    props:{
        /*
        * 图谱容器id
        * 非必填
        * */
        atlasId:{
            type:String,
            default:'atlas'
        },
        /*
         * 图谱数据
         * 非必填
         * */
        atlasData:{
            type:[Object,Array],
            default:()=>{
                return {
                    data:[],
                    links:[]
                }
            }
        },
        /*
         * 图谱节点分类
         * 非必填
         * */
        isNeedClass:{
            type:Boolean,
            default:false
        },
        /*
         * 标题
         * 必填
         * */
        atlasTitle:{
            type:String,
            default:''
        },
        /*
         * 节点颜色
         * 非必填，isNeedClass为true时，值为this.color
         * */
        nodesBgColor:{
            type:String,
            default:'#44a1a9'
        },
        /*
         * 点击获取节点详情
         * 非必填
         * 返回@clickHandle
         * */
        isNeedNodeDetails:{
            type:Boolean,
            default:false
        },
        /*
         * 线颜色
         * 非必填，默认与节点颜色相同
         * */
        lineColor:{
            type:String,
            default:'source'
        },
        /*
         * 线弯曲值
         * 非必填
         * */
        atalsCurveness:{
            type:Number,
            default:0
        },
        /*
         * 边两端
         * 非必填
         * */
        edgeSymbol:{
            type:[Array,String],
            default:()=>{
                return ['circle', 'arrow']
            }
        },
        /*
         * 线长度
         * 非必填
         * */
        edgeLength:{
            type:[Array,Number,String],
            default:()=>{
                return [40, 150]
            }
        },
        /*
         * 折叠节点
         * */
        isFoldNode:{
            type:Boolean,
            default:false
        },

        layoutAnimat:{
            type:Boolean,
            default:true
        },
        layout:{
            type:String,
            default:'force'
        },
        symbolSize:{
            type:Number,
            default:40
        }
    },
    components: {},
    data(){
        return {
            color: [
                "#2B4755",
                "#44A1A9",
                "#E57D60",
                "#C3A098",
                "#0099dc",
                "#D72A26",
                "#7DC8AF",
                "#649F84",
                "#D9821C",
                "#6D6F73",
                "#CDC9A5",
                "#CAFF70",
                "#BDB76B",
                "#9A32CD",
                "#8B7D6B",
                "#8B7500",
                "#8B5A2B",
                "#8B4789",
                "#8B4500",
                "#8B0000",
                "#7B68EE",
                "#548B54",
                "#d72a26",
                "#4EEE94",
                "#458B00",
                "#388E8E",
                "#050505",
                "#104E8B",
                "#00688B",
                "#545454",
                "#6E6E6E",
                "#BC8F8F"
            ],
            seriesData:[],
            seriesLinks:[],
            foldNodesName:[],
        }
    },
    methods: {
         drawAtlas(){
             const that = this;
             option = {
                 title: {
                     text: that.atlasTitle,
                     textAlign: 'left',
                     x: 'center',
                     y: 'top'
                 },

                 legend: [{
                     orient:'horizontal',
                     textStyle: {
                         fontSize: 12,
                     },
                 }],
                 series: [
                     {
                         type: 'graph',
                         layout: that.layout,
                         symbolSize: that.symbolSize,
                         ribbonType: false,
                         roam: true,
                         symbol:'circle',//节点图形
                         edgeSymbol: that.edgeSymbol,
                         edgeSymbolSize: [1, 6],
                         focusNodeAdjacency: true,
                         force: {
                             repulsion: 500, //子节点间距离
                             edgeLength: that.edgeLength,//连线长度
                             layoutAnimation: that.layoutAnimat,
                             gravity: 0.1,
                             initLayout: 'circular',
                         },
                         draggable: true,
                         itemStyle: {
                             normal: {
                                 color:that.nodesBgColor
                             }
                         },
                         lineStyle: {
                             normal: {
                                 color: that.lineColor,
                                 curveness: that.atalsCurveness //线的弯曲度
//                                 curveness: 0 //线的弯曲度
                             }
                         },
                         emphasis: {  //高亮
                             lineStyle: {
                                 width: 5
                             }
                         },
                         edgeLabel: {
                             normal: {
                                 show: true,
                                 textStyle: {
                                     fontSize: 13,
                                 },
                                 formatter: function (x) {
                                     return x.data.name;
                                 }
                             }
                         },
                         label: {
                             normal: {
                                 show: true,
                                 formatter: '{b}',
                             }
                         },
                         data:that.atlasData.data,
                         links:that.atlasData.links
                     }
                 ]

             };

             atlas.setOption(option);

             window.onresize = function () {
                 console.log("窗口变化");
                 atlas.resize();
             }

             atlas.on('click', function (params) {
                 that.isFoldNode ? that.nodesHandle(params) :'';
                 that.isNeedNodeDetails ? that.$emit('clickHandle',params.data):''
             });

            //节点拖动不还原
             atlas.on('mouseup', function (params) {
                 console.log(params);
                 option.series[0].data[params.dataIndex].x = params.event.clientX;
                 option.series[0].data[params.dataIndex].y = params.event.clientY;
                 option.series[0].data[params.dataIndex].fixed = true;
                 atlas.setOption(option);
             });

        },

        changeItemColor(nodes,itemClass){
            let that = this;
            for(let i in nodes){
                for(let k in itemClass){
                    if(nodes[i].type == itemClass[k].name){
                        nodes[i].itemStyle ={
                            normal: {
                                color: that.color[k]
                            }
                        }
                    }
                }
            }
            return nodes
        },

        changeAtlasData(atlasData){
            atlas = this.$echarts.init(this.$refs.atlasId);

            this.atlasData.data = atlasData.data;
            if(this.isNeedClass) {
                const nodes = atlasData.data;
                let atlasType = [];
                for (var i = 0; i < nodes.length; i++) {
                    atlasType[i] = {
                        name: nodes[i].type
                    };
                }
                atlasType= jsonDelDuplicate(atlasType);
                this.atlasData.data = this.changeItemColor(nodes,atlasType);
            }

            option.series[0].data = atlasData.data;
            option.series[0].links = atlasData.links;
            atlas.clear();
            atlas.setOption(option)


        },

        //节点折叠  isFold false:展开  true:折叠
        nodesHandle(params){
            if(params.dataType == 'node'){
                const flag = this.atlasData.data[params.dataIndex].isFold;
                this.atlasData.data[params.dataIndex].isFold = !flag;

                if(params.data.isFold){
//                    this.sum(this.atlasData.data,params.data.name);
                    this.flodNodes(this.atlasData.data,params.data.name);
                    this.seriesData = this.removeNodes(this.atlasData.data,globalSeriesData);
                    this.atlasData.data = [...this.seriesData];

                }else {
                    this.openNodes(params.data.name)
                    globalSeriesData = this.removeNodes(globalSeriesData,nodesChildren)
                }
                option.series[0].data =  this.atlasData.data;
                this.seriesLinks.length> 0 ? option.series[0].links = this.seriesLinks :'';
                atlas.clear();
                atlas.setOption(option);
            }
        },


        flodNodes(nodesData,pNodeName){
             nodesData.forEach(item =>{
                 let parentNodes = item.pNode;
                if(parentNodes.length == 1 && parentNodes[0] == pNodeName && item.name !== pNodeName){
                    if(parentNodes[0]!== item.name && !globalSeriesData.includes(item)){
                        globalSeriesData.push(item);
                    }
                    if(item.isParent ){
                         const that = this;
                         recursionNodes();
                         function recursionNodes() { //防止大数据栈溢出
                             that.flodNodes(nodesData,item.name)
                         }
                     //   this.sum(nodesData,item.name)
                     //   preventStackOverflow(this.nodesHandle(nodesData,item.name))
                    }
                }else{
                    if(parentNodes.length > 1 && parentNodes.includes(pNodeName)){
                        for(let j in parentNodes){
                            if(parentNodes[j] == pNodeName){
                                item.isRelates = true;
                                globalSeriesData.includes(item) == false? globalSeriesData.push(item) :'';
                                let relat = this.relationshipHandle(pNodeName,item.name,'query');
                                relation.includes(relat) == false? relation.push(relat) : '';
                                this.seriesLinks = this.relationshipHandle(pNodeName,item.name,'del');
                            }
                        }
                    }
                }
             })
        },

        openNodes(name){
             globalSeriesData.forEach(item =>{
                if(item.pNode.includes(name)){
                    this.atlasData.data.includes(item) == false ? this.atlasData.data.push(item) :'';
                    nodesChildren.includes(item) == false? nodesChildren.push(item):''
                    this.seriesLinks = this.relationshipHandle(name,item.name,'add');
                    if(item.isParent){
                        const that = this;
                        recursionNodes();
                        function recursionNodes() { //防止大数据栈溢出
                            that.openNodes(item.name)
                        }
                    }
                }
            })
        },

//        关系的增删查
        relationshipHandle(s,t,type){
            let data =  option.series[0].links;
            if(type == 'del' || type == 'query'){
                for(let i in data){
                    if(data[i].source == s && data[i].target == t){
                        if(type == 'del') {
                            data.splice(i, 1) //删除联系
                        }
                        else {
                            data = data[i];//本地存关系
                        }
                        return data
                    }
                }
            }else if(type == 'add'){
                for(let k in relation){
                    if(relation[k].source == s && relation[k].target == t){
                        data.push(relation[k]);
                        relation.splice(k,1)
                    }
                }
            }
            return data;
        },

        //删除节点
         removeNodes(arr,data){
             let newArr = [];
             data.forEach((item,index)=>{
                 if(index == 0)  newArr = arr.filter(val => val.name !== item.name || item.isRelates == true);
                 else newArr = newArr.filter(val => val.name !== item.name || item.isRelates == true)
             });
             return newArr;
         }
    },
    mounted(){
        atlas = this.$echarts.init(this.$refs.atlasId);
        this.drawAtlas();
    }

}
</script>
<style lang="scss" scoped>
    .atlas{
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>