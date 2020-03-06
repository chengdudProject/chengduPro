<template>
  <div class="echartLayout" :style="`width:${width};height:${height}`">
    <div class="container"></div>
    <div class="attrBox" v-show="attrShow">
      <p>
        {{attrValue}}
        <span class="close" @click="closeAttrBox"></span>
      </p>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import xieTingFeng from "../../static/img/xietingfeng.png";
import zhuLiQian from "../../static/img/zhuliqian.png";

export default {
  name: "personRelation",
  props:{
    width:{
        type:String,
        default:"100%"
    },
    height:{
        type:String,
        default:"100%"
    }
  },
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
      attrShow: false,
      attrValue: "我是属性框",
      series: "",
      option:"",
      selectNum:0,
      lastSelectName:[]
    };
  },
  mounted() {
    this.setRelationSeries();
    console.log(222)
    this.initEchart();
  },
  methods: {
    initEchart() {
      this.myChart = echarts.init(this.$el);
      // let dom = document.getElementById("container");
      // this.myChart = echarts.init(dom);
      // let option = {
      //   backgroundColor: "#2c343c",
      //   title: {
      //     text: ""
      //   },
      //   tooltip: {},
      //   animationDurationUpdate: 1500,
      //   animationEasingUpdate: "quinticInOut",
      //   label: {
      //     normal: {
      //       show: true,
      //       textStyle: {
      //         fontSize: 12
      //       }
      //     }
      //   },

      //   series: this.series
      // };
      this.myChart.setOption(this.option);
      let timeout;
      this.myChart.on("click", params => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.attrShow = true;
          this.attrValue = params.data.name;
          let _option=this.myChart.getOption();
          _option.series[0].data.forEach((item,index)=>{
            if(item.name==params.data.name){
              if(params.data.symbolSize==80){
                for(let i=0;i<this.lastSelectName.length;i++){
                  if(this.lastSelectName[i]==params.data.name){
                    this.lastSelectName.splice(i,1);
                    _option.series[0].data[index].symbolSize=50;
                  }
                }
              }else{
                this.lastSelectName.push(item.name);
                _option.series[0].data[index].symbolSize=80;
              }
              console.log(this.lastSelectName)
              this.myChart.setOption(_option);
              this.$emit("changeSelectName",this.lastSelectName);
            }
          })
        }, 300);
      });
      // this.myChart.on("dblclick", params => {
      //   console.log(params.data); //获取点击的头像的数据信息
      //   clearTimeout(timeout);
      //   this.setSixSeries();
      //   this.initEchart();
      // });
    },
    closeAttrBox() {
      this.attrShow = false;
    },
    setRelationSeries() {
      this.option = {
        backgroundColor: "#2c343c",
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

        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 50,
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
                position: "bottom",
                textStyle: {
                  fontSize: 16
                },
                color:"#FFF"
              }
            },
            force: {
              repulsion: 400, //子节点间距离
              edgeLength: [20, 100], //连线长度
              layoutAnimation: true,
              gravity: 0,
              initLayout: "circular"
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
    },
    setSixSeries() {
      this.option = {
        backgroundColor: "#2c343c",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "#157eff"
              },
              {
                offset: 1,
                color: "#35c2ff"
              }
            ])
          },
          shadowBlur: 10
        },
        textStyle: {
          color: "#333",
          fontSize: 16,
          fontWeight: 600
        },
        animationDuration: 1500,
        animationEasingUpdate: "quinticInOut",
        xAxis: {
          show: false,
          type: "value"
        },
        yAxis: {
          show: false,
          type: "value"
        },
        series: [
          {
            type: "graph",
            coordinateSystem: "cartesian2d",
            hoverAnimation: true,
            nodeScaleRatio: false,
            //建头
            edgeSymbol: ["circle", "none"],
            edgeSymbolSize: [2, 15],
            focusNodeAdjacency: true,
            roam: true,
            symbolSize: 80,
            //圆形上面的文字
            label: {
              normal: {
                position: "inside",
                show: true,
                textStyle: {
                  fontSize: 16
                },
                color:"#FFF"
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#157eff"
                  },
                  {
                    offset: 1,
                    color: "#35c2ff"
                  }
                ])
              },
              shadowBlur: 10
            },
            lineStyle: {
              normal: {
                width: 1,
                shadowColor: "none",
                color: "#fff"
              }
            },
            edgeLabel: {
              normal: {
                show:true,
                textStyle: {
                    fontSize: 16
                },
                formatter: "{c}",
                color:"#fff"
              }
            },
            data: [
              {
                name: "谢霆锋",
                symbolSize: 100,
                draggable: false,
                fixed: true,
                value: [20, 150],
                id:"1",
                symbol: `image://${xieTingFeng}`,
                itemStyle: {
                    normal: {
                      borderColor: "#fff",
                      borderWidth: 4,
                      shadowBlur: 15,
                      shadowColor: "#fff",
                    }
                },
                label: {
                  normal: {
                    position: "bottom"
                  }
                },
              },
              {
                name: "朱丽倩",
                symbolSize: 100,
                draggable: false,
                value: [470, 150],
                symbol: `image://${zhuLiQian}`,
                id:"2",
                itemStyle: {
                    normal: {
                      borderColor: "#fff",
                      borderWidth: 4,
                      shadowBlur: 15,
                      shadowColor: "#fff",
                    }
                },
                label: {
                  normal: {
                    position: "bottom"
                  }
                },
              },
              {
                name: "谢贤",
                value: [170, 270],
                draggable: false,
                fixed: true,
                id:"3",
                itemStyle: {
                    normal: {
                        borderColor: "orange",
                        borderWidth: 4,
                        shadowBlur: 15,
                        shadowColor: "orange",
                        color: "#962717"
                    }
                }
              },
              {
                name: "张柏芝",
                symbolSize: 80,
                draggable: false,
                value: [320, 270],
                id:"4",
                itemStyle: {
                    normal: {
                        borderColor: "orange",
                        borderWidth: 4,
                        shadowBlur: 15,
                        shadowColor: "orange",
                        color: "#962717"
                    }
                }
              },
              {
                name: "陈冠希",
                value: [170, 210],
                draggable: false,
                id:"5",
                itemStyle: {
                    normal: {
                      borderColor: "#6AF5F5",
                      borderWidth: 4,
                      shadowBlur: 15,
                      shadowColor: "#6AF5F5",
                      color: "#2c343c",
                    }
                }
              },
              {
                name: "郑秀文",
                symbolSize: 80,
                draggable: false,
                value: [320, 210],
                id:"6",
                itemStyle: {
                    normal: {
                      borderColor: "#6AF5F5",
                      borderWidth: 4,
                      shadowBlur: 15,
                      shadowColor: "#6AF5F5",
                      color: "#2c343c",
                    }
                }
              },
              {
                name: "容祖儿",
                value: [170, 150],
                draggable: false,
                id:"7",
                itemStyle: {
                    normal: {
                      borderColor: "#1C5AFE",
                      borderWidth: 4,
                      shadowBlur: 15,
                      shadowColor: "#1C5AFE",
                      color: "#000E65",
                    }
                }
              },
              {
                name: "陈奕迅",
                symbolSize: 80,
                draggable: false,
                value: [320, 150],
                id:"8",
                itemStyle: {
                    normal: {
                      borderColor: "#1C5AFE",
                      borderWidth: 4,
                      shadowBlur: 15,
                      shadowColor: "#1C5AFE",
                      color: "#000E65",
                    }
                }
              },
              {
                name: "谢振轩",
                value: [170, 90],
                draggable: false,
                id:"9",
                itemStyle: {
                    normal: {
                      borderColor: "#9C18A8",
                      borderWidth: 4,
                      shadowBlur: 15,
                      shadowColor: "#9C18A8",
                      color: "#520168",
                    }
                }
              },
              {
                name: "张柏芝",
                symbolSize: 80,
                draggable: false,
                value: [320, 90],
                id:"10",
                itemStyle: {
                    normal: {
                      borderColor: "#9C18A8",
                      borderWidth: 4,
                      shadowBlur: 15,
                      shadowColor: "#9C18A8",
                      color: "#520168",
                    }
                }
              },
              {
                name: "张卫健",
                value: [170, 30],
                draggable: false,
                id:"11",
                itemStyle: {
                    normal: {
                      borderColor: "#E1CD0C",
                      borderWidth: 4,
                      shadowBlur: 15,
                      shadowColor: "#E1CD0C",
                      color: "#000E65",
                    }
                }
              },
              {
                name: "林心如",
                symbolSize: 80,
                draggable: false,
                value: [320, 30],
                id:"12",
                itemStyle: {
                    normal: {
                      borderColor: "#E1CD0C",
                      borderWidth: 4,
                      shadowBlur: 15,
                      shadowColor: "#E1CD0C",
                      color: "#000E65",
                    }
                }
              },
            ],

            links: [
              {
                source: "1",
                target: "3",
                value: "父子",
                lineStyle: {
                    normal: {
                        curveness: 0.2,
                    }
                }
              },
              {
                source: "3",
                target: "4",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: 0.2,
                    }
                },
              },
              {
                source: "4",
                target: "2",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: 0.2,
                    }
                },
              },
              {
                source: "1",
                target: "5",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: 0.1,
                    }
                },
              },
              
              {
                source: "5",
                target: "6",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: 0.1,
                    }
                }
              },
              {
                source: "6",
                target: "2",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: 0.1,
                    }
                }
              },
              {
                source: "1",
                target: "7",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: 0,
                    }
                }
              },
              {
                source: "7",
                target: "8",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: 0,
                    }
                }
              },

              {
                source: "8",
                target: "2",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: 0,
                    }
                }
              },
              {
                source: "1",
                target: "9",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: -0.1,
                    }
                }
              },
              {
                source: "9",
                target: "10",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: -0.1,
                    }
                }
              },
              {
                source: "10",
                target: "2",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: -0.1,
                    }
                }
              },

              {
                source: "1",
                target: "11",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: -0.2,
                    }
                }
              },
              {
                source: "11",
                target: "12",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: -0.2,
                    }
                }
              },
              {
                source: "12",
                target: "2",
                value: "朋友",
                lineStyle: {
                    normal: {
                        curveness: -0.2,
                    }
                }
              },
            ]
          }
        ]
      };
    }
  }
};
</script>

<style scoped lang="scss">
.echartLayout {
  height: 100%;
  width: 100%;
  margin: auto;
  // position: absolute;
  // top: 100px;
  // left: 5%;
  #container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #attrBox {
    width: 200px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 0;
    color: #e1cd0c;
    background: #262626;
    margin-top: -200px;
    border-radius: 4px;
    p {
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