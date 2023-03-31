<template>
  <div class="layout">
      <!-- 左侧导航 -->
      <div class="menu">
        <Menu></Menu>
      </div>

      <!-- 右侧头部 -->
      <div class="header">
        <Header></Header>
      </div>

      <!-- 右侧内容 -->
      <div class="content">
            <Content></Content>
      </div>
     
  </div>
</template>

<script>

import Menu from './menu/index.vue'
import Content from './content/index.vue'
import Header from './content/header.vue'

export default {
  components:{
    Menu,
    Content,
    Header
  }
}
</script>

<style scoped>
  .menu{
    width: 200px;
    float: left;
    position: fixed;
    bottom: 0;
    left: 0;
    top: 75px;
    background-color: #324157;
  } 

  .content{
    width: 100%;
    overflow: hidden;

  }

</style>