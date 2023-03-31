<template>
  <div class="header">

    <div class="hader-box">

      <div class="header-menu">
        校园学生管理
      </div>

      <!-- <div class="date">
        <span>{{ newDate }}</span>
      </div> -->

      <div class="right-box">

          <div class="right-avatar">
              <el-avatar :src="imgUrl"></el-avatar>
          </div>
        
        <div class="right-user">
          
          <el-dropdown trigger="click">

            

            <span class="el-dropdown-link">
              欢迎您，{{this.$store.state.userId}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>

            <el-dropdown-menu slot="dropdown">

              <el-dropdown-item>
                <span @click="goUrl" style="color: #000;">退出登录</span>
              </el-dropdown-item>
              
            </el-dropdown-menu>

          </el-dropdown>

        </div>

      </div>
    </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl:this.$store.state.img,
    }
    
  },
  methods:{
      goUrl(){
        window.location.replace('/')
      },
      
      // getTimer(){
      //     //获取当前时间并打印
      //     var _this = this;
      //     let yy = new Date().getFullYear();
      //     let mm = new Date().getMonth()+1;
      //     let dd = new Date().getDate();
      //     let hh = new Date().getHours();
      //     let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      //     let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      //     _this.gettime = yy+'/'+mm+'/'+dd+' '+hh+':'+mf+':'+ss;
      //     this.newDate = _this.gettime
      // }
  },

  // created(){  //实例生成后每1000毫秒执行一次
  //   this.timer = setInterval(() => {
  //     this.getTimer()
  //   }, 1000);
  // },
  // beforeDestroy: function () {    //实例销毁前清空计时器
  //   if (this.timer) {
  //     clearInterval(this.timer)
  //   }
  // },
  // mounted() {   //初始化页面完成后获取本地存储里的admin
  //   JSON.parse(localStorage.getItem('user')).forEach((value) => {
  //     this.userId = value.admin
  //   });
  // },
  created() {
    console.log(this.$store.state.userId);
  },
}
</script>

<style scoped>

.header{
  width: 100%;
  height: 75px;
  box-shadow: 0 5px 10px #b4b4b4;
  background-color: #242f42;
}
  .hader-box{
    height: 75px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
  }

  .right-box{
    width: 180px;
    height: 75px;
    float: right;
    position: relative;
    right: 0px;
    line-height: 75px;
  }


  .el-dropdown{
    color: #000;

  }

  .el-icon-arrow-down,.el-icon--right{
      cursor: pointer;
  }

  .right-avatar{
    float: left;
    margin-top: 15px;
  }

  .date{
    position: absolute;
    line-height: 61px;
    left: 10px;
    font-size: 16px;
    
  }

.el-dropdown-link{
    margin-left: 8px;
    color: #fff;
  }

  .header-menu{
    height: 75px;
    line-height: 75px;
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 5px;  
    background-color: #242f42;
    position: absolute;
    left: 15px;
  }
</style>