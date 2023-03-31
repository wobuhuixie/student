<template>
  <div class="body1">
     <div id="card">
       <div id="card-avatar">
          <div class="block"><el-avatar :size="95" :src="avatarUrl"></el-avatar></div>
       </div>

       <div id="welcome"><h1>WELCOME ADMIN</h1></div>

       <div id="input-bigbox">
         <div id="input-box">
            <el-input
              id="input1"
              placeholder="请输入账号"
              prefix-icon="el-icon-user"
              v-model="admin">
            </el-input>
         </div>

         <div id="input-box">
           <el-input
              id="input2"
              placeholder="请输入密码" 
              v-model="pass" 
              show-password 
              @keyup.native="sub"
              prefix-icon="el-icon-lock">
           </el-input>
         </div>
         <div class="WJMM_box">
        
          <span class="WJMM" @click="wangji">忘记密码<i class="el-icon-thumb"></i></span>
        
        </div>
       </div>

       <el-button @keyup.native="sub" id="login-button" @click="sub">登&nbsp;&nbsp;录</el-button>
  
     </div>

  </div>
</template>

<script>

import avatarUrl from '../../img/avatar.png'

export default {
  data() {
    return {
      admin: '',
      pass: '',
      avatarUrl:avatarUrl,
      engrule:/^[a-zA-Z]{5}$/,   //5位英文正则
      userList:[],
      
    }
  },methods: {  
      sub(){
        var x = JSON.parse(localStorage.getItem('user'))
        if(this.admin.trim() == ""){
          this.$message.error("账号不能为空哦")
          return false
        }
        if(!this.engrule.test(this.admin)){
          this.$message.error("账号不能为中文或其他字符")  
        }
        else if(this.admin.trim() != 'admin'){
          this.$message.error("账号有误，请联系管理员") 
        }
        else if(this.pass.trim() == ""){
          this.$message.error("密码不能为空哦")
        }
        else if(this.pass != x[0].password){
          console.log(x.password)
          this.$message.error("密码错误")

        }
        else{ 
          //路由到‘/Info’的页面
          this.$router.push('/Info')
          //并提示登录成功    (后续连接后端测试200成功才显示)
          this.$message({
            message: '登录成功',
            type: 'success',
            duration:1500
          });
        }
      },
      wangji(){
        this.$router.push('/WangJi')
      },
      getUser(){
        //  // 从 localStorage 中读取数据
        this.userList = JSON.parse(localStorage.getItem('user')) || [{admin:'admin',password:'pass'}]
        localStorage.setItem('user', JSON.stringify(this.userList))
        //  if (localStorage.getItem('user')) {
        //     this.userList = JSON.parse(localStorage.getItem('user'))
        //  } else {
        //  // 如果 localStorage 中没有数据，则将当前数据写入 localStorage
        //      localStorage.setItem('user', JSON.stringify(this.userList))
        //   }
      },
      disableBrowserBack() {
        history.pushState(null, null, document.URL);
    }
  },
    mounted () {
      // 禁用浏览器返回键
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.disableBrowserBack);
  },

  destroyed() {
    // 清除popstate事件 否则会影响到其他页面
    window.removeEventListener("popstate", this.disableBrowserBack, false);
  },
  created() {
    this.getUser()
  },
}

</script>

<style>

  @import '../../style/login.css';

</style>

<style scoped>

>>>.el-input__inner{
  border: 0;
  border-radius: 0;
  font-size: 14px;
  text-indent: 0.3em;
  border-bottom: 1px solid darkgray;
  background-color: transparent;
}
>>>.el-input__inner:focus{
  border: 0;
  border-bottom: 1px solid #08ccab;
  border-radius: 0;
}

.WJMM_box{

  width: 300px;text-align: right;
  margin-top: 10px;

}
.WJMM{


  font-size: 12px;color:rgb(196, 196, 196);
  cursor:pointer
  

}

.WJMM:hover{

  font-size: 12px;color:#08ccab;
  cursor:pointer

}

</style>
