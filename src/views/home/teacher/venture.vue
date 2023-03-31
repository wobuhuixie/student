<template>
    <!-- 创业系 -->
    <div style="background-color: #fff; border-radius: 8px;">
      <!-- 筛选过滤 -->
      <div class="filter">
  
        <!-- 添加信息弹出框 -->
        <el-dialog    
            title="添加教师信息"
            :visible.sync="dialogVisible"
            :modal="false"
            width="35%"
            center="center">
            <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="demo-ruleForm" style="overflow: hidden;">
                <el-form-item label="工号" prop="vennum"   required>
                    <el-input placeholder="请输入工号,格式为:cy01" v-model="form.vennum"></el-input>
                </el-form-item>
  
                <el-form-item label="姓名" prop="name"   required>
                    <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
                </el-form-item>
  
                <el-form-item label="年龄" prop="age"   required>
                    <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
                </el-form-item>
  
                <el-form-item label="所在系" prop="department">
                    <el-select v-model="form.department" placeholder="请选择所在系部">
                        <el-option label="创业系" value="创业系"></el-option>
                    </el-select>
                </el-form-item>
  
                <el-form-item label="入职时间" required>
                  <el-col :span="11">
  
                    <el-form-item prop="date">
                      <el-date-picker 
                        type="date" 
                        format="yyyy年MM月dd日"
                        value-format="yyyy-MM-dd"
                        v-model="form.date" 
                        placeholder="选择日期" 
                        style="width: 170px">
                      </el-date-picker>
                    </el-form-item>
  
                  </el-col>
                </el-form-item>
  
                <el-form-item label="学历" prop="degree" required>
                    <el-select v-model="form.degree" placeholder="当前学历">
                        <el-option label="大专" value="大专"></el-option>
                        <el-option label="本科" value="本科"></el-option>
                        <el-option label="硕士" value="硕士"></el-option>
                        <el-option label="博士" value="博士"></el-option>
                    </el-select>
                </el-form-item>
  
                <el-form-item label="职务" prop="office">
                    <el-select v-model="form.office" placeholder="职务">
                        <el-option label="主任" value="主任"></el-option>
                        <el-option label="副主任" value="副主任"></el-option>
                        <el-option label="书记" value="书记"></el-option>
                        <el-option label="副书记" value="副书记"></el-option>
                        <el-option label="组长" value="组长"></el-option>
                        <el-option label="语文老师" value="语文老师"></el-option>
                        <el-option label="数学老师" value="数学老师"></el-option>
                        <el-option label="英语老师" value="英语老师"></el-option>
                        <el-option label="机房管理员" value="机房管理员"></el-option>
                    </el-select>
                </el-form-item>
                 
                 <el-form-item label="性别" prop="gender">
                   <el-radio-group v-model="form.gender">
                     <el-radio label="男"></el-radio>
                     <el-radio label="女"></el-radio>
                   </el-radio-group>
                 </el-form-item>
  
                 <el-form-item>
                   <el-button type="primary"  @click="addForm('form')">立即创建</el-button>
                   <el-button @click="resetForm('form')">重置</el-button>
                 </el-form-item>
            </el-form>
        </el-dialog>
  
        <!-- 修改信息弹出框 -->
        <el-dialog    
            title="修改教师信息"
            :visible.sync="upddialogVisible"
            :modal="false"
            width="35%"
            center="center">
            <el-form ref="updform" :model="updform" :rules="updrules" label-width="100px" class="demo-ruleForm" style="overflow: hidden;">
                <el-form-item label="工号" prop="vennum"   updrequired>
                    <el-input placeholder="请输入工号,格式为:cy01" v-model="updform.updvennum"></el-input>
                </el-form-item>
  
                <el-form-item label="姓名" prop="name"   updrequired>
                    <el-input placeholder="请输入姓名" v-model="updform.updname"></el-input>
                </el-form-item>
  
                <el-form-item label="年龄" prop="age"   updrequired>
                    <el-input placeholder="请输入年龄" v-model="updform.updage"></el-input>
                </el-form-item>
  
                <el-form-item label="所在系" prop="department">
                    <el-select v-model="updform.upddepartment" placeholder="请选择所在系部">
                        <el-option label="创业系" value="创业系"></el-option>
                        <!-- <el-option label="机电系" value="mechatronic"></el-option>
                        <el-option label="创业系" value="venture"></el-option>
                        <el-option label="服务系" value="service"></el-option>
                        <el-option label="制造系" value="fabrication"></el-option>
                        <el-option label="交通系" value="traffic"></el-option>
                        <el-option label="经贸系" value="finance"></el-option> -->
                    </el-select>
                </el-form-item>
  
                <el-form-item label="入职时间" updrequired>
                  <el-col :span="11">
  
                    <el-form-item prop="date">
                      <el-date-picker 
                        type="date" 
                        format="yyyy年MM月dd日"
                        value-format="yyyy-MM-dd"
                        v-model="updform.upddate" 
                        placeholder="选择日期" 
                        style="width: 170px">
                      </el-date-picker>
                    </el-form-item>
  
                  </el-col>
                </el-form-item>
  
                <el-form-item label="学历" prop="degree" updrequired>
                    <el-select v-model="updform.upddegree" placeholder="当前学历">
                        <el-option label="大专" value="大专"></el-option>
                        <el-option label="本科" value="本科"></el-option>
                        <el-option label="硕士" value="硕士"></el-option>
                        <el-option label="博士" value="博士"></el-option>
                    </el-select>
                </el-form-item>
  
                <el-form-item label="职务" prop="office">
                    <el-select v-model="updform.updoffice" placeholder="职务">
                        <el-option label="主任" value="主任"></el-option>
                        <el-option label="副主任" value="副主任"></el-option>
                        <el-option label="书记" value="书记"></el-option>
                        <el-option label="副书记" value="副书记"></el-option>
                        <el-option label="组长" value="组长"></el-option>
                        <el-option label="语文老师" value="语文老师"></el-option>
                        <el-option label="数学老师" value="数学老师"></el-option>
                        <el-option label="英语老师" value="英语老师"></el-option>
                        <el-option label="机房管理员" value="机房管理员"></el-option>
                    </el-select>
                </el-form-item>
                 
                 <el-form-item label="性别" prop="gender">
                   <el-radio-group v-model="updform.updgender">
                     <el-radio label="男"></el-radio>
                     <el-radio label="女"></el-radio>
                   </el-radio-group>
                 </el-form-item>
  
                 <el-form-item>
                   <el-button type="primary"  @click="updForm('updform')">立即修改</el-button>
                   <el-button @click="resetupdForm('updform')">重置</el-button>
                 </el-form-item>
            </el-form>
        </el-dialog>
  
      </div>
  
      <!-- 添加、查询、重置等... -->
      <div class="box">
  
        <el-button 
          type="success" 
          @click="onAdd" 
          icon="el-icon-circle-plus-outline"
          class="onAdd">添加信息</el-button>

      <el-button
        type="primary"
        class="reset-button"
        icon="el-icon-refresh"
        @click.native.prevent="reset">重置</el-button>
  
        <el-input
          class="sear-input"
          placeholder="请输入要查找的老师"
          v-model="sear"
          clearable>
        </el-input>
      </div>
  
      <!-- 表格数据 -->
      <el-table
        style=" overflow: hidden; z-index: 1;"
        border
        :header-cell-style="{backgroundColor:'rgb(236, 247, 255)',color:'#606266'}"
        v-loading="loading"
        align="center"
        type="primary"
        empty-text="暂无数据"
        highlight-current-row
        :data="filterData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)">
        <el-table-column
            prop="id"
            label="教师id"
            align="center">
        </el-table-column>
        <el-table-column 
            align="center"
            prop="vennum"        
            label="工号">
        </el-table-column>
        <el-table-column 
            align="center" 
            prop="department"         
            label="所在系">
        </el-table-column>
        <el-table-column 
            align="center" 
            prop="office"       
            label="职务"
            :filters="[{text:'主任',value:'主任'},{text:'副主任',value:'副主任'},{text:'组长',value:'组长'},]"
            :filter-method="filterHandler">
        </el-table-column>
        <el-table-column 
            align="center" 
            prop="name" 
            label="姓名">
        </el-table-column>
        <el-table-column 
            align="center" 
            prop="gender" 
            label="性别">
        </el-table-column>
        <el-table-column 
            align="center"     
            prop="age" 
            label="年龄">
        </el-table-column>
        <el-table-column 
            align="center"     
            prop="date" 
            label="入职时间">
        </el-table-column>
        <el-table-column 
            align="center" 
            prop="degree" 
            label="学历">
        </el-table-column>
        <el-table-column
            width="220"
            align="center" 
            label="操作"
            fixed="right">
          <template slot-scope="scope">
            <el-button
              type="danger"
              @click.native.prevent="deleteRow(scope.row.vennum, fulltabledata)"
              icon="el-icon-delete"
              size="mini">
              删除
            </el-button>
  
            <el-button 
              type="primary" 
              @click="onupd(scope.row.vennum,fulltabledata)"
              icon="el-icon-edit-outline"
              size="mini">
              修改
            </el-button>
          </template>
        </el-table-column>
      </el-table>
  
      <!-- 分页 -->
      <footer>
       <el-pagination  
          background
          :page-size="pageSize"
          :current-page="currentPage"
          @current-change="handleCurrentChange"
          layout="total,prev, pager, next"    
          :total="filterData.length">
      </el-pagination>

    </footer>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sear: '',     //查询
        lastinfonum:'',
        found:true,     //中转
        isShow:false,
        dialogVisible: false,   //添加信息的弹出框
        upddialogVisible:false,   //修改信息的弹出框
        pageSize:13,    // 每页显示多少行数据
        currentPage:1,  // 当前页码
        fullWidth: document.documentElement.clientWidth,    //当前视窗宽度
        loading: false,   //加载动画
        fulltabledata:[],
        numrule:/[0-9]\d*/,     //只允许0-9的数字
        form: {   //表单数据绑定
            vennum:'',
            name: '',
            age:'',
            department: '',
            degree: '',
            office: '',
            date: '',
            gender: '',
        },
        updform: {   //表单数据绑定
          id:'',
          updvennum:'',
          updname: '',
          updage:'',
          upddepartment: '',
          upddegree: '',
          updoffice: '',
          upddate: '',
          updgender: '',
        },
        rules: {    //表单校验规则
            name: [
              { required: true, message: '请输入名字', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            age: [
              { required: true, message: '请输入年龄', trigger: 'blur' },
              { max:2, message: '长度在 2 字符', trigger: 'blur' }
            ],
            vennum: [
              { required: true, message: '请输入工号', trigger: 'blur' },
              { min: 4,max: 5, message: '长度在 4 到 5 字符', trigger: 'blur' }
            ],
            department: [
              { required: true, message: '请选择所在系部', trigger: 'change' }
            ],
            degree: [
              { required: true, message: '请选择学历', trigger: 'change' }
            ],
            office: [
              { required: true, message: '请选择职务', trigger: 'change' }
            ],
            date: [
              { required: true, message: '请选择日期', trigger: 'change' }
            ],
            gender: [
              { required: true, message: '请选择性别', trigger: 'change' }
            ],
        },
        updrules: {    //表单校验规则
            updname: [
              { updrequired: true, message: '请输入名字', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            updage: [
              { updrequired: true, message: '请输入年龄', trigger: 'blur' },
              { max:2, message: '长度在 2 字符', trigger: 'blur' }
            ],
            updvennum: [
              { updrequired: true, message: '请输入工号', trigger: 'blur' },
              { min: 4,max: 5, message: '长度在 4 到 5 字符', trigger: 'blur' }
            ],
            upddepartment: [
              { updrequired: true, message: '请选择所在系部', trigger: 'change' }
            ],
            upddegree: [
              { updrequired: true, message: '请选择学历', trigger: 'change' }
            ],
            updoffice: [
              { updrequired: true, message: '请选择职务', trigger: 'change' }
            ],
            upddate: [
              { updrequired: true, message: '请选择日期', trigger: 'change' }
            ],
            updgender: [
              { updrequired: true, message: '请选择性别', trigger: 'change' }
            ],
        },
        tableData: [    //原表格数据
          {
            id:1,
            vennum:'cy01',
            department:'创业系',
            office: "组长",
            name: "王小虎",
            gender: "男",
            age: "19",
            date:"2023-03-13",
            degree: "本科",
            teacher_admin: "123456",
            teacher_passworld:"123456"
          },{
            id:2,
            vennum:'cy02',
            department:'创业系',
            office: "组长",
            name: "张小五",
            gender: "女",
            age: "19",
            date:"2023-03-13",
            degree: "本科",
  
          },{
            id:3,
            vennum:'cy03',
            department:'创业系',
            office: "数学老师",
            name: "李大壮",
            gender: "男",
            age: "19",
            date:"2023-03-13",
            degree: "本科",
  
          },{
            id:4,
            vennum:'cy04',
            department:'创业系',
            office: "主任",
            name: "赵小四",
            gender: "男",
            age: "19",
            date:"2023-03-13",
            degree: "本科",
  
          },{
            id:5,
            vennum:'cy05',
            department:'创业系',
            office: "副主任",
            name: "谭大壮",
            gender: "男",
            age: "19",
            date:"2023-03-13",
            degree: "研究生",
  
          },{
            id:6,
            vennum:'cy06',
            department:'创业系',
            office: "副主任",
            name: "李晓辉",
            gender: "男",
            age: "19",
            date:"2023-03-13",
            degree: "研究生",
  
          },{
            id:7,
            vennum:'cy07',
            department:'创业系',
            office: "英语老师",
            name: "谭嘉健",
            gender: "男",
            age: "19",
            date:"2023-03-13",
            degree: "研究生",
  
          },{
            id:8,
            vennum:'cy08',
            department:'创业系',
            office: "语文老师",
            name: "张大三",
            gender: "男",
            age: "19",
            date:"2023-03-13",
            degree: "研究生",
  
          }
        ],
      };
    },methods: {
        deleteRow(vennum){   //删除操作
          this.$confirm('此操作将永久删除, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
  
            const index = this.fulltabledata.findIndex(item => item.vennum === vennum)
            if (index !== -1) {
              this.fulltabledata.splice(index, 1)
              localStorage.setItem('ventabledata', JSON.stringify(this.fulltabledata))
            }
  
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });          
          });
        },
        
        reset(){    //重置操作，清空搜索框
          this.sear = ""
          this.val = ""
          this.val2 = ""
          this.loading = true;
          
          setTimeout(() => {
            this.currentPage = 1
            this.getUser()
            this.loading = false;
          }, 700);
        },
        open(index) {   //打开弹窗显示数据
          let admin = this.tableData[index].teacher_admin
          let pass = this.tableData[index].teacher_passworld
          this.$alert('账号:'+' '+admin+' '+'密码:'+' '+pass, '教师账号密码', {
            confirmButtonText: '确定',
            
          });
        },
        handleCurrentChange(val){   // 页面切换
          this.currentPage = val;this.loading = true
          setTimeout(() => {
              this.loading = false
          }, 200);
        },
        filterHandler(value, row, column) {
          const property = column['property'];
          return row[property] === value;
        },
        onAdd(){    //展开添加信息
          this.dialogVisible = true
          if(this.$refs['form'] !== undefined) {//再次打开 “添加信息” 后清除表单数据
              this.$refs['form'].resetFields();
          }
        },
        onupd(upddata){    //展开修改信息
          const index = this.fulltabledata.find(item => {
            return item.vennum == upddata
          })
          this.updform.id = index.id
          this.updform.updvennum = index.vennum
          this.updform.updname = index.name
          this.updform.upddepartment = index.department
          this.updform.updoffice = index.office
          this.updform.updgender = index.gender
          this.updform.updage = index.age
          this.updform.upddate = index.date
          this.updform.upddegree = index.degree
          this.upddialogVisible = true
        },
        addForm(formName){  //添加信息
          this.found = true
          this.$refs[formName].validate((valid) => {    
            //对整个表单进行校验的方法，参数为一个回调函数。
            //该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
            if (valid) {
              const formList = {    //将表单里的值填进来
                id:'',
                vennum:this.form.vennum,
                department:this.form.department,
                office:this.form.office,
                name:this.form.name,
                gender:this.form.gender,
                age:this.form.age,
                date:this.form.date,
                degree:this.form.degree,
              }
              if(this.found){   //工号判断
                this.fulltabledata = JSON.parse(localStorage.getItem('ventabledata'))
  
                if(this.form.vennum.substring(0,2) === "cy" && !isNaN(this.form.vennum.substring(2,4)) ){
  
                    if(this.found){
                      this.fulltabledata.forEach((v) => {
                      if(this.form.vennum == v.vennum){
                          this.$message.error("有相同工号，请检查是否输入正确！")
                          this.found = false
                        }
                      })
                    }
  
                }else{
                  this.found = false
                  this.$message.error("输入的工号格式不正确！")
                }
                if(this.found){   //年龄判断
                    if(!this.numrule.test(this.form.age)){
                      this.$message.error("输入的年龄格式不正确！")
                      this.found = false
                    }else if(this.form.age < 18 || this.form.age > 65){
                      this.$message.error("输入的年龄格式不正确！")
                      this.found = false
                    }else{
                      this.found = true
                    }
                }
                if(this.found){   //姓名判断
                  if(this.numrule.test(this.form.name)){
                    this.$message.error("输入的姓名格式不正确！")
                    this.found = false
                  }else{
                    this.found = true
                  }
                }
              }
              if(this.found){    //found一路畅通为true 则执行添加信息操作
                    this.fulltabledata = JSON.parse(localStorage.getItem('ventabledata'))
                    let length = this.fulltabledata.length-1;
                    formList.id = this.fulltabledata[length].id + 1;
  
                    this.fulltabledata.push(formList)
                    localStorage.setItem('ventabledata',JSON.stringify(this.fulltabledata))
                    this.dialogVisible = false;
                    this.$message.success("添加成功")
                }
            }
          });
        },
        resetForm(formName) {     //重置信息
          //对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
          this.$refs[formName].resetFields();
        },
        updForm(){    //修改信息
          this.found = true
         
          this.fulltabledata.forEach((v,i) =>{
              if(v.id==this.updform.id){
                  v.vennum =  this.updform.updvennum
                  v.department = this.updform.upddepartment
                  v.office = this.updform.updoffice
                  v.name = this.updform.updname
                  v.age = this.updform.updage
                  v.gender = this.updform.updgender
                  v.date = this.updform.upddate
                  v.degree = this.updform.upddegree
              }
            })
            localStorage.setItem('ventabledata',JSON.stringify(this.fulltabledata))
            this.upddialogVisible = false
        },
        resetupdForm(formName){     //重置修改信息
          this.$refs[formName].resetFields();
        },
        getUser(){
           // 从 localStorage 中读取数据
           if (localStorage.getItem('ventabledata')) {
              this.fulltabledata = JSON.parse(localStorage.getItem('ventabledata'))
           } else {
           // 如果 localStorage 中没有数据，则将当前数据写入 localStorage
               localStorage.setItem('ventabledata', JSON.stringify(this.tableData))
               this.fulltabledata = this.tableData
            }
         },
      },
  
    computed:{
      filterData(){
          return this.fulltabledata.filter(p => p.name.includes(this.sear));
      },
    },
      created() {     //初始加载动画，1000毫秒后关闭
        this.getUser()
      },
  }
  </script>
  
  <style scoped>
  .box{
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: relative;
    z-index: 1;
    border-bottom:1px solid #ccc;
  }
  
  .sear-input{
    width: 250px;
    position: absolute;
    right: 15px;
  }
  
  .reset-button{
    position: absolute;
    right: 270px;
    top: 5px;
  }
  
  footer{
   /*转为flex弹性盒布局*/
   display: flex;
   /*主轴上的对齐方式为居中*/
   justify-content: center;
   /*交叉轴上对齐方式为居中*/
   align-items: center;
   margin-top: 10px;
}
  
  .onAdd{
    position: absolute;
    left: 15px;
    top: 5px;
  }
  
  </style>