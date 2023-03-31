<template>
    <div class="hidden">
      <!-- 下边内容 -->
      <div class="hd">

        <!--面包屑-->
        <el-breadcrumb separator=">" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              :to="{ path: '/Info' }"
            >首页</el-breadcrumb-item>
            <transition name="breadcrumb">
              <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index">
                <span>{{ item.name }}</span>
              </el-breadcrumb-item>
           </transition>
        </el-breadcrumb>

      </div>  

      <div class="content">
       
          <div class="box"> 
            <transition name="fade" mode="out-in">
              <keep-alive :include="['MyComponent']">
                <router-view></router-view>
              </keep-alive>
            </transition>
          </div>
        
        
      </div>
    </div>
</template>

<script>
export default {
  name:'MyComponent',
  data() {
    return {
     breadcrumbList:[]   //存放路由名字的数组   面包屑
    }
  },
  methods: {
    generateRouter(){
        console.log(this.breadcrumbList);
        //获取当前的路由信息
        const matched = this.$route.matched 
        //遍历路由信息，把信息添加到breadcrumbList数组里展示
        this.breadcrumbList = matched.filter(item => item.meta.breadcrumb).map(item => ({ 
          name: item.name, 
          path: item.path 
          
        }))
        //当面包屑来到首页的时候，去除breadcrumbList数组里的路由信息
        if(this.$route.path == '/Info'){
          this.breadcrumbList = []
        }
      }


  },
  mounted() {
     this.generateRouter()

  },
  watch: {
    $route() {
      this.generateRouter()

    }
  }

}
</script>

<style scoped>

.hidden{
  height: 100%;
  position: fixed;
  right: 0;
  left: 0;
  padding-left: 200px;
  z-index: -1;
  background-color: #eeeded;
  overflow: hidden;
}

.content{
  margin: 15px 15px 0px 15px;


}

.hd{
  width: 100%;
  background-color: #fff;
  height: 50px;
  box-shadow: 0 2px 10px #b4b4b4;
}

.el-breadcrumb{
  line-height: 50px;
  font-size: 16px;
  text-indent: 0.6em;
}

.box{
  width:100%;
  height: 890px;
  line-height: 35px;
}

/* routerview transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s cubic-bezier(.55,0,.1,1), transform 0.4s ;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(40px);
}


/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition:all 0.6s cubic-bezier(.55,0,.1,1);
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move{
  transition:all 0.6s cubic-bezier(.55,0,.1,1);
}

.breadcrumb-leave-active{
  position: absolute;
}

</style>