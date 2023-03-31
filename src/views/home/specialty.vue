<template>
  <div style="background-color: #fff; border-radius: 8px;">

    <div class="box">

      <el-button 
          type="success" 
          @click="onAdd" 
          icon="el-icon-circle-plus-outline"
          class="onAdd">添加信息</el-button>


      <el-input
        class="sear-input"
        placeholder="请输入要查找的专业"
        v-model="sear"
        clearable>
      </el-input>

    </div>

    <div class="dialog">

      <el-dialog    
          title="添加专业课信息"
          :visible.sync="dialogVisible"
          :modal="false"
          width="35%"
          center="center">
          <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="demo-ruleForm" style="overflow: hidden;">
              <el-form-item label="专业课Id:" prop="id"  required>
                  <el-input placeholder="请输入id,格式为：数字" v-model="form.id"></el-input>
              </el-form-item>

              <el-form-item label="专业课名称:" prop="name" required>
                  <el-input placeholder="请输入专业课名称" v-model="form.name"></el-input>
              </el-form-item>

              <el-form-item label="系部:" prop="department" required>
                  <el-select v-model="form.department" placeholder="请选择所在系部">
                      <el-option label="信息系" value="信息系"></el-option>
                      <el-option label="机电系" value="机电系"></el-option>
                      <el-option label="创业系" value="创业系"></el-option>
                      <el-option label="服务系" value="服务系"></el-option>
                      <el-option label="制造系" value="制造系"></el-option>
                      <el-option label="交通系" value="交通系"></el-option>
                      <el-option label="经贸系" value="经贸系"></el-option>
                  </el-select>
              </el-form-item>

              <el-form-item label="年级:" prop="grade" required>
                  <el-select v-model="form.grade" placeholder="请选择要教学的年级">
                      <el-option label="2019级" value="2019级"></el-option>
                      <el-option label="2020级" value="2020级"></el-option>
                      <el-option label="2021级" value="2021级"></el-option>
                      <el-option label="2022级" value="2022级"></el-option>
                  </el-select>
              </el-form-item>

              <el-form-item label="专业课描述:" prop="desc" required>
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>

               <el-form-item>
                 <el-button type="primary"  @click="addForm('form')">立即创建</el-button>
                 <el-button @click="resetForm('form')">重置</el-button>
               </el-form-item>
          </el-form>
      </el-dialog>

      <el-dialog    
      title="修改专业课信息"
          :visible.sync="upddialogVisible"
          :modal="false"
          width="35%"
          center="center">
          <el-form ref="updform" :model="updform" :rules="updrules" label-width="100px" class="demo-ruleForm" style="overflow: hidden;">

              <el-form-item label="专业课名称:" prop="name" updrequired>
                  <el-input placeholder="请输入专业课名称" v-model="updform.updname"></el-input>
              </el-form-item>

              <el-form-item label="系部:" prop="department" updrequired>
                  <el-select v-model="updform.upddepartment" placeholder="请选择所在系部">
                      <el-option label="信息系" value="信息系"></el-option>
                      <el-option label="机电系" value="机电系"></el-option>
                      <el-option label="创业系" value="创业系"></el-option>
                      <el-option label="服务系" value="服务系"></el-option>
                      <el-option label="制造系" value="制造系"></el-option>
                      <el-option label="交通系" value="交通系"></el-option>
                      <el-option label="经贸系" value="经贸系"></el-option>
                  </el-select>
              </el-form-item>

              <el-form-item label="年级:" prop="grade" updrequired>
                  <el-select v-model="updform.updgrade" placeholder="请选择要教学的年级">
                      <el-option label="2019级" value="2019级"></el-option>
                      <el-option label="2020级" value="2020级"></el-option>
                      <el-option label="2021级" value="2021级"></el-option>
                      <el-option label="2022级" value="2022级"></el-option>
                  </el-select>
              </el-form-item>

              <el-form-item label="专业课描述:" prop="desc" updrequired>
                <el-input type="textarea" v-model="updform.upddesc"></el-input>
              </el-form-item>

              <el-form-item>
                 <el-button type="primary"  @click="updForm('updform')">立即修改</el-button>
                 <el-button @click="resetupdForm('updform')">重置</el-button>
               </el-form-item>
          </el-form>
      </el-dialog>

    </div>

    <div>
      <el-table
        style="width: 100%; overflow: auto; z-index: 1;"
        border
        :header-cell-style="{background:'rgb(236, 247, 255)',color:'#606266'}"
        align="center"
        type="primary"
        empty-text="暂无数据"
        highlight-current-row
        :data="filterData">
        <el-table-column
            prop="department"
            label="所属系部"
            align="center">
        </el-table-column>
        <el-table-column 
            align="center"
            width="150" 
            prop="id"         
            label="专业课id">
        </el-table-column>
        <el-table-column 
            align="center" 
            prop="name"       
            label="专业课名称">
        </el-table-column>
        <el-table-column 
            align="center" 
            prop="grade"       
            label="年级">
        </el-table-column>
        <el-table-column 
            align="center" 
            prop="desc" 
            label="专业课描述">
        </el-table-column>
        <el-table-column
            width="220"
            align="center" 
            label="操作"
            fixed="right">
          <template slot-scope="scope">
            <el-button
              type="danger"
              @click.native.prevent="deleteRow(scope.row.id, fulltabledata)"
              icon="el-icon-delete"
              size="mini">
              删除
            </el-button>
  
            <el-button 
              type="primary" 
              @click="onupd(scope.row.id,fulltabledata)"
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
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        numrule:/[0-9]\d*/,   //数字正则
        fulltabledata:[],
        found:true,
        dialogVisible:false,    //添加的弹出框  默认false不显示
        upddialogVisible:false,   //修改的弹出框  默认false不显示
        pageSize:14,    // 每页显示多少行数据
        currentPage:1,  // 当前页码
        loading: false,   //加载动画
        sear:'',      //查询
        form: {   //添加的表单数据绑定
          id:null,  //专业课id
          name: '',   //专业课名称
          department: '',   //所选系部
          grade: '',    //所教学的年级
          desc: '',   //专业课描述
        },
        rules: {    //添加的表单校验规则
          name: [
            { required: true, message: '请输入专业名字', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          id: [
            { required: true, message: '请输入专业id', trigger: 'blur' },
            { max:2, message: '最大长度在 2 个', trigger: 'blur' }
          ],
          department: [
            { required: true, message: '请选择所在系部', trigger: 'change' }
          ],
          grade: [
            { required: true, message: '请选择所教学的年级', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请简单描述专业课', trigger: 'blur' }
          ],
        },
        updform: {   //修改的表单数据绑定
          updname:'',   //专业课名称
          upddepartment:'',   //所选系部
          updgrade:'',    //所教学的年级
          upddesc:'',   //专业课描述 }
        },
        updrules: {    //修改的表单校验规则
          updname: [
            { updrequired: true, message: '请输入专业名字', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          upddepartment: [
            { updrequired: true, message: '请选择所在系部', trigger: 'change' }
          ],
          updgrade: [
            { updrequired: true, message: '请选择所教学的年级', trigger: 'change' }
          ],
          upddesc: [
            { updrequired: true, message: '请简单描述专业课', trigger: 'blur' }
          ],
        },
        tableData: [    //原表格数据
          {
            id:1,
            grade:'2019级',
            department:'信息系',
            name: "计算机应用",
            desc:"了解计算机原理与软硬件"
          },{
            id:2,
            grade:'2020级',
            department:'信息系',
            name: "Web前端开发",
            desc:"网页编程"
          },{
            id:3,
            grade:'2019级',
            department:'信息系',
            name: "div+css网页开发",
            desc:"繁琐的div与琢磨不透的css"
          },{
            id:4,
            grade:'2021级',
            department:'创业系',
            name: "母猪护理",
            desc:"养猪发家致富"
          },{
            id:5,
            grade:'2020级',
            department:'信息系',
            name: "Photoshop",
            desc:"图像剪辑"
          },{
            id:6,
            grade:'2022级',
           department:'机电系',
            name: "电梯维护与安装",
            desc:"电梯的维护与如何安装"
          },{
            id:7,
            grade:'2022级',
            department:'服务系',
            name: "静音狼如何一把刀6个",
            desc:"专业杀手更好刀一点"
          },{
            id:8,
            grade:'2021级',
            department:'创业系',
            name: "畜牧养护与繁殖",
            desc:"动物如何交配与护理"
          }
        ],
      };
    },
    methods: {
      getSpec(){
         // 从 localStorage 中读取数据
         if (localStorage.getItem('specialtydata')) {
            this.fulltabledata = JSON.parse(localStorage.getItem('specialtydata'))
         } else {
         // 如果 localStorage 中没有数据，则将当前数据写入 localStorage
             localStorage.setItem('specialtydata', JSON.stringify(this.tableData))
             this.fulltabledata = this.tableData
          }
      },
      onAdd(){    //展开添加信息
        this.dialogVisible = true
        if(this.$refs['form'] !== undefined) {//再次打开 “添加信息” 后清除表单数据
            this.$refs['form'].resetFields();
        }
      },
      handleCurrentChange(val){   // 页面切换
        this.currentPage = val;this.loading = true
        setTimeout(() => {
            this.loading = false
        }, 200);
      },
      deleteRow(id){   //删除操作
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });

          const index = this.fulltabledata.findIndex(item => item.id === id)
          if (index !== -1) {
            this.fulltabledata.splice(index, 1)
            localStorage.setItem('specialtydata', JSON.stringify(this.fulltabledata))
          }

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      addForm(formName){
        this.found = true
        this.$refs[formName].validate((valid) => {    
          //对整个表单进行校验的方法，参数为一个回调函数。
          //该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
          if (valid) {
            const formList = {    //将表单里的值填进来
              id:this.form.id,
              name:this.form.name,
              department:this.form.department,
              grade:this.form.grade,
              desc:this.form.desc,
            }
            if(this.found){   //id判断
              this.fulltabledata = JSON.parse(localStorage.getItem('specialtydata'))

              if(!isNaN(this.form.id) ){

                  if(this.found){
                    this.fulltabledata.forEach((v) => {
                    if(this.form.id == v.id){
                        this.$message.error("有相同专业id，请检查是否输入正确！")
                        this.found = false
                      }
                    })
                  }

              }else{
                this.found = false
                this.$message.error("输入的专业id格式不正确！")
              }

              if(this.found){   //专业课名称判断
                if(this.numrule.test(this.form.name)){
                  this.$message.error("输入的专业课名称格式不正确！")
                  this.found = false
                }else{
                  this.found = true
                }
              }
            }
            if(this.found){    //found一路畅通为true 则执行添加信息操作
                  this.fulltabledata = JSON.parse(localStorage.getItem('specialtydata'))
                  this.fulltabledata.push(formList)
                  localStorage.setItem('specialtydata',JSON.stringify(this.fulltabledata))
                  this.dialogVisible = false;
                  this.$message.success("添加成功")
              }
          }
        });
      },
      onupd(upddata){    //展开修改信息
        const index = this.fulltabledata.find(item => {
          return item.id == upddata
        })
        this.updform.updid = index.id
        this.updform.updname = index.name
        this.updform.upddepartment = index.department
        this.updform.updgrade = index.grade
        this.updform.upddesc = index.desc
        this.upddialogVisible = true
      },
      updForm(){    //修改信息
        this.found = true
        if(this.found){   //专业课名称判断
            if(this.numrule.test(this.updform.updname)){
                this.$message.error("输入的专业课名称格式不正确！")
                this.found = false
            }else{
              this.found = true
            }
        }
        if(this.found){
          this.fulltabledata.forEach((v,i) =>{
            if(v.id==this.updform.updid){
                v.name = this.updform.updname
                v.department = this.updform.upddepartment
                v.grade = this.updform.updgrade
                v.desc = this.updform.upddesc
                console.log(v.id);
            }
          })
          localStorage.setItem('specialtydata',JSON.stringify(this.fulltabledata))
          
          this.upddialogVisible = false
        }
      },
    },
    computed:{
      filterData(){
          return this.fulltabledata.filter(p => p.name.includes(this.sear));
      },
    },
    created() {     //初始加载动画，1000毫秒后关闭
      this.getSpec()
      this.loading = true
        setTimeout(() => {
            this.loading = false
        }, 1000);
    },
  };
</script>


<style>

.box{
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: relative;
  z-index: 1;
  border-bottom:1px solid #ccc;
}

.sear-input{
  width: 250px !important;
  position: absolute !important;
  top: 0px !important;
  right: 15px !important;
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