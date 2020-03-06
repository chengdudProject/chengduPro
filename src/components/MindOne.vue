<template>
	<div class="mind-map">
   <div class="myDiagramDiv" id="myDiagramDiv" style="border: 1px solid white; width: 499px; height: 352px; position: relative; cursor: auto;  border: 0px;
    outline: none;">
	 </div>
   
     <span id="overviewSpan" style="display: inline-block; vertical-align: top;">
     </span>
</div>
</template>

<script>
//import gojs, { Diagram } from 'gojs'
import gojs, {Diagram} from '../components/gojs'
	export default {
		data(){
    return{

      title: '建行信用卡',
      date:'创建时间： 2019年12月12日 ； 尺寸大小：1200*768px',
      mindNode: 
        { "class": "go.TreeModel",
          "nodeDataArray": [
          {"key":0, "text":"建行信用卡", "brush":"#dcdcdc", "loc":"-400 50"},
          {"key":1, "parent":0, "text":"申请", "brush":"#3a8ddf", "dir":"right", "loc":"-300 -50"},
          {"key":2, "parent":0, "text":"开卡", "brush":"#e0826f", "dir":"right", "loc":"-300 -10"},
          {"key":21, "parent":2, "text":"电话开卡", "brush":"#e0826f", "dir":"right", "loc":"-250 -40"},
          {"key":211, "parent":21, "text":"拨打000000", "brush":"#e0826f", "dir":"right", "loc":"-160 -40"},
          {"key":22, "parent":2, "text":"线下开卡", "brush":"#e0826f", "dir":"right", "loc":"-250 20"},
          {"key":221, "parent":22, "text":"柜台办理", "brush":"#e0826f", "dir":"right", "loc":"-160 20"},
          {"key":3, "parent":0, "text":"挂失", "brush":"#5ebc5b", "dir":"right", "loc":"-300 30"},
          {"key":4, "parent":0, "text":"补卡", "brush":"#b149c7", "dir":"right", "loc":"-300 70"},
          {"key":5, "parent":0, "text":"还款", "brush":"#75cfdc", "dir":"right", "loc":"-300 110"},
          {"key":51, "parent":5, "text":"分期申请", "brush":"#75cfdc", "dir":"right", "loc":"-250 70"},
          {"key":511, "parent":51, "text":"选择期数", "brush":"#75cfdc", "dir":"right", "loc":"-160 70"},
          {"key":5111, "parent":511, "text":"确定分期", "brush":"#75cfdc", "dir":"right", "loc":"-70 70"},
          {"key":52, "parent":5, "text":"还款", "brush":"#75cfdc", "dir":"right", "loc":"-250 150"},
          {"key":521, "parent":52, "text":"手机银行", "brush":"#75cfdc", "dir":"right", "loc":"-190 110"},
          {"key":522, "parent":52, "text":"ATM", "brush":"#75cfdc", "dir":"right", "loc":"-190 150"},
          {"key":523, "parent":52, "text":"营业厅办理", "brush":"#75cfdc", "dir":"right", "loc":"-190 190"},
          {"key":6, "parent":0, "text":"借钱", "brush":"#3a8ddf", "dir":"right", "loc":"-300 150"}
          ]
          }
    }
  },
  mounted() {
    //初始化swiper
    // const mySwiper = new Swiper('.swiperOne', {
    //   slidesPerView: 4,
    //   observe: true,
    // })



    // 创建页面加载创建图表，不可以加在事件中，因为一个dom只可以画一个图
    let _this = this;
    var gm = go.GraphObject.make;
    var myDiagram = gm(go.Diagram, 'myDiagramDiv' ,
                       {isReadOnly: true,
                        isModified: false,
                        allowHorizontalScroll: false,
                        allowVerticalScroll: false,
                        minScale: 0.4,
                        "dragSelectingTool.isEnabled" : false, 
                        initialContentAlignment: go.Spot.Center,
                        "toolManager.mouseWheelBehavior": go.ToolManager.WheelNone,
                         //layout: gm(go.LayeredDigraphLayout,
                                    //{ direction:0, layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource}),
                         "undoManager.isEnabled": true}); //鼠标滚轮事件禁止

   
    // 定义节点模版
        myDiagram.nodeTemplate = 
        gm(go.Node, "Vertical",
          { selectionObjectName: "TEXT" }, 
          //{ selectionChanged: nodeSelectionChanged },
          // 定义节点的文本
          gm(go.TextBlock,
            { 
              name: "TEXT", 
              minSize: new go.Size(30,15), 
              editable: false 
              },
            new go.Binding("text", "text").makeTwoWay(),
            new go.Binding("scale", "scale").makeTwoWay(),
            new go.Binding("font", "font").makeTwoWay()),

          gm(go.Shape, "LineH",
            { stretch: go.GraphObject.Horizontal,
              strokeWidth: 3, height: 3,
              portId: "", fromSpot: go.Spot.LeftRightSides, toSpot: go.Spot.LeftRightSides},
              new go.Binding("stroke", "brush"),
              new go.Binding("fromSpot", "dir", function(d) {return spotConverter(d, true)}),
              new go.Binding("toSpot", "dir", function(d) {return spotConverter(d, false)})),
              new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
              new go.Binding("locationSpot", "dir", function(d) {return spotConverter(d, false)})
            ),
             myDiagram.linkTemplate = gm(
              go.Link,
              { curve: go.Link.Bezier, fromShortLength:-2, toShortLength:-2,selectable:false},
                gm(go.Shape, { strokeWidth: 3},
              new go.Binding("stroke", "toNode", function(n) {
                if (n.data.brush) return n.data.brush;
                return "black";
              }).ofObject())
            
        );

            // 连接线样式
           
            myDiagram.addDiagramListener("SelectionMoved", function(e) {
              var rootX = myDiagram.findNodeForKey(0).location.x;
              myDiagram.selection.each(function(node) {
                if (node.data.parent !== 0) return; // Only consider nodes connected to the root
                var nodeX = node.location.x;
                if (rootX < nodeX && node.data.dir !== "right") {
                  updateNodeDirection(node, "right");
                } else if (rootX > nodeX && node.data.dir !== "left") {
                  updateNodeDirection(node, "left");
                }
                layoutTree(node);
              });
            });
            myDiagram.addDiagramListener("ObjectSingleClicked", function(e) {
              console.log(e.subject.Ub)
              _this.bus.$on('update', function(e) {
                console.log(e.subject.Ub)
              })
            });
            myDiagram.model = go.Model.fromJson(_this.mindNode);
            //略缩图
            //var myOverview = gm(go.Overview, 'myOverviewDiv',
                               //{ observed: diagram });   
},
  methods: {


    spotConverter(dir, from) {
      if (dir === "left") {
        return (from ? go.Spot.Left : go.Spot.Right);
      } else {
        return (from ? go.Spot.Right : go.Spot.Left);
      }
    },
    layoutTree(node) {
      if (node.data.key === 0) {  // adding to the root?
        layoutAll();  // lay out everything
      } else {  // otherwise lay out only the subtree starting at this parent node
        var parts = node.findTreeParts();
        layoutAngle(parts, node.data.dir === "left" ? 180 : 0);
      }
    },
     layoutAll(root) {
              
              //var root = myDiagram.findNodeForKey(0);
              if (root === null) return;
              //myDiagram.startTransaction("Layout");
              // split the nodes and links into two collections
              var rightward = new go.Set(/*go.Part*/);
              var leftward = new go.Set(/*go.Part*/);
              root.findLinksConnected().each(function(link) {
                var child = link.toNode;
                if (child.data.dir === "left") {
                  leftward.add(root);  // the root node is in both collections
                  leftward.add(link);
                  leftward.addAll(child.findTreeParts());
                } else {
                  rightward.add(root);  // the root node is in both collections
                  rightward.add(link);
                  rightward.addAll(child.findTreeParts());
                }
              });
              // do one layout and then the other without moving the shared root node   
            },
            // nodeSelectionChanged(node) {
            //   if(node.isSelected) {
            //     //节点选中执行的内容
            //     console.log(node.data);//节点的属性信息
            //     console.log(node.data.key);//拿到节点的Key，拿其他属性类似
            //     var nodel = myDiagram.model.findNodeForKey
            //   }
            // }
  },

	}
</script>

<style lang="scss" scoped>
.mind-map {
	//width: 750px;
  //height: 450px;
  padding-left: 10%;
  #myDiagramDiv>>>canvas{
    outline: none;
  }
}

</style>