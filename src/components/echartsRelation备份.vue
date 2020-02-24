<template>
  <div class="echartLayout">
    <div id="container"></div>
    <div id="attrBox" v-show="attrShow">
      <p>{{attrValue}}<span class="close" @click="closeAttrBox"></span></p>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import xieTingFeng from "../../static/img/xietingfeng.png";
import zhuLiQian from "../../static/img/zhuliqian.png";

export default {
  name: "personRelation",
  data() {
    return {
      myChart: null,
      chartData: [
        {
          name: "徐云",
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#59D69A",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#59D69A",
                  color: "#2c343c"
              }
          }
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
          symbolSize:100,
          itemStyle: {
              normal: {
                  borderColor: "#E1CD0C",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#E1CD0C",
                  color: "#2c343c",
              }
          }
        },
        {
          name: "邓志荣",
          category: 1,
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#6AF5F5",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#6AF5F5",
                  color: "#2c343c",
              }
          }
        },
        {
          name: "李荣庆",
          category: 1,
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#1C5AFE",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#1C5AFE",
                  color: "#2c343c",
              }
          }
        },
        {
          name: "郑志勇",
          category: 1,
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#59D69A",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#59D69A",
                  color: "#2c343c"
              }
          }
        },
        {
          name: "赵英杰",
          category: 1,
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#59D69A",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#59D69A",
                  color: "#2c343c"
              }
          }
        },
        {
          name: "王承军",
          category: 1,
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#BF169C",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#BF169C",
                  color: "#2c343c"
              }
          }
        },
        {
          name: "陈卫东",
          category: 1,
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#59D69A",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#59D69A",
                  color: "#2c343c"
              }
          }
        },
        {
          name: "邹劲松",
          category: 1,
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#6AF5F5",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#6AF5F5",
                  color: "#2c343c",
              }
          }
        },
        {
          name: "赵成",
          category: 1,
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#1C5AFE",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#1C5AFE",
                  color: "#2c343c",
              }
          }
        },
        {
          name: "陈现忠",
          category: 1,
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#1C5AFE",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#1C5AFE",
                  color: "#2c343c",
              }
          }
        },
        {
          name: "陶泳",
          category: 1,
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#6AF5F5",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#6AF5F5",
                  color: "#2c343c",
              }
          }
        },
        {
          name: "王德福",
          category: 1,
          draggable: true,
          itemStyle: {
              normal: {
                  borderColor: "#59D69A",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#59D69A",
                  color: "#2c343c"
              }
          }
        }
      ],
      chartLink: [
        {
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
      ],
      attrShow:false,
      attrValue:"我是属性框"
    };
  },
  mounted() {
    this.initEchart();
  },
  methods: {
    initEchart() {
      let dom = document.getElementById("container");
      this.myChart = echarts.init(dom);
      let option = {
        backgroundColor:"#2c343c",
        title: {
          text: ""
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12
            }
          }
        },
        legend: {
          x: "center",
          show: false,
          data: ["夫妻", "战友", "亲戚"]
        },

        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 60,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
              {
                name: "夫妻",
                itemStyle: {
                  normal: {
                    color: "#009800"
                  }
                }
              },
              {
                name: "战友",
                itemStyle: {
                  normal: {
                    color: "#4592FF"
                  }
                }
              },
              {
                name: "亲戚",
                itemStyle: {
                  normal: {
                    color: "#3592F"
                  }
                }
              }
            ],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12
                }
              }
            },
            force: {
                repulsion: 500, //子节点间距离
                edgeLength: [20,200],//连线长度
                layoutAnimation: true,
                gravity: 0,
                initLayout: 'circular',
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10
                },
                formatter: "{c}"
              }
            },
            data: this.chartData,
            links: this.chartLink,
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0
              }
            }
          }
        ]
      };
      this.myChart.setOption(option);
      let timeout;
      this.myChart.on("click", (params)=> {
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
          this.attrShow=true;
          this.attrValue=params.data.name;
        },500)
      });
      this.myChart.on("dblclick", (params)=>{
        console.log(params.data); //获取点击的头像的数据信息
        clearTimeout(timeout)
        this.chartData=[
          {
            id:"1",
            name: "谢霆锋",
            draggable: true,
            symbol: `image://${xieTingFeng}`,
            symbolSize:100,
            itemStyle: {
                normal: {
                  borderColor: "#fff",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#fff",
                }
            }
          },
          {
            id:"2",
            name: "朱丽倩",
            draggable: true,
            symbol: `image://${zhuLiQian}`,
            symbolSize:100,
            itemStyle: {
                normal: {
                  borderColor: "#fff",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#fff",
                }
            }
          },
          {
            id:"3",
            name: "谢贤",
            draggable: true,
            itemStyle: {
                normal: {
                    borderColor: "orange",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "orange",
                    color: "#962717"
                }
            }
          },
          {
            id:"4",
            name: "张柏芝",
            draggable: true,
            itemStyle: {
                normal: {
                    borderColor: "orange",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "orange",
                    color: "#962717"
                }
            }
          },
          {
            id:"5",
            name: "刘德华",
            draggable: true,
            itemStyle: {
                normal: {
                    borderColor: "orange",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "orange",
                    color: "#962717"
                }
            }
          },
          {
            id:"6",
            name: "陈冠希",
            draggable: true,
            itemStyle: {
                normal: {
                  borderColor: "#6AF5F5",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#6AF5F5",
                  color: "#2c343c",
                }
            }
          },
          {
            id:"7",
            name: "郑秀文",
            draggable: true,
            itemStyle: {
                normal: {
                  borderColor: "#6AF5F5",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#6AF5F5",
                  color: "#2c343c",
                }
            }
          },
          {
            id:"8",
            name: "刘德华",
            draggable: true,
            itemStyle: {
                normal: {
                  borderColor: "#6AF5F5",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#6AF5F5",
                  color: "#2c343c",
                }
            }
          },
          {
            id:"9",
            name: "容祖儿",
            draggable: true,
            itemStyle: {
                normal: {
                  borderColor: "#1C5AFE",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#1C5AFE",
                  color: "#000E65",
                }
            }
          },
          {
            id:"10",
            name: "陈奕迅",
            draggable: true,
            itemStyle: {
                normal: {
                  borderColor: "#1C5AFE",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#1C5AFE",
                  color: "#000E65",
                }
            }
          },
          {
            id:"11",
            name: "刘德华",
            draggable: true,
            itemStyle: {
                normal: {
                  borderColor: "#1C5AFE",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#1C5AFE",
                  color: "#000E65",
                }
            }
          },
          {
            id:"12",
            name: "陈奕迅",
            draggable: true,
            itemStyle: {
                normal: {
                  borderColor: "#E1CD0C",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#E1CD0C",
                  color: "#000E65",
                }
            }
          },
          {
            id:"13",
            name: "刘德华",
            draggable: true,
            itemStyle: {
                normal: {
                  borderColor: "#E1CD0C",
                  borderWidth: 4,
                  shadowBlur: 100,
                  shadowColor: "#E1CD0C",
                  color: "#000E65",
                }
            }
          },
        ];
        this.chartLink=[
          {
            source: "1",
            target: "3",
            value: "父子",
            lineStyle: {
                normal: {
                    curveness: 0.3,
                }
            },
            edgeLength: 700
          },
          {
            source: "3",
            target: "4",
            value: "公媳",
            lineStyle: {
                normal: {
                    curveness: 0.3,
                }
            },
          },
          {
            source: "4",
            target: "5",
            value: "朋友",
            lineStyle: {
                normal: {
                    curveness: 0.3,
                }
            },
          },
          {
            source: "5",
            target: "2",
            value: "朋友",
            lineStyle: {
                normal: {
                    curveness: 0.3,
                }
            },
          },
          
          {
            source: "1",
            target: "6",
            value: "朋友",
            lineStyle: {
                normal: {
                    curveness: -0.2,
                }
            }
          },
          {
            source: "6",
            target: "7",
            value: "朋友",
            lineStyle: {
                normal: {
                    curveness: -0.2,
                }
            }
          },
          {
            source: "7",
            target: "8",
            value: "朋友",
            lineStyle: {
                normal: {
                    curveness: -0.2,
                }
            }
          },
          {
            source: "8",
            target: "2",
            value: "朋友",
            lineStyle: {
                normal: {
                    curveness: -0.2,
                }
            }
          },

          {
            source: "1",
            target: "9",
            value: "朋友"
          },
          {
            source: "9",
            target: "10",
            value: "朋友"
          },
          {
            source: "10",
            target: "11",
            value: "朋友"
          },
          {
            source: "11",
            target: "2",
            value: "朋友"
          },

          {
            source: "1",
            target: "12",
            value: "朋友"
          },
          {
            source: "12",
            target: "13",
            value: "朋友"
          },
          {
            source: "13",
            target: "2",
            value: "朋友"
          },
        ];
        this.initEchart();
      });
    },
    closeAttrBox(){
      this.attrShow=false;
    }
  }
};
</script>

<style scoped lang="scss">
.echartLayout {
  height: calc(100% - 119px);
  width: 90%;
  margin: auto;
  position: absolute;
  top: 100px;
  left: 5%;
  #container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #attrBox{
    width:200px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 0;
    color: #E1CD0C;
    background: #262626;
    margin-top: -200px;
    border-radius: 4px;
    p{
      text-indent: 20px;
    }
    .close {
      background: orange;
      color: red;
      border-radius: 12px;
      line-height: 20px;
      text-align: center;
      height: 20px;
      width: 20px;
      font-size: 18px;
      padding: 1px;
      top: 10px;
      right: 10px;
      position: absolute;
      cursor: pointer;
    }
    /* use cross as close button */
    .close::before {
      content: "\2716";
      position: absolute;
      top: 0;
      right: 3px;
    }
  }
}
</style>