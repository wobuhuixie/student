<template>
  <div>
    

      <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#4998f1"
      ref="menu"
      :router="true">

      <el-menu-item index="/Info">
        <i class="el-icon-document"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/class">
          <i class="el-icon-s-order"></i>
          <span>班级管理</span>
      </el-menu-item>
      
      <el-submenu index="/teacher">
         <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>教师管理</span>
         </template>
          <el-menu-item index="/teacher/Information">信息系</el-menu-item>
          <el-menu-item index="/teacher/mechatronic">机电系</el-menu-item>
          <el-menu-item index="/teacher/venture">创业系</el-menu-item>
          <el-menu-item index="/teacher/service">服务系</el-menu-item>
          <el-menu-item index="/teacher/fabrication">制造系</el-menu-item>
          <el-menu-item index="/teacher/traffic">交通系</el-menu-item>
          <el-menu-item index="/teacher/finance">经贸系</el-menu-item>
      </el-submenu>

      <el-menu-item index="/specialty">
        <i class="el-icon-collection"></i>
        <span slot="title">专业课管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  mounted () {
    // 禁用浏览器返回键
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', this.disableBrowserBack);
  },

  destroyed() {
    // 清除popstate事件 否则会影响到其他页面
    window.removeEventListener("popstate", this.disableBrowserBack, false);
  },

  methods: {
    disableBrowserBack() {
        history.pushState(null, null, document.URL);
    },

  },
}
</script>

<style scoped>
  .el-menu-vertical-demo{
    width: 200px;
    border: 0;
  }

  .el-menu-vertical-demo .el-menu{
    background-color: #324157 !important;
  }

  .el-submenu .el-menu-item{
    text-indent: 1.7em;
  }

  .el-menu-item{
    background-color: #324157 !important;
  }

  >>>.el-submenu__title{
    background-color: #324157 !important;
  }

  .el-menu{
    user-select: none;
  }

/* 激活当前active样式 */
/* >>> .is-active{   
      background-color: rgb(40, 52, 70) !important;
 } */



</style>