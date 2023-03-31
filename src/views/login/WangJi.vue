<template>
<div>

  <div class="bigbox">

    <div class="left">
      <div class="ZHMM">
        <span>找回密码</span>
      </div>
      <div class="form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <div class="form-item">
            <el-form-item prop="admin">
              <el-input
                autocomplete="off" 
                placeholder="请输入账号"
                v-model="ruleForm.admin">
                <i slot="prefix" class="el-icon-user-solid el-icon"></i>
              </el-input>
            </el-form-item>
          </div>
          <div class="form-item">
            <el-form-item prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入新的密码"></el-input>
            </el-form-item>
          </div>
          <div class="form-item">
            <el-form-item prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="再次输入新的密码"></el-input>
            </el-form-item>
          </div>
          <div class="submit">
            <el-form-item>
              <el-button type="primary" class="sub" @click.native="submitForm('ruleForm')">提交</el-button>
              <el-button class="res" @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>

    </div>

    <div class="right">

      <div class="right-box">
        <p style="font-size: 28px;">你想起密码了？</p>
        <p style="font-size: 26px;">太棒了！</p>
        <p style="font-size: 18px;">现在返回登录吧！</p>

        <div>
          <el-button 
          class="el-icon-back el-back-button" 
          @click.native="BackLogin()">&nbsp;&nbsp;Back!</el-button>
        </div>

      </div>

    </div>

  </div>
</div>
</template>

<script>
  export default {
    data() {
      var checkAdmin = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }else{
            if(this.ruleForm.admin != "admin"){
                alert("没有此账号")
            }else{
                callback();
            }

        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          admin: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          admin: [
            { validator: checkAdmin, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {    //提交表单
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let x = [{

                admin:this.ruleForm.admin,
                password:this.ruleForm.pass

            }]

            localStorage.setItem("user", JSON.stringify(x));
            this.$message.success("修改成功")
            setTimeout(() => {
              this.$router.replace('/')
            }, 600);
            
          } else {
            this.$message.error("看清楚再填，蠢蛋")
            return false;
          }
        });
      },
      resetForm(formName) {   //清空表单信息
        this.$refs[formName].resetFields();
      },
      BackLogin(){    //返回登录界面
        this.$router.replace('/')
      }
    }
  }
</script>

<style scoped>

  .bigbox{
    width: 850px;
    height: 600px;
    margin: auto;
    background-color: #fff;
    box-shadow: 0px 10px 40px -10px rgba(0,0,0,0.7);
    margin-top: 150px;
    border-radius: 20px;
  }

  .left{
    float: left;
    width: 57%;
    height: 100%;
  }
  
  .ZHMM{
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    margin-top: 70px;
  }

  .form{
    margin-top: 35px;
    text-align: center;
  }

 >>>.el-input__inner{
    width: 250px !important;
    box-shadow: 0 5px 10px #b4b4b4 !important;
    margin-right: 90px !important;
    position: relative;
  }

  >>>.el-input__suffix {
    margin-right: 75px;
  }

.form-item{
    margin-bottom: 50px;
  }
  .right{
    float: right;
    width: 43%;
    height: 100%;
    background: url('../../img/jb-1.jpg') no-repeat;
    border-radius: 20px;
  }

  .right-box{
    color: #fff;
    width: 100%;
    margin-top: 165px;
  }

  .right-box p{
    margin-bottom: 20px;
    margin-left: 20px;
  }

  .el-back-button{
    margin-left: 20px;
    border: 1 solid #fff;
    background-color: transparent;
    border-radius: 15px;
    color: #fff;
    font-size: 18px;
    transition: all 0.4s;
  }
  
  .el-back-button:hover{
    border: 1px solid #00a085;
    background-color: #00a085;
  }
  >>>.el-form-item__error{
    color: #F56C6C;
    font-size: 12px;
    line-height: 1;
    padding-top: 10px;
    position: absolute;
    top: 100%;
    left: 26px;
  }

  .el-icon{
    margin-top: 5px;
    margin-left: 27px;
  }

  .submit{
    margin-right: 90px;
  }
 
  .sub{
    width: 120px;
    font-size: 14px;
    color: #fff;
    border: 1px solid #fff;
    background-color: #00a085;
    border-radius: 15px;
    transition: all 0.4s;
  }

  .sub:hover{
    background-color: #028670;
  }

  .res{
    width: 90px;
    font-size: 14px;
    color: #000;
    border: 1px solid #000;
    background-color: transparent;
    border-radius: 15px;
    transition: all 0.4s;
  }

  .res:active{
    border-color: #00a085;
    background-color: #a5e4d9;
  }

  .res:hover{
    border: 1px solid rgb(226, 226, 226);
    background-color: rgb(226, 226, 226);
  }
</style>
