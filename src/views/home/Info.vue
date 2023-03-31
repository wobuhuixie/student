<template>
  	<div>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-card shadow="hover" class="mgb20" style="height: 800px">
					<div class="user-info">
						<el-avatar :size="110" :src="imgUrl" />
						<div class="user-info-cont">
							<div class="user-info-name">{{ this.$store.state.userId }}</div>
							<div>超级管理员</div>
						</div>
					</div>
					<div class="user-info-list">
						上次登录时间：
						<span>2023-3-29</span>
					</div>
					<div class="user-info-list">
						上次登录地点：
						<span>韶关</span>
					</div>

				</el-card>
			</el-col>
			<el-col :span="16">
				<el-row :gutter="20" class="mgb20">
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-1">
								<el-icon class="grid-con-icon el-icon-s-flag">
								</el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">
										<animate-number 
										duration="800" 
										from="0" 
										:to="Depfullnum" 
										ref="Depfullnum"  
										:key="Depfullnum" ></animate-number>
									</div>
									<div>系部总数</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-2">
								<el-icon class="grid-con-icon el-icon-user"></el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">
										<animate-number 
										duration="800" 
										from="0" 
										:to="Teafullnum" 
										ref="Teafullnum"  
										:key="Teafullnum" ></animate-number>
									</div>
									<div>教师数量</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-3">
								<el-icon class="grid-con-icon el-icon-s-custom"></el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">
										<animate-number 
										duration="800" 
										from="0" 
										:to="Stunum" 
										ref="Stunum"  
										:key="Stunum" ></animate-number>
									</div>
									<div>学生总人数</div>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
				<el-card shadow="hover" style="height: 403px">
					<template #header>
						<div class="clearfix">
							<span>待办事项</span>
							<el-button style="float: right;" text type="info">添加</el-button>
						</div>
					</template>

            <div v-for="o in 8" :key="o" class="text-item">
              {{'寄 ' + o }}
            </div>
				</el-card>
			</el-col>
		</el-row>
</div>
</template>

<script>

export default {
  	data() {
    	return {
      		imgUrl:this.$store.state.img,
      		Teafullnum:null,
	  		Stunum:null,
			Depfullnum:null,
			fulltabledata:null,
    	}
  	},
  	methods: {
    	getTeacherNum(){		//获取教师总人数
			const subjects = ['infonum', 'fabnum', 'finnum', 'mecnum', 'sernum', 'tranum', 'vennum'];
  			this.Teafullnum = subjects.reduce((accumulator, currentValue) => 
				accumulator + this.$store.state[currentValue], 0);
      	},
	  	getStudentnum(){		//获取学生总人数
			this.Stunum = this.$store.state.stunum
	  	},
      	getImgUrl(){		//获取图片路径
       	this.$store.state.imgUrl
      	},
	  	getDepfullnum(){
			this.Depfullnum = 7
	  	},
  	},
	mounted: function() {
		if (location.href.indexOf("#reloaded") == -1) {
			location.href = location.href + "#reloaded";
			location.reload();
		}
	},
  	created() {
      	this.getTeacherNum()
      	this.getImgUrl()
	  	this.getStudentnum()
	  	this. getDepfullnum()
  	}
}
</script>

<style scope>

.el-row {
	margin-bottom: 20px;
}

.grid-content {
	display: flex;
	align-items: center;
	height: 100px;
}

.grid-cont-right {
	flex: 1;
	text-align: center;
	font-size: 14px;
	color: #999;
}

.grid-num {
	font-size: 30px;
	font-weight: bold;
}

.grid-con-icon {
	font-size: 50px;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	padding-top: 23px;
	color: #fff;
}

.grid-con-1 .grid-con-icon {
	background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
	color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
	background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
	color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
	background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
	color: rgb(242, 94, 67);
}

.user-info {
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	border-bottom: 2px solid #ccc;
	margin-bottom: 20px;
}

.user-info-cont {
	padding-left: 50px;
	flex: 1;
	font-size: 14px;
	color: #999;
}

.user-info-cont div:first-child {
	font-size: 30px;
	color: #222;
}

.user-info-list {
	font-size: 14px;
	color: #999;
	line-height: 25px;
}


.mgb20 {
	margin-bottom: 20px;
}

.text-item{
	font-size: 16px;
	color: #000;
}

</style>