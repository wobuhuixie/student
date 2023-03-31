<template>
  <div>
    <!--  添加学生弹窗 -->
    <el-dialog
      title="添加学生信息"
      :visible.sync="dialogVisible"
      :modal="false"
      width="35%"
      center="center"
    >
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
        style="overflow: hidden"
      >
        <el-form-item label="学生学号" prop="学生学号">
          <el-input
            placeholder="请输入学号(建议用班级前缀来命名)"
            v-model="form.学生学号"
          ></el-input>
        </el-form-item>

        <el-form-item label="学生姓名" prop="学生姓名">
          <el-input placeholder="请输入姓名" v-model="form.学生姓名"></el-input>
        </el-form-item>

        <el-form-item label="学生年龄" prop="学生年龄">
          <el-input placeholder="请输入年龄" v-model="form.学生年龄"></el-input>
        </el-form-item>

        <el-form-item label="学生电话" prop="学生电话">
          <el-input
            placeholder="请输入手机号"
            v-model="form.学生电话"
          ></el-input>
        </el-form-item>

        <el-form-item label="学生性别" prop="学生性别">
          <el-radio-group v-model="form.学生性别">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="addForm('form')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--  修改学生弹窗 -->
    <el-dialog
      title="修改学生信息"
      :visible.sync="upddialogVisible"
      :modal="false"
      width="35%"
      center="center"
    >
      <el-form
        ref="upform"
        :model="upform"
        :rules="updrules"
        label-width="100px"
        class="demo-ruleForm"
        style="overflow: hidden"
      >
        <el-form-item label="学生学号" prop="修改学生学号">
          <el-input
            placeholder="请输入学号(建议用班级前缀来命名)"
            v-model="upform.修改学生学号"
          ></el-input>
        </el-form-item>

        <el-form-item label="学生姓名" prop="修改学生姓名">
          <el-input
            placeholder="请输入姓名"
            v-model="upform.修改学生姓名"
          ></el-input>
        </el-form-item>

        <el-form-item label="学生年龄" prop="修改学生年龄">
          <el-input
            placeholder="请输入年龄"
            v-model="upform.修改学生年龄"
          ></el-input>
        </el-form-item>

        <el-form-item label="学生电话" prop="修改学生电话">
          <el-input
            placeholder="请输入手机号"
            v-model="upform.修改学生电话"
          ></el-input>
        </el-form-item>

        <el-form-item label="学生性别" prop="修改学生性别">
          <el-radio-group v-model="upform.修改学生性别">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="updForm('upform')"
            >保存</el-button
          >
          <el-button @click="resetForm('upform')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--添加课室-->
    <el-dialog
      title="添加课室信息"
      :visible.sync="课室添加弹窗控制器"
      :modal="false"
      width="35%"
      center="center"
    >
      <el-form
        ref="班级表单"
        :model="班级表单"
        :rules="roomrules"
        label-width="100px"
        class="demo-ruleForm"
        style="overflow: hidden"
      >
        <el-form-item label="班级" prop="class">
          <el-input
            placeholder="请输入班级名称"
            v-model="班级表单.class"
          ></el-input>
        </el-form-item>

        <el-form-item label="所属系" prop="Department">
          <el-select v-model="班级表单.Department" placeholder="请选择所属系部">
            <el-option label="信息系" value="信息系"></el-option>
            <el-option label="机电系" value="机电系"></el-option>
            <el-option label="创业系" value="创业系"></el-option>
            <el-option label="服务系" value="服务系"></el-option>
            <el-option label="制造系" value="制造系"></el-option>
            <el-option label="交通系" value="交通系"></el-option>
            <el-option label="经贸系" value="经贸系"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班主任" prop="class_teacher">
          <el-select
            v-model="班级表单.class_teacher"
            :disabled="isDisabled"
            filterable
            placeholder="请选择班主任(请先选择系部)"
          >
            <el-option
              v-for="(item, index) in tec"
              :key="index"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课室" prop="class_room">
          <el-input
            placeholder="请输入课室名称"
            v-model="班级表单.class_room"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onroom_on('班级表单')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--修改课室-->
    <el-dialog
      title="修改课室信息"
      :visible.sync="课室修改弹窗控制器"
      :modal="false"
      width="35%"
      center="center"
    >
      <el-form
        ref="修改班级表单"
        :model="修改班级表单"
        :rules="updroomrules"
        label-width="100px"
        class="demo-ruleForm"
        style="overflow: hidden"
      >
        <el-form-item label="班级" prop="class">
          <el-input
            placeholder="请输入班级名称"
            v-model="修改班级表单.class"
          ></el-input>
        </el-form-item>

        <el-form-item label="所属系" prop="Department">
          <el-select
            v-model="班级表单.Department"
            placeholder="请选择所属系部"
          >
            <el-option label="信息系" value="信息系"></el-option>
            <el-option label="机电系" value="机电系"></el-option>
            <el-option label="创业系" value="创业系"></el-option>
            <el-option label="服务系" value="服务系"></el-option>
            <el-option label="制造系" value="制造系"></el-option>
            <el-option label="交通系" value="交通系"></el-option>
            <el-option label="经贸系" value="经贸系"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="班主任" prop="class_teacher">
          <el-select
            v-model="班级表单.class_teacher"
            :disabled="isDisabled"
            filterable
            placeholder="请选择班主任(请先选择系部)"
          >
            <el-option
              v-for="(item, index) in tec"
              :key="index"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课室" prop="class_room">
          <el-input
            placeholder="请输入课室名称"
            v-model="修改班级表单.class_room"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="updroom_upd('修改班级表单')">保存</el-button>
          <el-button @click="resetForm('修改班级表单')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  <div v-cloak>
    <transition name="fade">
      <div v-if="isif">
        <div>
          <el-button type="success" @click="onroom" icon="el-icon-circle-plus-outline">添加课室信息</el-button>
        </div>
        <div class="card_wrap">
          <div class="c_item" v-for="v in room" :key="v.class_id">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>班级:{{ v.class }}</span>
                <el-button
                  type="primary"
                  style="float: right; margin-top: 5px"
                  @click="点击详细按钮(v.class_id)"
                  icon="el-icon-edit-outline"
                  >详细</el-button
                >
                <el-button
                  type="danger"
                  style="float: right; margin-top: 5px; margin-right: 10px"
                  @click="roomdel(v.class_id)"
                  icon="el-icon-delete"
                  >删除</el-button
                >
              </div>
              <div class="text item">班主任：{{ v.class_teacher }}</div>
              <div class="text item">学生人数：{{ v.students_Number }}</div>
              <div class="text item">所在系部：{{ v.Department }}</div>
              <div class="text item">课室：{{ v.class_room }}</div>
            </el-card>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fades" appear>
      <div v-if="isiff"  style="background-color: #fff;">
        <div class="classtitle">
          <div>
            <h1>{{ detailed_room }}</h1>
          </div>
          <div>
            <span>{{ detailed_Department }}班主任：{{ detailed_teacher }}</span>
          </div>
        </div>
      

      <div style="margin:0 0 5px 15px; overflow: hidden;">
        <el-button @click="onAdd" type="success" icon="el-icon-circle-plus-outline">添加学生信息</el-button>
        <el-button type="warning" @click="updroom" icon="el-icon-edit">修改班级配置</el-button>

        <el-input
          class="sear-input"
          v-model="sear"
          placeholder="请输入要查找的学生"
          clearable>
        </el-input>

        <el-button
          type="primary"
          icon="el-icon-refresh-left"
          style="float: right; margin-right: 15px"
          @click="back_if"
          >返回上一页</el-button
        >
      </div>

      <div>
        <el-table
          style=" overflow: hidden; z-index: 1"
          border
          :header-cell-style="{
            background: 'rgb(236, 247, 255)',
            color: '#606266',
          }"
          align="center"
          type="primary"
          empty-text="暂无数据"
          highlight-current-row
          :data="filterData"
        >
          <el-table-column prop="学生学号" label="学生学号" align="center">
          </el-table-column>
          <el-table-column align="center" prop="学生姓名" label="学生姓名">
          </el-table-column>
          <el-table-column align="center" prop="学生性别" label="学生性别">
          </el-table-column>

          <el-table-column align="center" prop="学生年龄" label="学生年龄">
          </el-table-column>
          <el-table-column align="center" prop="学生电话" label="学生电话">
          </el-table-column>

          <el-table-column
            width="220"
            align="center"
            label="操作"
            fixed="right"
          >
            <template slot-scope="scope">
              <el-button
                type="danger"
                icon="el-icon-delete"
                @click.native.prevent="
                  deleteRow(scope.row.学生学号, detailed_students)
                "
                size="mini"
              >
                删除
              </el-button>

              <el-button
                type="primary"
                icon="el-icon-edit-outline"
                @click="onupd(scope.row.学生编号, detailed_students)"
                size="mini"
              >
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
            :total="detailed_students.length"
          >
          </el-pagination>
        </footer>
      </div>
      </div>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      骂人变量:0,
      isDisabled: true,
      // switch临时变量:"",
      tec: [], //用于获取教师信息
      str_engrule: /^[\u4e00-\u9fa5a-zA-Z0-9]+$/,
      numrule: /[0-9]\d*/,
      engrule:/[a-zA-Z]/,
      strrule: /[\u4e00-\u9fa5]/,
      iponerule:/[0-9-()()]{7,18}/,
      sear: "",
      isif: true,
      isiff: false,
      found: true,
      dialogVisible: false,
      upddialogVisible: false,
      课室添加弹窗控制器: false,
      课室修改弹窗控制器: false,
      pageSize: 8,
      currentPage: 1,
      临时学号: "",
      班级表单: {
        class_id: "", //班级id(自增)
        class: "", //班级名字
        class_teacher: "", //班主任
        students_Number: 0, //班级人数(计算属性)
        Department: "", //所属系部
        class_room: "", //课室
      },
      修改班级表单: {
        class_id: "", //班级id(自增)
        class: "", //班级名字
        class_teacher: "", //班主任
        students_Number: 0, //班级人数(计算属性)
        Department: "", //所属系部
        class_room: "", //课室
      },
      form: {
        //表单数据绑定
        学生姓名: "",
        学生性别: "",
        学生年龄: "",
        学生学号: "",
        学生电话: "",
      },
      upform: {
        //表单数据绑定
        修改学生班级编号: "",
        修改学生编号: "",
        修改学生姓名: "",
        修改学生性别: "",
        修改学生年龄: "",
        修改学生学号: "",
        修改学生电话: "",
      },
      room: [], //展示课室数据(用于获取本地存储的课室数据然后展示)
      initialize_room: [ //课室初始数
        {
          class_id: 1,
          class: "网络1951",
          class_teacher: "王大壮",
          students_Number: 0,
          Department: "信息系",
          class_room: "b204",
        },
        {
          class_id: 2,
          class: "网络666",
          class_teacher: "李晓丽",
          students_Number: 0,
          Department: "信息系",
          class_room: "b205",
        },
        {
          class_id: 3,
          class: "网络777",
          class_teacher: "牛代师",
          students_Number: 0,
          Department: "信息系",
          class_room: "b206",
        },
        {
          class_id: 4,
          class: "网络888",
          class_teacher: "王小虎",
          students_Number: 0,
          Department: "信息系",
          class_room: "b207",
        },
        {
          class_id: 5,
          class: "网络999",
          class_teacher: "李四",
          students_Number: 0,
          Department: "信息系",
          class_room: "b208",
        },
      ],
      detailed_id: "", //对应课室id
      detailed_room: "", //详细课室
      detailed_Department: "", //详细系部
      detailed_teacher: "", //详细班主任
      detailed_students_Number: "", //详细学生人数
      detailed_class_room: "", //详细教室名称
      detailed_students: [], //每个班级的学生列表
      tableData: [    //总学生初始数据
        
        {
          学生班级编号: 1,
          学生编号: 1,
          学生姓名: "1班1大壮",
          学生性别: "男",
          学生年龄: "18",
          学生学号: "WL195101",
          学生电话: "18300067845",
        },
        {
          学生班级编号: 1,
          学生编号: 2,
          学生姓名: "1班2大壮",
          学生性别: "男",
          学生年龄: "18",
          学生学号: "WL195102",
          学生电话: "18300067845",
        },
        {
          学生班级编号: 1,
          学生编号: 3,
          学生姓名: "1班3大壮",
          学生性别: "男",
          学生年龄: "18",
          学生学号: "WL195103",
          学生电话: "18300067845",
        },
        {
          学生班级编号: 1,
          学生编号: 4,
          学生姓名: "1班4大壮",
          学生性别: "男",
          学生年龄: "18",
          学生学号: "WL195104",
          学生电话: "18300067845",
        },
        {
          学生班级编号: 1,
          学生编号: 5,
          学生姓名: "1班5大牛",
          学生性别: "男",
          学生年龄: "18",
          学生学号: "WL195105",
          学生电话: "18300067845",
        },
        {
          学生班级编号: 2,
          学生编号: 6,
          学生姓名: "2班王大壮",
          学生性别: "男",
          学生年龄: "18",
          学生学号: "WL195106",
          学生电话: "18300067845",
        },
        {
          学生班级编号: 3,
          学生编号: 7,
          学生姓名: "3班王大壮",
          学生性别: "男",
          学生年龄: "18",
          学生学号: "WL195107",
          学生电话: "18300067845",
        },
      ],
      max_detailed_students: [], //总学生详细列表
      rules: {    //表单校验规则
        
        学生姓名: [
          { required: true, message: "请输入名字", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        学生年龄: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          { max: 2, message: "长度在 2 字符", trigger: "blur" },
        ],
        学生学号: [
          { required: true, message: "请输入学号", trigger: "blur" },
          { min: 7, max: 9, message: "长度在 7 到 9 字符", trigger: "blur" },
        ],
        学生电话: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确手机号", trigger: "blur" },
        ],
        学生性别: [
          { required: true, message: "请选择性别", trigger: "change" },
        ],
      },
      updrules: {    //修改表单校验规则
       
        修改学生姓名: [
          { required: true, message: "请输入名字", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        修改学生年龄: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          { max: 2, message: "长度在 2 字符", trigger: "blur" },
        ],
        修改学生学号: [
          { required: true, message: "请输入学号", trigger: "change" },
          { min: 7, max: 9, message: "长度在 7 到 9 字符", trigger: "change" },
        ],
        修改学生电话: [
          { required: true, message: "请输入手机号", trigger: "change" },
          { min: 11, max: 11, message: "请输入正确手机号", trigger: "change" },
        ],
        修改学生性别: [
          { required: true, message: "请选择性别", trigger: "change" },
        ],
      },
      roomrules: {
        class: [{ required: true, message: "请输入班级名称", trigger: "blur" },
        { min: 4, max: 7, message: "长度在 4 到 7 个字符并且包含中文和数字", trigger: "blur" },],
        Department: [
          { required: true, message: "请选择系部", trigger: "blur" },
        ],
        class_teacher: [
          { required: true, message: "请选择班主任", trigger: "blur" },
        ],
        class_room: [
          { required: true, message: "请输入课室门牌", trigger: "blur" },
          { min: 4, max: 4, message: "长度在4个字符并且包含英文和数字", trigger: "blur" },
        ],
      },
      updroomrules: {
        class: [{ required: true, message: "请输入班级名称", trigger: "blur" },
        { min: 4, max: 7, message: "长度在 4 到 7 个字符并且包含中文和数字", trigger: "blur" },],
        Department: [
          { required: true, message: "请输入系部", trigger: "blur" },
        ],
        class_teacher: [
          { required: true, message: "请输入班主任", trigger: "blur" },
        ],
        class_room: [
          { required: true, message: "请输入课室门牌", trigger: "blur" },
          { min: 4, max: 4, message: "长度在4个字符并且包含英文和数字", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    点击详细按钮(课室唯一值) {
      let 过滤出来的东西 = this.room.filter(
        (item) => item.class_id == 课室唯一值
      );
      this.isif = false;
      this.isiff = true;
      // console.log(过滤出来的东西);
      this.detailed_id = 过滤出来的东西[0].class_id;
      this.detailed_room = 过滤出来的东西[0].class;
      this.detailed_students_Number = 过滤出来的东西[0].students_Number;
      this.detailed_Department = 过滤出来的东西[0].Department;
      this.detailed_teacher = 过滤出来的东西[0].class_teacher;
      this.detailed_class_room = 过滤出来的东西[0].class_room;
      this.detailed_students = this.max_detailed_students.filter(
        (item) => item.学生班级编号 == 课室唯一值
      );
    },
    deleteRow(XSXH) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });

          const index = this.detailed_students.findIndex(
            (item) => item.学生学号 === XSXH
          );
          const max_index = this.max_detailed_students.findIndex(
            (item) => item.学生学号 === XSXH
          );
          if (index !== -1 && max_index !== -1) {
            this.detailed_students.splice(index, 1);
            this.max_detailed_students.splice(max_index, 1);
            localStorage.setItem(
              "students",
              JSON.stringify(this.max_detailed_students)
            );
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleCurrentChange(val) {    // 分页的页面切换
      
      this.currentPage = val;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 200);
    },
    onAdd() {   //打开“添加信息”
      this.dialogVisible = true;
      if (this.$refs["form"] !== undefined) {
        //再次打开 “添加信息” 后清除表单数据
        this.$refs["form"].resetFields();
      }
    },
    addForm(formName) {   //添加信息
      
      this.found = true;
      this.$refs[formName].validate((valid) => {
        //对整个表单进行校验的方法，参数为一个回调函数。
        //该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
        if (valid) {
          const formList = {
            //将表单里的值填进来
            学生班级编号: this.detailed_id,
            学生编号: "",
            学生姓名: this.form.学生姓名,
            学生性别: this.form.学生性别,
            学生年龄: this.form.学生年龄,
            学生学号: this.form.学生学号,
            学生电话: this.form.学生电话,
          };
          if (this.found) {
            //学号判断

            this.detailed_students.forEach((v) => {
              if (this.form.学生学号 == v.学生学号) {
                this.$message.error("有相同工号，请检查是否输入正确！");
                this.found = false;
              }
            });
            if(this.found){

              if(!this.engrule.test(this.form.学生学号) || !this.numrule.test(this.form.学生学号) || this.strrule.test(this.form.学生学号)){

                this.$message({
                  message:"学号请包含至少一位英文或数字!也不能有中文!",
                  type:'error',
                  duration:2000
                });
                this.found = false;

              }
            

            }
          }
          if (this.found) {
            //年龄判断
            if (!this.numrule.test(this.form.学生年龄)) {
              this.$message.error("输入的年龄格式不正确！");
              this.found = false;
            } else if (this.form.学生年龄 < 18 || this.form.学生年龄 > 65) {
              this.$message.error("输入的年龄格式不正确！");
              this.found = false;
            } else {
              this.found = true;
            }
          }
          if (this.found) {
            //姓名判断
            if (this.numrule.test(this.form.学生姓名)) {
              if(this.骂人变量 <3){

                this.$message.error("输入的姓名格式不正确！");
                this.found = false;
                this.骂人变量++


              }else{

                this.$message.error("就你叫"+this.form.学生姓名+"?");
                this.found = false;

              }
              
            } else {
              this.found = true;
            }
          }

          if (this.found) {
            //电话判断
            if (!this.iponerule.test(this.form.学生电话)|| this.strrule.test(this.form.学生电话) || this.engrule.test(this.form.学生电话)) {
              this.$message.error("输入的电话格式不正确！");
              this.found = false;
            } else {
              this.found = true;
            }
          }

          if (this.found) {
            //found一路畅通为true 则执行添加信息操作
            this.max_detailed_students = JSON.parse(
              localStorage.getItem("students")
            );
            let x = this.max_detailed_students.length - 1;
            formList.学生编号 = this.max_detailed_students[x].学生编号 + 1;

            this.max_detailed_students.push(formList);
            localStorage.setItem(
              "students",
              JSON.stringify(this.max_detailed_students)
            );
            this.dialogVisible = false;
            this.$message.success("添加成功");
            this.点击详细按钮(this.detailed_id);
          }
        }
      });
    },
    back_if() {   //返回
      this.isif = true;
      this.isiff = false;
    },
    onupd(upddata) {    //修改弹窗
      
      const index = this.detailed_students.find((item) => {
        return item.学生编号 == upddata;
      });
      this.upform.修改学生班级编号 = index.学生班级编号;
      this.upform.修改学生编号 = index.学生编号;
      this.upform.修改学生姓名 = index.学生姓名;
      this.upform.修改学生性别 = index.学生性别;
      this.upform.修改学生年龄 = index.学生年龄;
      this.upform.修改学生学号 = index.学生学号;
      this.upform.修改学生电话 = index.学生电话;
      this.upddialogVisible = true;
      this.临时学号 = index.学生学号;
    },
    updForm(formName) {   //修改信息
      
      this.found = true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.found) {
            if (this.numrule.test(this.upform.修改学生姓名)) {
              this.$message.error("输入的姓名格式不正确！");
              this.found = false;
            } else {
              this.found = true;
            }
          }

          if (this.found) {
            //年龄判断
            if (!this.numrule.test(this.upform.修改学生年龄)) {
              this.$message.error("输入的年龄格式不正确！");
              this.found = false;
            } else if (
              this.upform.修改学生年龄 < 18 ||
              this.upform.修改学生年龄 > 65
            ) {
              this.$message.error("输入的年龄格式不正确！");
              this.found = false;
            } else {
              this.found = true;
            }
          }

          if (this.found) {
            //电话判断
            if (!this.iponerule.test(this.upform.修改学生电话) || this.strrule.test(this.upform.修改学生电话) || this.engrule.test(this.upform.修改学生电话)) {
              this.$message.error("输入的电话格式不正确！");
              this.found = false;
            } else {
              this.found = true;
            }
          }
          if (this.found) {
            //工号判断
            if (this.临时学号 == this.upform.修改学生学号) {
              this.found = true;
            } else {
              this.detailed_students.forEach((v) => {
                if (this.upform.修改学生学号 == v.学生学号) {
                  this.$message.error("有相同工号，请检查是否输入正确！");
                  this.found = false;
                }
              });
              if(!this.engrule.test(this.upform.修改学生学号) || !this.numrule.test(this.upform.修改学生学号) || this.strrule.test(this.upform.修改学生学号)){

                this.$message.error("学号请包含至少一位英文和数字!同时不能有中文!");
                this.found = false;

}
            }
          }
          if (this.found) {
            this.detailed_students.forEach((v) => {
              if (v.学生编号 == this.upform.修改学生编号) {
                v.学生班级编号 = this.upform.修改学生班级编号;
                v.学生编号 = this.upform.修改学生编号;
                v.学生姓名 = this.upform.修改学生姓名;
                v.学生性别 = this.upform.修改学生性别;
                v.学生年龄 = this.upform.修改学生年龄;
                v.学生学号 = this.upform.修改学生学号;
                v.学生电话 = this.upform.修改学生电话;
              }
            });
            this.max_detailed_students.forEach((v) => {
              if (v.学生编号 == this.upform.修改学生编号) {
                v.学生班级编号 = this.upform.修改学生班级编号;
                v.学生编号 = this.upform.修改学生编号;
                v.学生姓名 = this.upform.修改学生姓名;
                v.学生性别 = this.upform.修改学生性别;
                v.学生年龄 = this.upform.修改学生年龄;
                v.学生学号 = this.upform.修改学生学号;
                v.学生电话 = this.upform.修改学生电话;
              }
            });
            localStorage.setItem(
              "students",
              JSON.stringify(this.max_detailed_students)
            );
            this.upddialogVisible = false;
          }
        }
      });
    },
    resetForm(formName) {   //重置信息
      
      //对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
      this.$refs[formName].resetFields();
    },
    getUser() {     // 从 localStorage 中读取students和room的数据
      
      if (localStorage.getItem("students")) {
        this.max_detailed_students = JSON.parse(
          localStorage.getItem("students")
        );
      } else {
        // 如果 localStorage 中没有数据，则将当前数据写入 localStorage
        localStorage.setItem("students", JSON.stringify(this.tableData));
        this.max_detailed_students = localStorage.getItem("students");
      }

      if (localStorage.getItem("room")) {
        this.room = JSON.parse(localStorage.getItem("room"));
      } else {
        // 如果 localStorage 中没有数据，则将当前数据写入 localStorage
        localStorage.setItem("room", JSON.stringify(this.initialize_room));
        this.room = JSON.parse(localStorage.getItem("room"));
      }
    },
    onroom() {      //添加课室弹窗
      
      this.课室添加弹窗控制器 = true;
    },
    onroom_on(formName) {   //添加课室
      
      this.$refs[formName].validate((valid) => {
        if (valid) {

          if(!this.strrule.test(this.班级表单.class) || !this.numrule.test(this.班级表单.class) || this.engrule.test(this.班级表单.class)){

            this.$message.error("输入的班级格式不正确！(最起码包含一个中文和一个数字)也不能有英文")

          }
          else if(!this.engrule.test(this.班级表单.class_room.substring(0,1))  || !this.numrule.test(this.班级表单.class_room) || this.strrule.test(this.班级表单.class_room)){

            this.$message.error("输入的课室格式不正确！(最起码包含一个英文和一个数字)也不能有中文")


          }else{

            this.班级表单.class_id = JSON.parse(localStorage.getItem("room")).length + 1;
          this.班级表单.students_Number = 0;
          this.room.push(this.班级表单);
          localStorage.setItem("room", JSON.stringify(this.room));
          this.isDisabled = true;
          this.班级表单 = {
            class_id: "",
            class: "",
            class_teacher: "",
            students_Number: 0,
            Department: "",
            class_room: "",
          };

          this.课室添加弹窗控制器 = false


          }
          
        }
      });
    },
    updroom() {     //修改课室弹窗
      this.isDisabled = true
      this.课室修改弹窗控制器 = true;
      this.修改班级表单 = {
        class_id: this.detailed_id, //班级id(自增)
        class: this.detailed_room, //班级名字
        class_teacher: "", //班主任
        students_Number: this.detailed_students_Number, //班级人数(计算属性)
        Department: "", //所属系部
        class_room: this.detailed_class_room, //课室
      };

    },
    updroom_upd(formName) {    //修改课室信息
      this.修改班级表单.Department = this.班级表单.Department
      this.修改班级表单.class_teacher = this.班级表单.class_teacher
      this.$refs[formName].validate((valid) => {
        if (valid) {

          if(!this.strrule.test(this.修改班级表单.class) || !this.numrule.test(this.修改班级表单.class) || this.engrule.test(this.修改班级表单.class)){

            this.$message.error("输入的班级格式不正确！(最起码包含一个中文和一个数字)也不能包含英文")

          }
          else if(!this.engrule.test(this.修改班级表单.class_room) || !this.numrule.test(this.修改班级表单.class_room) || this.strrule.test(this.修改班级表单.class_room)){

            this.$message.error("输入的课室格式不正确！(最起码包含一个英文和一个数字)不能包含中文")


          }else{

              
              this.room.forEach((v) => {
                if (v.class_id == this.修改班级表单.class_id) {
                  v.class = this.修改班级表单.class;
                  v.class_teacher = this.修改班级表单.class_teacher;
                  v.students_Number = this.修改班级表单.students_Number;
                  v.Department = this.修改班级表单.Department;
                  v.class_room = this.修改班级表单.class_room;
                }

                this.detailed_room = this.修改班级表单.class;
                this.detailed_teacher = this.修改班级表单.class_teacher;
                this.detailed_Department = this.修改班级表单.Department;
                this.detailed_class_room = this.修改班级表单.class_room;
                this.班级表单.Department = ""
                this.班级表单.class_teacher = ""
                this.isDisabled = true
              });

              localStorage.setItem("room", JSON.stringify(this.room));

              this.$message({
                type: "success",
                message: "修改成功!",
              });
              this.课室修改弹窗控制器 = false
            }
          }
        })
    },
    roomdel(classid) {    //删除课室
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });

          this.room.splice(
            this.room.findIndex((item) => item.class_id == classid),
            1
          );
          localStorage.setItem("room", JSON.stringify(this.room));
          this.max_detailed_students = JSON.parse(
            localStorage.getItem("students")
          );
          const full = this.max_detailed_students.filter(
            (item) => item.学生班级编号 == classid
          );
          full.forEach((v) => {
            if (v.学生班级编号 == classid) {
              this.max_detailed_students.splice(full, 1);
              localStorage.setItem("students",JSON.stringify(this.max_detailed_students)
              );
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.getUser();
    let 课室总共数量 = this.room.length;
    for (var i = 0; i < 课室总共数量; i++) {
      this.room[i].students_Number = this.max_detailed_students.filter(
        (item) => item.学生班级编号 == i + 1
      ).length;
    }
  },
  computed: {   
    filterData() {    //查询
      return this.detailed_students.filter((p) =>
        p.学生姓名.includes(this.sear)
      );
    },

  },
  watch: {    
    //监视添加信息中系部的下拉框，1.如果未选择系部则不允许点击教师  2.点击相应的系部进行相应的系部教师渲染
    "班级表单.Department"(newvalue) {
      switch (newvalue) {
        case "信息系":
          this.班级表单.class_teacher = "";
          this.isDisabled = false;
          this.tec = [];
          JSON.parse(localStorage.getItem("infotabledata")).forEach((v) => {
            this.tec.push({ name: v.name });
          });
          break;
        case "机电系":
          this.isDisabled = false;
          this.班级表单.class_teacher = "";
          this.tec = [];
          JSON.parse(localStorage.getItem("mectabledata")).forEach((v) => {
            this.tec.push({ name: v.name });
          });
          break;
        case "创业系":
          this.isDisabled = false;
          this.班级表单.class_teacher = "";
          this.tec = [];
          JSON.parse(localStorage.getItem("ventabledata")).forEach((v) => {
            this.tec.push({ name: v.name });
          });
          break;
        case "服务系":
          this.isDisabled = false;
          this.班级表单.class_teacher = "";
          this.tec = [];
          JSON.parse(localStorage.getItem("sertabledata")).forEach((v) => {
            this.tec.push({ name: v.name });
          });
          break;
        case "制造系":
          this.isDisabled = false;
          this.班级表单.class_teacher = "";
          this.tec = [];
          JSON.parse(localStorage.getItem("fabtabledata")).forEach((v) => {
            this.tec.push({ name: v.name });
          });
          break;
        case "交通系":
          this.isDisabled = false;
          this.班级表单.class_teacher = "";
          this.tec = [];
          JSON.parse(localStorage.getItem("tratabledata")).forEach((v) => {
            this.tec.push({ name: v.name });
          });
          break;
        case "经贸系":
          this.isDisabled = false;
          this.班级表单.class_teacher = "";
          this.tec = [];
          JSON.parse(localStorage.getItem("fintabledata")).forEach((v) => {
            this.tec.push({ name: v.name });
          });
          break;
      }
    },
    // filterDepartment(){
      
    // }
  },
};
</script>

<style scoped>
>>> .el-card__header {
  padding: 5px !important;
}
>>> .sear-input {
  width: 250px;
  position: absolute !important;
  left: 350px;
  top: 95px !important;

}
.card_wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 5px;
}
.c_item {
  flex: 1;
  margin: 0 5px 5px 0;

  width: calc((100% - 10px) / 3);
  min-width: calc((100% - 10px) / 3);
  max-width: calc((100% - 10px) / 3);
}

.c_item:nth-child(3n) {
  margin-right: 0;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 3px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

footer {
  /*转为flex弹性盒布局*/
  display: flex;
  /*主轴上的对齐方式为居中*/
  justify-content: center;
  /*交叉轴上对齐方式为居中*/
  align-items: center;
  margin-top: 15px;
}



[v-cloak] {

display: none;

}

.classtitle{
  padding: 15px 0px 5px 15px;
  margin-bottom: 5px;
}

.classtitle span:nth-child(1){
  font-size: 18px;
  font-family: 400;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s,transform 0.2s ;
}
.fade-enter,

.fade-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}



.fades-enter-active,
.fades-leave-active {
  transition: opacity 0.7s,transform 0.7s;
}
.fades-enter,
.fades-leave-active {
  opacity: 0;
  transform: translateY(400px);
}


</style>

