<template>
	<div class="notes">
   <div class="note_title">注释区域</div>
	 <div class="note_content">
		 <div class="explanation">
			 <div class="explanation_title">{{annotationInfo}}</div>
			 <div class="explanation_content">{{notesInfo.content}}</div>
		 </div>
		 <el-divider></el-divider>
		 <div class="links" v-for="(item,index) in linksList" :key="item.id">
			 <div class="links_title" @click="toLink(index)">{{item.title}}</div>
			 <div class="links_website">{{item.website}}</div>
			 <div class="links_content">{{item.content | snippet}}</div>
			 <el-divider></el-divider>
		 </div>
		 <div class="share">
			 <div class="share_title">分享到：</div>
			 <div class="share_icon">
					<div class="toQq" @click="shareTo('qq')">
						<img src="../assets/qq.png" alt="">
					</div>
					<div class="toQzone" @click="shareTo('qzone')">
						<img src="../assets/qzone.png" alt="">
					</div>
					<div class="toWechat" @click="shareTo('wechat')">
						<img src="../assets/wechat.png" alt="">
					</div>
					<div class="toSina" @click="shareTo('sina')">
						<img src="../assets/sina.png" alt="">
					</div>
			 </div>
			</div>
		 <div class="relevant_tags">
			 <div class="tag-group">
			 <span class="tag-title">相关标签：</span>
			 <div class="tagsName">
				<el-tag 
					v-for="item in items"
					:key="item.label"
					:type="item.type"
					effect="plain">
					{{ item.label }}
				</el-tag>
			 </div>
			 </div>
		 </div>
	 </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				notesInfo: {
					title: '持卡人',
					content: '所谓持卡人，就是办理卡片时所用证件的主人，比如张三用其身份证在甲银行柜台办理一张银行卡，则这张银行卡的持卡人就是张三，即使这张银行卡由李四拿着，那持卡人仍是张三，不会变成李四。该银行卡的业务办理，均视为张三办理，由此带来的相关义务也由张三承担。'
				},
				linksList: [
					{
						id:0,
						title: '信用卡丢了怎么补办？',
						website: 'https://zhidao.baidu.com',
						content: '持卡人应即时办理挂失。信用卡挂失后的盗用风险由银行承担，挂失前48小时内的非凭密码消费对河涸海干'
					},
					{
						id:1,
						title: '信用卡丢了怎么补办？',
						website: 'https://zhidao.baidu.com',
						content: '持卡人应即时办理挂失。信用卡挂失后的盗用风险由银行承担，挂失前48小时内的非凭密码消费对河涸海干'
					}
				],
				items: [
					{ type: '', label: '信用卡取现' },
					{ type: 'info', label: '信用卡分期还款' },
					{ type: 'info', label: '信用卡逾期' },
					{ type: 'info', label: '储蓄卡' },
					{ type: 'info', label: '储蓄卡挂失' }
				]
			}
		},
		props: {
            annotationInfo: {
				type: String,
				value: "",
				default: () => {
					return {}
				}
			}
		},
		filters: {
			snippet: function(value) {
        return value.slice(0,43) + "...";
			}
		},
		mounted() {
      
		},
		shareTo(stype) {
			var stit = '';
			var slink = '';
			var lk = '';
			//获取文章标题
		}
	}
</script>

<style lang="scss" scoped>
/deep/.notes {
	width: 26%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 8%;
	.note_title {
		line-height: 41px;
		font-size: 12px;
    color: #999999;
		display: inline-block;
		vertical-align: middle;
	}
	.note_content {
		width: 100%;
		min-height: 670px;
		padding-left: 20px;
	  padding-right: 22px;
		background: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.05);
	}
	.explanation_title {
		padding-top: 16px;
		font-size: 18px;
    color: #222222;
	}
	.explanation_content {
		padding-top: 10px;
		min-height: 20px;
		font-size: 12px;
    color: #666666;
    letter-spacing: 0;
    line-height: 20px;
	}
	.links {
		height: 125px;
		.el-divider--horizontal {
			left: 0;
		}
		.links_title {
			height: 19px;
			font-size: 14px;
			color: #222222;
			letter-spacing: 0;
		}
		.links_website {
			height: 16px;
			font-size: 12px;
			color: #999999;
			letter-spacing: 0;
		}
		.links_content {
			padding-top: 9px;
			font-size: 12px;
			color: #666666;
			letter-spacing: 0;
			line-height: 20px;
		}
	}
	.share {
		height: 100px;
    .share_title {
			width: 56px;
			height: 20px;
			font-size: 14px;
			padding-top: 5px;
		}
		.share_icon {
			height: 36px;
			.toQq {
				float: left;
				padding-top: 8px;
				padding-right: 8px;
			}
			.toQzone {
				float: left;
				padding: 8px;
			}
			.toWechat {
				float: left;
				padding: 8px;
			}
			.toSina {
				float: left;
				padding: 8px;
			}
		}
	}
	.relevant_tags {
		height: 120px;
		.tag-group {
			height: 120px;
      .tag-title{
				width: 70px;
				height: 20px;
				font-size: 14px;
			}
		.tagsName {
			padding-top: 10px;
			.el-tag {
				margin-right: 6px;
				margin-bottom: 10px;
				font-size: 13px;
			}
		}		
		}
	}
}
</style>